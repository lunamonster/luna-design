"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardRenderIntent = exports.buildInstagramHandoffCard = exports.buildImageCard = exports.buildDocumentCard = exports.buildSessionResultCard = exports.buildIntakeSummaryCard = exports.buildIngestReceiptCard = exports.buildBoundaryPromptCard = exports.KNOWN_CARD_TYPES = exports.cardMetadataSchema = exports.instagramHandoffCardSchema = exports.imageCardSchema = exports.documentCardSchema = exports.sessionResultCardSchema = exports.intakeSummaryCardSchema = exports.boundaryPromptCardSchema = exports.instagramHandoffPayloadSchema = exports.imagePayloadSchema = exports.documentPayloadSchema = exports.sessionCardPayloadSchema = exports.boundaryPromptPayloadSchema = exports.ingestReceiptCardSchema = exports.ingestReceiptPayloadSchema = void 0;
const zod_1 = require("zod");
// ---------------------------------------------------------------------------
// Shared fragments
const actionSchema = zod_1.z
    .object({
    id: zod_1.z.string(),
    label: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    href: zod_1.z.string().optional(),
    detail: zod_1.z.string().optional(),
})
    .passthrough();
const transcriptRefSchema = zod_1.z
    .object({ id: zod_1.z.string(), text: zod_1.z.string() })
    .passthrough();
// ---------------------------------------------------------------------------
// Per-card payload schemas (payload = metadata minus the `type` tag)
// Emitted by api ingest route; also nested inside boundary_prompt.receipt.
exports.ingestReceiptPayloadSchema = zod_1.z
    .object({
    artifact_id: zod_1.z.string(),
    rollup_id: zod_1.z.string().nullish(),
    summary: zod_1.z.string().nullable(),
    counts: zod_1.z
        .object({
        proposals_pending: zod_1.z.number(),
        action_items: zod_1.z.number(),
        story_threads: zod_1.z.number().optional(),
    })
        .passthrough(),
    stories: zod_1.z
        .array(zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
        status: zod_1.z.string(),
        telling_count: zod_1.z.number(),
        kind: zod_1.z.string(),
    })
        .passthrough())
        .optional(),
    actions: zod_1.z.array(actionSchema).optional(),
    batch_id: zod_1.z.string().nullish(),
})
    .passthrough();
// Tagged ingest_receipt card — declared before boundary_prompt because the
// boundary card embeds the FULL tagged receipt: the async filing pipeline
// merges the same receipt object (type included) into the boundary message's
// metadata in place (ingest.ts fireIngestReceipt).
exports.ingestReceiptCardSchema = exports.ingestReceiptPayloadSchema.extend({
    type: zod_1.z.literal('ingest_receipt'),
});
// Meeting wrap-up card (api ai route).
exports.boundaryPromptPayloadSchema = zod_1.z
    .object({
    minutes: zod_1.z.number(),
    transcript_chars: zod_1.z.number(),
    held_items: zod_1.z.number(),
    artifact_id: zod_1.z.string().nullish(),
    chips: zod_1.z
        .array(zod_1.z.object({ id: zod_1.z.string(), label: zod_1.z.string(), ask: zod_1.z.string().nullable() }).passthrough())
        .default([]),
    filing: zod_1.z.enum(['pending', 'complete', 'skipped', 'failed', 'none']).optional(),
    receipt: exports.ingestReceiptCardSchema.optional(),
})
    .passthrough();
// Session cards (api sessionCard.ts): intake_summary is the pre-output
// orienting message, session_result the completion card — same payload shape.
exports.sessionCardPayloadSchema = zod_1.z
    .object({
    session_id: zod_1.z.string().optional(),
    frames: zod_1.z.array(zod_1.z.string()).optional(),
    transcript: transcriptRefSchema.optional(),
    actions: zod_1.z.array(actionSchema).optional(),
})
    .passthrough();
// Composed-document pointer (api documents route).
exports.documentPayloadSchema = zod_1.z
    .object({
    artifact_id: zod_1.z.string(),
    title: zod_1.z.string().optional(),
})
    .passthrough();
