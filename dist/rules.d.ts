import type { DashboardItem } from './types';
export declare const urgency: {
    nudgeThreshold: number;
    strongNudgeThreshold: number;
    levels: readonly ["urgent", "normal", "low"];
    rank: {
        readonly urgent: 0;
        readonly normal: 1;
        readonly low: 2;
    };
};
export declare const overdue: {
    isOverdue: (item: DashboardItem, today: Date) => boolean;
};
export declare const sorts: {
    todos: (a: DashboardItem, b: DashboardItem) => number;
    research: (a: DashboardItem, b: DashboardItem) => number;
};
export declare const palette: {
    forContext: (contextId: string, paletteColors: readonly string[]) => string;
};
export declare const rules: {
    urgency: {
        nudgeThreshold: number;
        strongNudgeThreshold: number;
        levels: readonly ["urgent", "normal", "low"];
        rank: {
            readonly urgent: 0;
            readonly normal: 1;
            readonly low: 2;
        };
    };
    overdue: {
        isOverdue: (item: DashboardItem, today: Date) => boolean;
    };
    sorts: {
        todos: (a: DashboardItem, b: DashboardItem) => number;
        research: (a: DashboardItem, b: DashboardItem) => number;
    };
    palette: {
        forContext: (contextId: string, paletteColors: readonly string[]) => string;
    };
};
