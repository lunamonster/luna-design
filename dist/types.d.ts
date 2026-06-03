export type Priority = 'urgent' | 'normal' | 'low';
export type Kind = 'todo' | 'research';
export type ItemStatus = 'open' | 'done' | 'snoozed' | 'dropped' | 'archived';
export type Sensitivity = 'standard' | 'private' | 'restricted';
export interface DashboardItem {
    id: string;
    description: string;
    deliverable: string | null;
    deadline: string | null;
    kind: Kind;
    status: ItemStatus;
    priority: Priority;
    context_id: string | null;
    space_name: string | null;
    created_at: string;
    is_overdue: boolean;
}
export interface DashboardSpace {
    id: string;
    name: string;
    color: string;
    tagline: string | null;
    sensitivity: Sensitivity;
    todos: DashboardItem[];
    research: DashboardItem[];
    todo_count: number;
    research_count: number;
}
export interface DashboardDay {
    date: string;
    is_today: boolean;
    focus: string;
}
export interface DashboardResponse {
    week: {
        start: string;
        end: string;
        days: DashboardDay[];
    };
    unsorted: {
        todos: DashboardItem[];
        research: DashboardItem[];
        todo_count: number;
        research_count: number;
    };
    spaces: DashboardSpace[];
    urgent_count: number;
}
export interface ProposalSummary {
    proposals: unknown[];
    urgent_count: number;
    total_pending: number;
}
