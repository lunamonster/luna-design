import type { DashboardItem } from './types';

export const urgency = {
  nudgeThreshold: 10,
  strongNudgeThreshold: 20,
  levels: ['urgent', 'normal', 'low'] as const,
  rank: { urgent: 0, normal: 1, low: 2 } as const,
};

export const overdue = {
  isOverdue: (item: DashboardItem, today: Date): boolean => {
    if (item.kind !== 'todo' || item.status !== 'open' || !item.deadline) return false;
    return new Date(item.deadline) < today;
  },
};

export const sorts = {
  todos: (a: DashboardItem, b: DashboardItem): number => {
    const ra = urgency.rank[a.priority];
    const rb = urgency.rank[b.priority];
    if (ra !== rb) return ra - rb;
    const da = a.deadline ? new Date(a.deadline).getTime() : Infinity;
    const db = b.deadline ? new Date(b.deadline).getTime() : Infinity;
    if (da !== db) return da - db;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  },
  research: (a: DashboardItem, b: DashboardItem): number => {
    const ra = urgency.rank[a.priority];
    const rb = urgency.rank[b.priority];
    if (ra !== rb) return ra - rb;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  },
};

export const palette = {
  // Deterministic color for a context that has no explicit color set.
  forContext: (contextId: string, paletteColors: readonly string[]): string => {
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
export const rules = { urgency, overdue, sorts, palette };
