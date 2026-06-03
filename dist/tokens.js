"use strict";
// Design tokens for Luna. Pure data — no platform dependencies.
// Color values reflect the live web dashboard (luna-2.0 v3) so that consumers
// render identically. Where a value was confirmed in dashboard.tsx the source
// line is noted; space accent colors below are runtime-overridable fallbacks
// (the API supplies DashboardSpace.color per space).
Object.defineProperty(exports, "__esModule", { value: true });
exports.opacity = exports.radii = exports.spacing = exports.typography = exports.colors = void 0;
exports.colors = {
    cream: '#FEFCF7', // app background (dashboard.tsx CREAM)
    creamDeep: '#F4F6F5', // cool off-white — shared/section surfaces
    creamCard: '#FFFDFB', // card background
    ink: '#2A2A28', // primary text (dashboard.tsx INK)
    inkMuted: '#8A8A85', // section labels, muted text
    inkFaint: '#B8B0A4', // faint text
    inkGhost: '#C8C2B6', // inactive / ghost elements
    spaces: {
        unsorted: '#8B7E96',
        luna: '#C25450',
        job: '#3D4A7C',
        closet: '#5F7A4A',
        visa: '#4A6580',
        // Spaces beyond these get assigned at runtime from `palette` below
        // when a context has no explicit color.
    },
    palette: [
        '#C25450', '#3D4A7C', '#5F7A4A', '#4A6580', '#8B7E96',
        '#B5734A', '#5C7A6E', '#7C5560', '#4D6A75', '#9C8053',
    ],
    // Functional accents in use on the dashboard
    done: '#7FB069', // completed checkmark
    overdue: '#D32F2F', // overdue indicator
    border: '#ECE7DD', // hairline borders
    borderStrong: '#DAD4C8', // section divider / border-left
    purpleLogo: '#6B3F9F',
    lavenderActive: '#EDE6F7',
    // Bright rainbow used for the "today" pill on the week column
    rainbow: ['#FF0080', '#FF8C00', '#40E0D0', '#4169E1', '#9370DB'],
    // Neutral (cool) gray ramp — chat/sidebar chrome, distinct from the warm
    // cream-based inks above.
    neutral: {
        text: '#171717', // near-black button/label text
        soft: '#444444', // secondary button text
        muted: '#737373', // uppercase section labels, email
        faint: '#999999', // tagline
        border: '#E5E5E5', // sidebar borders / dividers
        hover: '#F5F5F5', // neutral hover background
    },
    // Sidebar chrome accents
    sidebar: {
        logoGradient: ['#667eea', '#764ba2', '#f5576c'], // "Luna 2.0" gradient text
        activeBg: '#ede9fe',
        activeBorder: '#c4b5fd',
        activeText: '#5b21b6',
        entitiesHover: '#F5F0FF', // purple tint
        ingestHover: '#FFF3E8', // orange tint (also review-queue hover)
        commitmentsHover: '#E8F5EE', // green tint
        reviewPendingBg: '#fef3e2',
        reviewPendingBorder: '#f0d9b5',
        pendingBadge: '#c05c00', // muted pending-count badge
    },
};
exports.typography = {
    heading: { family: 'Caveat Brush', weight: 400 }, // space names, week header
    label: { family: 'Caveat Brush', weight: 400 }, // section labels, "+ add"
    body: { family: 'Poppins', weight: 400 }, // item text
    bodyMedium: { family: 'Poppins', weight: 500 },
    italic: { family: 'Caveat', weight: 500 }, // taglines, empty states
};
exports.spacing = {
    xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, xxxl: 48,
};
exports.radii = {
    sm: 4, md: 6, lg: 10, pill: 999,
};
exports.opacity = {
    done: 0.55,
    ghost: 1, // used with ink-ghost color, not as opacity
    urgentDot: 0.7,
};
