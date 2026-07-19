import { z } from 'zod';
export declare const ingestReceiptPayloadSchema: z.ZodObject<{
    artifact_id: z.ZodString;
    rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    counts: z.ZodObject<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>;
    stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    artifact_id: z.ZodString;
    rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    counts: z.ZodObject<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>;
    stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    artifact_id: z.ZodString;
    rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    counts: z.ZodObject<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>;
    stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const ingestReceiptCardSchema: z.ZodObject<{
    artifact_id: z.ZodString;
    rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    counts: z.ZodObject<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>;
    stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"ingest_receipt">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    artifact_id: z.ZodString;
    rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    counts: z.ZodObject<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>;
    stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"ingest_receipt">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    artifact_id: z.ZodString;
    rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    counts: z.ZodObject<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>;
    stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"ingest_receipt">;
}, z.ZodTypeAny, "passthrough">>;
export declare const boundaryPromptPayloadSchema: z.ZodObject<{
    minutes: z.ZodNumber;
    transcript_chars: z.ZodNumber;
    held_items: z.ZodNumber;
    artifact_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    chips: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    filing: z.ZodOptional<z.ZodEnum<["pending", "complete", "skipped", "failed", "none"]>>;
    receipt: z.ZodOptional<z.ZodObject<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    minutes: z.ZodNumber;
    transcript_chars: z.ZodNumber;
    held_items: z.ZodNumber;
    artifact_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    chips: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    filing: z.ZodOptional<z.ZodEnum<["pending", "complete", "skipped", "failed", "none"]>>;
    receipt: z.ZodOptional<z.ZodObject<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    minutes: z.ZodNumber;
    transcript_chars: z.ZodNumber;
    held_items: z.ZodNumber;
    artifact_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    chips: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    filing: z.ZodOptional<z.ZodEnum<["pending", "complete", "skipped", "failed", "none"]>>;
    receipt: z.ZodOptional<z.ZodObject<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const sessionCardPayloadSchema: z.ZodObject<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">>;
export declare const documentPayloadSchema: z.ZodObject<{
    artifact_id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    artifact_id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    artifact_id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const imagePayloadSchema: z.ZodObject<{
    storage_url: z.ZodString;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    storage_url: z.ZodString;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    storage_url: z.ZodString;
}, z.ZodTypeAny, "passthrough">>;
export declare const instagramHandoffPayloadSchema: z.ZodObject<{
    assetUrl: z.ZodString;
    target: z.ZodEnum<["story", "reel"]>;
    mimeType: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    assetUrl: z.ZodString;
    target: z.ZodEnum<["story", "reel"]>;
    mimeType: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    assetUrl: z.ZodString;
    target: z.ZodEnum<["story", "reel"]>;
    mimeType: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const brainConsentPayloadSchema: z.ZodObject<{
    state: z.ZodEnum<["pending", "open"]>;
    requested_for: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requested_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    window_minutes: z.ZodNumber;
    expires_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    state: z.ZodEnum<["pending", "open"]>;
    requested_for: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requested_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    window_minutes: z.ZodNumber;
    expires_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    state: z.ZodEnum<["pending", "open"]>;
    requested_for: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requested_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    window_minutes: z.ZodNumber;
    expires_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const boundaryPromptCardSchema: z.ZodObject<{
    minutes: z.ZodNumber;
    transcript_chars: z.ZodNumber;
    held_items: z.ZodNumber;
    artifact_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    chips: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    filing: z.ZodOptional<z.ZodEnum<["pending", "complete", "skipped", "failed", "none"]>>;
    receipt: z.ZodOptional<z.ZodObject<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">>>;
} & {
    type: z.ZodLiteral<"boundary_prompt">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    minutes: z.ZodNumber;
    transcript_chars: z.ZodNumber;
    held_items: z.ZodNumber;
    artifact_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    chips: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    filing: z.ZodOptional<z.ZodEnum<["pending", "complete", "skipped", "failed", "none"]>>;
    receipt: z.ZodOptional<z.ZodObject<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">>>;
} & {
    type: z.ZodLiteral<"boundary_prompt">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    minutes: z.ZodNumber;
    transcript_chars: z.ZodNumber;
    held_items: z.ZodNumber;
    artifact_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    chips: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    filing: z.ZodOptional<z.ZodEnum<["pending", "complete", "skipped", "failed", "none"]>>;
    receipt: z.ZodOptional<z.ZodObject<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">>>;
} & {
    type: z.ZodLiteral<"boundary_prompt">;
}, z.ZodTypeAny, "passthrough">>;
export declare const intakeSummaryCardSchema: z.ZodObject<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"intake_summary">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"intake_summary">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"intake_summary">;
}, z.ZodTypeAny, "passthrough">>;
export declare const sessionResultCardSchema: z.ZodObject<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"session_result">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"session_result">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"session_result">;
}, z.ZodTypeAny, "passthrough">>;
export declare const documentCardSchema: z.ZodObject<{
    artifact_id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"document">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    artifact_id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"document">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    artifact_id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"document">;
}, z.ZodTypeAny, "passthrough">>;
export declare const imageCardSchema: z.ZodObject<{
    storage_url: z.ZodString;
} & {
    type: z.ZodLiteral<"image">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    storage_url: z.ZodString;
} & {
    type: z.ZodLiteral<"image">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    storage_url: z.ZodString;
} & {
    type: z.ZodLiteral<"image">;
}, z.ZodTypeAny, "passthrough">>;
export declare const instagramHandoffCardSchema: z.ZodObject<{
    assetUrl: z.ZodString;
    target: z.ZodEnum<["story", "reel"]>;
    mimeType: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"instagram_handoff">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    assetUrl: z.ZodString;
    target: z.ZodEnum<["story", "reel"]>;
    mimeType: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"instagram_handoff">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    assetUrl: z.ZodString;
    target: z.ZodEnum<["story", "reel"]>;
    mimeType: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"instagram_handoff">;
}, z.ZodTypeAny, "passthrough">>;
export declare const brainConsentCardSchema: z.ZodObject<{
    state: z.ZodEnum<["pending", "open"]>;
    requested_for: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requested_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    window_minutes: z.ZodNumber;
    expires_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"brain_consent">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    state: z.ZodEnum<["pending", "open"]>;
    requested_for: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requested_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    window_minutes: z.ZodNumber;
    expires_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"brain_consent">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    state: z.ZodEnum<["pending", "open"]>;
    requested_for: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requested_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    window_minutes: z.ZodNumber;
    expires_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"brain_consent">;
}, z.ZodTypeAny, "passthrough">>;
export declare const cardMetadataSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    minutes: z.ZodNumber;
    transcript_chars: z.ZodNumber;
    held_items: z.ZodNumber;
    artifact_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    chips: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    filing: z.ZodOptional<z.ZodEnum<["pending", "complete", "skipped", "failed", "none"]>>;
    receipt: z.ZodOptional<z.ZodObject<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">>>;
} & {
    type: z.ZodLiteral<"boundary_prompt">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    minutes: z.ZodNumber;
    transcript_chars: z.ZodNumber;
    held_items: z.ZodNumber;
    artifact_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    chips: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    filing: z.ZodOptional<z.ZodEnum<["pending", "complete", "skipped", "failed", "none"]>>;
    receipt: z.ZodOptional<z.ZodObject<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">>>;
} & {
    type: z.ZodLiteral<"boundary_prompt">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    minutes: z.ZodNumber;
    transcript_chars: z.ZodNumber;
    held_items: z.ZodNumber;
    artifact_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    chips: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    filing: z.ZodOptional<z.ZodEnum<["pending", "complete", "skipped", "failed", "none"]>>;
    receipt: z.ZodOptional<z.ZodObject<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough">>>;
} & {
    type: z.ZodLiteral<"boundary_prompt">;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    artifact_id: z.ZodString;
    rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    counts: z.ZodObject<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>;
    stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"ingest_receipt">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    artifact_id: z.ZodString;
    rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    counts: z.ZodObject<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>;
    stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"ingest_receipt">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    artifact_id: z.ZodString;
    rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodNullable<z.ZodString>;
    counts: z.ZodObject<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        proposals_pending: z.ZodNumber;
        action_items: z.ZodNumber;
        story_threads: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>;
    stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"ingest_receipt">;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"intake_summary">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"intake_summary">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"intake_summary">;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"session_result">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"session_result">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    session_id: z.ZodOptional<z.ZodString>;
    frames: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    transcript: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        text: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
} & {
    type: z.ZodLiteral<"session_result">;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    artifact_id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"document">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    artifact_id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"document">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    artifact_id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"document">;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    storage_url: z.ZodString;
} & {
    type: z.ZodLiteral<"image">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    storage_url: z.ZodString;
} & {
    type: z.ZodLiteral<"image">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    storage_url: z.ZodString;
} & {
    type: z.ZodLiteral<"image">;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    assetUrl: z.ZodString;
    target: z.ZodEnum<["story", "reel"]>;
    mimeType: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"instagram_handoff">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    assetUrl: z.ZodString;
    target: z.ZodEnum<["story", "reel"]>;
    mimeType: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"instagram_handoff">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    assetUrl: z.ZodString;
    target: z.ZodEnum<["story", "reel"]>;
    mimeType: z.ZodOptional<z.ZodString>;
    caption: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"instagram_handoff">;
}, z.ZodTypeAny, "passthrough">>, z.ZodObject<{
    state: z.ZodEnum<["pending", "open"]>;
    requested_for: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requested_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    window_minutes: z.ZodNumber;
    expires_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"brain_consent">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    state: z.ZodEnum<["pending", "open"]>;
    requested_for: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requested_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    window_minutes: z.ZodNumber;
    expires_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"brain_consent">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    state: z.ZodEnum<["pending", "open"]>;
    requested_for: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requested_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    window_minutes: z.ZodNumber;
    expires_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    type: z.ZodLiteral<"brain_consent">;
}, z.ZodTypeAny, "passthrough">>]>;
export type CardMetadata = z.infer<typeof cardMetadataSchema>;
export type CardType = CardMetadata['type'];
export type BoundaryPromptCard = z.infer<typeof boundaryPromptCardSchema>;
export type IngestReceiptCard = z.infer<typeof ingestReceiptCardSchema>;
export type IntakeSummaryCard = z.infer<typeof intakeSummaryCardSchema>;
export type SessionResultCard = z.infer<typeof sessionResultCardSchema>;
export type DocumentCard = z.infer<typeof documentCardSchema>;
export type ImageCard = z.infer<typeof imageCardSchema>;
export type InstagramHandoffCard = z.infer<typeof instagramHandoffCardSchema>;
export type BrainConsentCard = z.infer<typeof brainConsentCardSchema>;
export declare const KNOWN_CARD_TYPES: readonly ["boundary_prompt", "ingest_receipt", "intake_summary", "session_result", "document", "image", "instagram_handoff", "brain_consent"];
export declare const buildBoundaryPromptCard: (p: z.input<typeof boundaryPromptPayloadSchema>) => {
    type: "boundary_prompt";
    minutes: number;
    transcript_chars: number;
    held_items: number;
    chips: z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        ask: z.ZodNullable<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">[];
    artifact_id?: string | null | undefined;
    filing?: "pending" | "complete" | "skipped" | "failed" | "none" | undefined;
    receipt?: z.objectOutputType<{
        artifact_id: z.ZodString;
        rollup_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        summary: z.ZodNullable<z.ZodString>;
        counts: z.ZodObject<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            proposals_pending: z.ZodNumber;
            action_items: z.ZodNumber;
            story_threads: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>;
        stories: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            name: z.ZodString;
            status: z.ZodString;
            telling_count: z.ZodNumber;
            kind: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        actions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            label: z.ZodString;
            description: z.ZodOptional<z.ZodString>;
            href: z.ZodOptional<z.ZodString>;
            detail: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        batch_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        type: z.ZodLiteral<"ingest_receipt">;
    }, z.ZodTypeAny, "passthrough"> | undefined;
} & {
    [k: string]: unknown;
} & {
    type: "boundary_prompt";
};
export declare const buildIngestReceiptCard: (p: z.input<typeof ingestReceiptPayloadSchema>) => {
    type: "ingest_receipt";
    artifact_id: string;
    summary: string | null;
    counts: {
        proposals_pending: number;
        action_items: number;
        story_threads?: number | undefined;
    } & {
        [k: string]: unknown;
    };
    rollup_id?: string | null | undefined;
    stories?: z.objectOutputType<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodString;
        telling_count: z.ZodNumber;
        kind: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    actions?: z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    batch_id?: string | null | undefined;
} & {
    [k: string]: unknown;
} & {
    type: "ingest_receipt";
};
export declare const buildIntakeSummaryCard: (p: z.input<typeof sessionCardPayloadSchema>) => {
    type: "intake_summary";
    actions?: z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    session_id?: string | undefined;
    frames?: string[] | undefined;
    transcript?: z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough"> | undefined;
} & {
    [k: string]: unknown;
} & {
    type: "intake_summary";
};
export declare const buildSessionResultCard: (p: z.input<typeof sessionCardPayloadSchema>) => {
    type: "session_result";
    actions?: z.objectOutputType<{
        id: z.ZodString;
        label: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        href: z.ZodOptional<z.ZodString>;
        detail: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    session_id?: string | undefined;
    frames?: string[] | undefined;
    transcript?: z.objectOutputType<{
        id: z.ZodString;
        text: z.ZodString;
    }, z.ZodTypeAny, "passthrough"> | undefined;
} & {
    [k: string]: unknown;
} & {
    type: "session_result";
};
export declare const buildDocumentCard: (p: z.input<typeof documentPayloadSchema>) => {
    type: "document";
    artifact_id: string;
    title?: string | undefined;
} & {
    [k: string]: unknown;
} & {
    type: "document";
};
export declare const buildImageCard: (p: z.input<typeof imagePayloadSchema>) => {
    type: "image";
    storage_url: string;
} & {
    [k: string]: unknown;
} & {
    type: "image";
};
export declare const buildInstagramHandoffCard: (p: z.input<typeof instagramHandoffPayloadSchema>) => {
    type: "instagram_handoff";
    assetUrl: string;
    target: "story" | "reel";
    mimeType?: string | undefined;
    caption?: string | undefined;
} & {
    [k: string]: unknown;
} & {
    type: "instagram_handoff";
};
export declare const buildBrainConsentCard: (p: z.input<typeof brainConsentPayloadSchema>) => {
    type: "brain_consent";
    state: "pending" | "open";
    window_minutes: number;
    requested_for?: string | null | undefined;
    reason?: string | null | undefined;
    requested_at?: string | null | undefined;
    expires_at?: string | null | undefined;
} & {
    [k: string]: unknown;
} & {
    type: "brain_consent";
};
export declare const cardRenderIntent: Record<CardType, {
    web: boolean;
    mobile: boolean;
    note?: string;
}>;
