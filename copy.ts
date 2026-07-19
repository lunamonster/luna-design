export const copy = {
  dashboard: {
    weekHeader: 'the week',
    planWeek: 'plan →',
    privateLabel: 'private',
    sharedLabel: 'shared',
    sharedBanner: 'shared view — private items hidden',
    manageRows: '⚙ manage rows',
    todosLabel: 'todos',
    researchLabel: 'research',
    addRow: '+ add',
    emptyTodos: 'all clear',
    emptyResearch: 'nothing to chew on yet',
    emptyDashboard: 'promote a space to start',
    emptyDashboardCta: 'promote a space',
    longPressHint: 'long-press "+ add" to dictate · tap to expand any row',
  },
  reviewQueue: {
    urgentNudge: (n: number) => `${n} items marked urgent — re-triage?`,
    urgentStrongNudge: (n: number) => `${n} items marked urgent — that's a lot. Re-triage?`,
    sidebarBadge: (n: number) => `Review queue (${n})`,
  },
  // Brain-down cloud-fallback consent banner (brain_consent card). One voice
  // for web and, later, the mobile card — the push notification copy in the
  // api mirrors pendingBody.
  brainConsent: {
    pendingTitle: 'Local brain is down',
    pendingBody: (task: string | null | undefined, minutes: number) =>
      `${task ? `Background work (${task}) is queued` : 'Background work is queued'}. Approve cloud fallback for ${minutes} minutes?`,
    approve: (minutes: number) => `Approve (${minutes} min)`,
    deny: 'Deny',
    openTitle: 'Cloud fallback window open',
    openBody: (until: string) => `Local-tier work may use cloud models until ${until}.`,
    revoke: 'Revoke',
  },
  sidebar: {
    luna: 'Luna 2.0',
    tagline: 'meaning is inferred from repeated associations, not enforced structure',
    dashboard: 'Dashboard',
    newChat: '+ New Chat',
    spacesHeader: 'SPACES',
    chatsHeader: 'Chats',
    entities: '🗺️ Entities',
    ingest: '📥 Ingest transcript',
    review: '🗂 Review queue',
    openCommitments: '✅ Open commitments',
    logout: '👋 Logout',
  },
} as const;
