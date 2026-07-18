// Chat card contracts — the single home for message `metadata.type` schemas.
//
// THE RULE (DESIGN-INTENT-parity-architecture-2026-07-18.md, F5):
//   - The api EMITS through the builder functions below (strict: a divergent
//     shape is a compile error or a dev-time parse throw at the server).
//   - Clients are TOLERANT READERS: they type their renderers from these
//     schemas but never hard-fail on unknown types or extra fields — mobile's
//     unknown-type → markdown fallback and web's ReactMarkdown fallback are
//     features, not gaps. Hence .passthrough() everywhere: additive server
//     fields must never break an installed client.
//
// Adding a card type = adding it here first. Both clients and the api
// type-check against the union, so a new type that skips this file fails tsc
// wherever it's handled.

import { z } from 'zod';

// ---------------------------------------------------------------------------
// Shared fragments

const actionSchema = z
  .object({
    id: z.string(),
    label: z.string(),
    description: z.string().optional(),
    href: z.string().optional(),
    detail: z.string().optional(),
  })
  .passthrough();

const transcriptRefSchema = z
  .object({ id: z.string(), text: z.string() })
  .passthrough();

// ---------------------------------------------------------------------------
// Per-card payload schemas (payload = metadata minus the `type` tag)

// Emitted by api ingest route; also nested inside boundary_prompt.receipt.
export const ingestReceiptPayloadSchema = z
  .object({
    artifact_id: z.string(),
    rollup_id: z.string().nullish(),
    summary: z.string().nullable(),
    counts: z
      .object({
        proposals_pending: z.number(),
        action_items: z.number(),
        story_threads: z.number().optional(),
      })
      .passthrough(),
    stories: z
      .array(
        z
          .object({
            id: z.string(),
            name: z.string(),
            status: z.string(),
            telling_count: z.number(),
            kind: z.string(),
          })
          .passthrough()
      )
      .optional(),
    actions: z.array(actionSchema).optional(),
    batch_id: z.string().nullish(),
  })
  .passthrough();

// Meeting wrap-up card (api ai route).
export const boundaryPromptPayloadSchema = z
  .object({
    minutes: z.number(),
    transcript_chars: z.number(),
    held_items: z.number(),
    artifact_id: z.string().nullish(),
    chips: z
      .array(z.object({ id: z.string(), label: z.string(), ask: z.string().nullable() }).passthrough())
      .default([]),
    filing: z.enum(['pending', 'complete', 'skipped', 'failed', 'none']).optional(),
    receipt: ingestReceiptPayloadSchema.optional(),
  })
  .passthrough();

// Session cards (api sessionCard.ts): intake_summary is the pre-output
// orienting message, session_result the completion card — same payload shape.
export const sessionCardPayloadSchema = z
  .object({
    session_id: z.string().optional(),
    frames: z.array(z.string()).optional(),
    transcript: transcriptRefSchema.optional(),
    actions: z.array(actionSchema).optional(),
  })
  .passthrough();

// Composed-document pointer (api documents route).
export const documentPayloadSchema = z
  .object({
    artifact_id: z.string(),
    title: z.string().optional(),
  })
  .passthrough();

// Inline image (produced CLIENT-side on upload — web chatlayout; in the
// contract so both clients render each other's uploads identically).
export const imagePayloadSchema = z
  .object({
    storage_url: z.string(),
  })
  .passthrough();

// Android-only Instagram hand-off (produced by the api for mobile; web never
// renders it — see cardRenderIntent).
export const instagramHandoffPayloadSchema = z
  .object({
    assetUrl: z.string(),
    target: z.enum(['story', 'reel']),
    mimeType: z.string().optional(),
    caption: z.string().optional(),
  })
  .passthrough();

// ---------------------------------------------------------------------------
// Tagged card schemas + the discriminated union

