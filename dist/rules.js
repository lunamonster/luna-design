"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = exports.palette = exports.sorts = exports.overdue = exports.urgency = void 0;
exports.urgency = {
    nudgeThreshold: 10,
    strongNudgeThreshold: 20,
    levels: ['urgent', 'normal', 'low'],
    rank: { urgent: 0, normal: 1, low: 2 },
};
exports.overdue = {
    isOverdue: (item, today) => {
        if (item.kind !== 'todo' || item.status !== 'open' || !item.deadline)
            return false;
        return new Date(item.deadline) < today;
    },
};
exports.sorts = {
    todos: (a, b) => {
        const ra = exports.urgency.rank[a.priority];
        const rb = exports.urgency.rank[b.priority];
        if (ra !== rb)
            return ra - rb;
        const da = a.deadline ? new Date(a.deadline).getTime() : Infinity;
        const db = b.deadline ? new Date(b.deadline).getTime() : Infinity;
        if (da !== db)
            return da - db;
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    },
    research: (a, b) => {
        const ra = exports.urgency.rank[a.priority];
        const rb = exports.urgency.rank[b.priority];
        if (ra !== rb)
            return ra - rb;
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    },
};
exports.palette = {
    // Deterministic color for a context that has no explicit color set.
    forContext: (contextId, paletteColors) => {
        let hash = 0;
        for (let i = 0; i < contextId.length; i++) {
            hash = ((hash << 5) - hash) + contextId.charCodeAt(i);
            hash |= 0;
        }
        return paletteColors[Math.abs(hash) % paletteColors.length];
    },
};
// Aggregate namespace so consumers can `import { rules }` and reach
// rules.urgency / rules.overdue / rules.sorts / rules.palette (see README §9).
exports.rules = { urgency: exports.urgency, overdue: exports.overdue, sorts: exports.sorts, palette: exports.palette };
