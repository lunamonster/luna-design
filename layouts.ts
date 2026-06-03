// Layout measurements per surface. Values reconcile to the live dashboard as
// each surface is wired to consume them; treat measurements not yet wired as
// the target spec.

export const dashboardLayout = {
  shell: {
    sidebarWidth: 240,
    weekColumnWidth: 260,
    maxWidth: 1600,
  },
  spaceCard: {
    padding: { top: 18, x: 24, bottom: 16 },
    gap: 16,                                  // vertical between cards
    borderLeftWidth: 4,
    twoColumnGap: 36,                         // todos | research gap (desktop)
  },
  itemRow: {
    paddingY: 3,
    fontSize: 14,
    lineHeight: 1.4,
    circleSize: 13,
    circleGap: 9,
    urgentDotSize: 4,
    urgentDotOffset: -8,
  },
  weekColumn: {
    dayPadding: { top: 10, bottom: 12 },
    todayPillPadding: { x: 12, y: 3 },
  },
  breakpoints: {
    mobile: 768,        // single-column at < this width
    desktop: 1024,      // full three-column layout at >= this width
  },
} as const;

export const sidebarLayout = {
  width: 240,
  logoFontSize: 38,
  buttonPadding: { x: 14, y: 10 },
  buttonGap: 8,
} as const;
