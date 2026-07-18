"use strict";
// Theme-keyed tokens for Luna's three switchable themes.
//
// SOURCE OF TRUTH RULE (v0.2): these values were lifted verbatim from the
// shipped lunatwo ui/src/theme.css (design_handoff_theming) — the package now
// tracks the shipped product, and dist/theme.css is GENERATED from this data
// (scripts/generate-css.cjs). Edit here, run the build; never hand-edit the CSS.
//
// Mechanism on web: data-theme="light|dark|rainbow" on <html>. Rainbow's tokens
// also live on bare :root so the app is themed before JS runs (no flash) — the
// generator preserves that contract.
//
// Mobile consumes `themes.rainbow` (and `mobileTokens`) as plain values,
// statically bound — no switching plumbing on mobile by decision
// (DESIGN-INTENT-parity-architecture-2026-07-18.md, F3).
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontAssets = exports.mobileTokens = exports.themes = exports.DEFAULT_THEME = void 0;
exports.DEFAULT_THEME = 'rainbow';
exports.themes = {
    // Bold & Beautiful — the DEFAULT, Shelley's theme.
    rainbow: {
        bg: '#FFFDFB',
        surface: '#FFFDFB',
        surfaceBorder: '#F3D9E6',
        ink: '#2A1633',
        inkMuted: '#A98CB0',
        briefBg: 'linear-gradient(120deg, #FDE7EF, #FBE6D6 34%, #E7F7EC 66%, #E4EEFF)',
        briefBorder: '#F3D9E6',
        accent: '#C4306E',
        accentStrong: '#6A5CFF',
        linkUnderline: '#F2A9C6',
        emptyBg: '#F6EEF6',
        emptyFg: '#C9AECB',
        boardWash: 'linear-gradient(120deg,\n    rgba(255,59,107,.06), rgba(255,138,0,.05) 22%, rgba(255,212,0,.05) 40%,\n    rgba(0,194,168,.05) 60%, rgba(46,155,255,.05) 78%, rgba(160,90,255,.07))',
        lanes: {
            thinking: { bg: 'linear-gradient(90deg,#F3E6FF,#EAD9FF)', fg: '#7A2ED6' },
            doing: { bg: 'linear-gradient(90deg,#FFE9D6,#FFDCCB)', fg: '#E0561B' },
            queued: { bg: 'linear-gradient(90deg,#DCF6EC,#D2F0E2)', fg: '#0E9E85' },
        },
        fontDisplay: "'Stay Dreaming Alt', 'Caveat Brush', cursive",
        fontBody: "'Safira March', -apple-system, BlinkMacSystemFont, 'Poppins', sans-serif",
        creamDark: '#FBEFF4',
    },
    // Light & Airy.
    light: {
        bg: '#F6F7FB',
        surface: '#FFFFFF',
        surfaceBorder: '#E9EAF2',
        ink: '#23212E',
        inkMuted: '#8A8797',
        briefBg: '#EEF0FE',
        briefBorder: '#DCE0FB',
        accent: '#5B63E6',
        accentStrong: '#4B53D6',
        linkUnderline: '#B9BEF5',
        emptyBg: '#F1F2F6',
        emptyFg: '#B4B7C4',
        boardWash: 'none',
        lanes: {
            thinking: { bg: '#EEF0FE', fg: '#5B63E6' },
            doing: { bg: '#FFF0E6', fg: '#E07A2E' },
            queued: { bg: '#E7F6EF', fg: '#2F9E6B' },
        },
        fontDisplay: "'Safira March', 'Poppins', sans-serif",
        fontBody: "'Cairo', -apple-system, BlinkMacSystemFont, sans-serif",
        creamDark: '#ECEEF6',
    },
    dark: {
        bg: '#131019',
        surface: '#1D1926',
        surfaceBorder: '#2E2740',
        ink: '#EFEAF8',
        inkMuted: '#9C93B4',
        briefBg: '#241C36',
        briefBorder: '#3A2F55',
        accent: '#C4B5FD',
        accentStrong: '#A78BFA',
        linkUnderline: '#6D5A9E',
        emptyBg: '#211E2B',
        emptyFg: '#5C5670',
        boardWash: 'none',
        lanes: {
            thinking: { bg: '#241C36', fg: '#A78BFA' },
            doing: { bg: '#2E2116', fg: '#F0A868' },
            queued: { bg: '#16281F', fg: '#6FCF97' },
        },
        fontDisplay: "'Safira March', 'Poppins', sans-serif",
        fontBody: "'Cairo', -apple-system, BlinkMacSystemFont, sans-serif",
        creamDark: '#16121F',
    },
};
// Mobile-only brand tokens, upstreamed from luna-mobile theme/colors.ts.
// The purple→pink→amber gradient is shipped brand equity (app + the Android
// "Luna Voice" keyboard, which snapshots it — see the keyboard's frozen-surface
// note). Whether it ever converges toward rainbow's accent family is a one-place
// edit here.
exports.mobileTokens = {
    gradient: {
        start: '#7C3AED',
        mid: '#EC4899',
        end: '#F59E0B',
    },
    brandPrimary: '#7C3AED',
    brandAccent: '#F59E0B',
    brandHighlight: '#EC4899',
};
// Font assets shipped with this package (fonts/ directory). Web consumes them
// via the generated dist/fonts.css; mobile loads the ttf files through
// expo-font. Cairo has no ttf here because mobile is rainbow-only (Cairo is a
// light/dark body face).
exports.fontAssets = {
    stayDreamingAlt: 'fonts/StayDreamingAlt.ttf',
    safiraMarch: 'fonts/SafiraMarch-Thin.ttf',
    cairo: 'fonts/Cairo.woff2',
    westernSans: 'fonts/WesternSans-Regular.woff2',
};