export const boundaryPromptCardSchema = boundaryPromptPayloadSchema.extend({
  type: z.literal('boundary_prompt'),
});
export const ingestReceiptCardSchema = ingestReceiptPayloadSchema.extend({
  type: z.literal('ingest_receipt'),
});
export const intakeSummaryCardSchema = sessionCardPayloadSchema.extend({
  type: z.literal('intake_summary'),
});
export const sessionResultCardSchema = sessionCardPayloadSchema.extend({
  type: z.literal('session_result'),
});
export const documentCardSchema = documentPayloadSchema.extend({
  type: z.literal('document'),
});
export const imageCardSchema = imagePayloadSchema.extend({
  type: z.literal('image'),
});
export const instagramHandoffCardSchema = instagramHandoffPayloadSchema.extend({
  type: z.literal('instagram_handoff'),
});

export const cardMetadataSchema = z.discriminatedUnion('type', [
  boundaryPromptCardSchema,
  ingestReceiptCardSchema,
  intakeSummaryCardSchema,
  sessionResultCardSchema,
  documentCardSchema,
  imageCardSchema,
  instagramHandoffCardSchema,
]);

export type CardMetadata = z.infer<typeof cardMetadataSchema>;
export type CardType = CardMetadata['type'];
export type BoundaryPromptCard = z.infer<typeof boundaryPromptCardSchema>;
export type IngestReceiptCard = z.infer<typeof ingestReceiptCardSchema>;
export type IntakeSummaryCard = z.infer<typeof intakeSummaryCardSchema>;
export type SessionResultCard = z.infer<typeof sessionResultCardSchema>;
export type DocumentCard = z.infer<typeof documentCardSchema>;
export type ImageCard = z.infer<typeof imageCardSchema>;
export type InstagramHandoffCard = z.infer<typeof instagramHandoffCardSchema>;

export const KNOWN_CARD_TYPES = [
  'boundary_prompt',
  'ingest_receipt',
  'intake_summary',
  'session_result',
  'document',
  'image',
  'instagram_handoff',
] as const satisfies readonly CardType[];

// ---------------------------------------------------------------------------
// Builders — the api's ONLY sanctioned way to construct card metadata.
// Strict validation lives here, at emission; never on a client.

function build<T extends CardType, S extends z.ZodTypeAny>(
  type: T,
  schema: S,
  payload: unknown
): z.infer<S> & { type: T } {
  return schema.parse({ ...(payload as object), type });
}

export const buildBoundaryPromptCard = (p: z.input<typeof boundaryPromptPayloadSchema>) =>
  build('boundary_prompt', boundaryPromptCardSchema, p);
export const buildIngestReceiptCard = (p: z.input<typeof ingestReceiptPayloadSchema>) =>
  build('ingest_receipt', ingestReceiptCardSchema, p);
export const buildIntakeSummaryCard = (p: z.input<typeof sessionCardPayloadSchema>) =>
  build('intake_summary', intakeSummaryCardSchema, p);
export const buildSessionResultCard = (p: z.input<typeof sessionCardPayloadSchema>) =>
  build('session_result', sessionResultCardSchema, p);
export const buildDocumentCard = (p: z.input<typeof documentPayloadSchema>) =>
  build('document', documentCardSchema, p);
export const buildImageCard = (p: z.input<typeof imagePayloadSchema>) =>
  build('image', imageCardSchema, p);
export const buildInstagramHandoffCard = (p: z.input<typeof instagramHandoffPayloadSchema>) =>
  build('instagram_handoff', instagramHandoffCardSchema, p);

// ---------------------------------------------------------------------------
// Per-client rendering intent — the RECORD of deliberate asymmetries, so they
// are stated instead of archaeological (design doc, drift-ledger #11/#12).
// `false` means "deliberately falls through to that client's text fallback",
// not "unsupported".

export const cardRenderIntent: Record<CardType, { web: boolean; mobile: boolean; note?: string }> = {
  boundary_prompt: { web: true, mobile: true },
  ingest_receipt: { web: true, mobile: true },
  intake_summary: { web: true, mobile: true },
  session_result: {
    web: false,
    mobile: true,
    note: 'web deliberately renders the plain-text fallback (sessionProcessor comment)',
  },
  document: { web: true, mobile: true, note: 'mobile renderer lands in REQ-parity-arch-mobile Phase 2' },
  image: { web: true, mobile: true, note: 'mobile renderer lands in REQ-parity-arch-mobile Phase 2' },
  instagram_handoff: { web: false, mobile: true, note: 'Android-only sharing intent hand-off' },
};