// Inline image (produced CLIENT-side on upload — web chatlayout; in the
// contract so both clients render each other's uploads identically).
exports.imagePayloadSchema = zod_1.z
    .object({
    storage_url: zod_1.z.string(),
})
    .passthrough();
// Android-only Instagram hand-off (produced by the api for mobile; web never
// renders it — see cardRenderIntent).
exports.instagramHandoffPayloadSchema = zod_1.z
    .object({
    assetUrl: zod_1.z.string(),
    target: zod_1.z.enum(['story', 'reel']),
    mimeType: zod_1.z.string().optional(),
    caption: zod_1.z.string().optional(),
})
    .passthrough();
// ---------------------------------------------------------------------------
// Tagged card schemas + the discriminated union
exports.boundaryPromptCardSchema = exports.boundaryPromptPayloadSchema.extend({
    type: zod_1.z.literal('boundary_prompt'),
});
exports.intakeSummaryCardSchema = exports.sessionCardPayloadSchema.extend({
    type: zod_1.z.literal('intake_summary'),
});
exports.sessionResultCardSchema = exports.sessionCardPayloadSchema.extend({
    type: zod_1.z.literal('session_result'),
});
exports.documentCardSchema = exports.documentPayloadSchema.extend({
    type: zod_1.z.literal('document'),
});
exports.imageCardSchema = exports.imagePayloadSchema.extend({
    type: zod_1.z.literal('image'),
});
exports.instagramHandoffCardSchema = exports.instagramHandoffPayloadSchema.extend({
    type: zod_1.z.literal('instagram_handoff'),
});
exports.cardMetadataSchema = zod_1.z.discriminatedUnion('type', [
    exports.boundaryPromptCardSchema,
    exports.ingestReceiptCardSchema,
    exports.intakeSummaryCardSchema,
    exports.sessionResultCardSchema,
    exports.documentCardSchema,
    exports.imageCardSchema,
    exports.instagramHandoffCardSchema,
]);
exports.KNOWN_CARD_TYPES = [
    'boundary_prompt',
    'ingest_receipt',
    'intake_summary',
    'session_result',
    'document',
    'image',
    'instagram_handoff',
];
// ---------------------------------------------------------------------------
// Builders — the api's ONLY sanctioned way to construct card metadata.
// Strict validation lives here, at emission; never on a client.
function build(type, schema, payload) {
    return schema.parse({ ...payload, type });
}
const buildBoundaryPromptCard = (p) => build('boundary_prompt', exports.boundaryPromptCardSchema, p);
exports.buildBoundaryPromptCard = buildBoundaryPromptCard;
const buildIngestReceiptCard = (p) => build('ingest_receipt', exports.ingestReceiptCardSchema, p);
exports.buildIngestReceiptCard = buildIngestReceiptCard;
const buildIntakeSummaryCard = (p) => build('intake_summary', exports.intakeSummaryCardSchema, p);
exports.buildIntakeSummaryCard = buildIntakeSummaryCard;
const buildSessionResultCard = (p) => build('session_result', exports.sessionResultCardSchema, p);
exports.buildSessionResultCard = buildSessionResultCard;
const buildDocumentCard = (p) => build('document', exports.documentCardSchema, p);
exports.buildDocumentCard = buildDocumentCard;
const buildImageCard = (p) => build('image', exports.imageCardSchema, p);
exports.buildImageCard = buildImageCard;
const buildInstagramHandoffCard = (p) => build('instagram_handoff', exports.instagramHandoffCardSchema, p);
exports.buildInstagramHandoffCard = buildInstagramHandoffCard;
// ---------------------------------------------------------------------------
// Per-client rendering intent — the RECORD of deliberate asymmetries, so they
// are stated instead of archaeological (design doc, drift-ledger #11/#12).
// `false` means "deliberately falls through to that client's text fallback",
// not "unsupported".
exports.cardRenderIntent = {
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
