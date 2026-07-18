export type ThemeName = 'rainbow' | 'light' | 'dark';
export interface ThemeLane {
    bg: string;
    fg: string;
}
export interface ThemeTokens {
    bg: string;
    surface: string;
    surfaceBorder: string;
    ink: string;
    inkMuted: string;
    briefBg: string;
    briefBorder: string;
    accent: string;
    accentStrong: string;
    linkUnderline: string;
    emptyBg: string;
    emptyFg: string;
    /** Faint full-spectrum wash over the base surface; 'none' outside rainbow. */
    boardWash: string;
    lanes: {
        thinking: ThemeLane;
        doing: ThemeLane;
        queued: ThemeLane;
    };
    fontDisplay: string;
    fontBody: string;
    /** Legacy shell remap value (--cream-dark) — per-theme darker surface. */
    creamDark: string;
}
export declare const DEFAULT_THEME: ThemeName;
export declare const themes: Record<ThemeName, ThemeTokens>;
export declare const mobileTokens: {
    readonly gradient: {
        readonly start: "#7C3AED";
        readonly mid: "#EC4899";
        readonly end: "#F59E0B";
    };
    readonly brandPrimary: "#7C3AED";
    readonly brandAccent: "#F59E0B";
    readonly brandHighlight: "#EC4899";
};
export declare const fontAssets: {
    readonly stayDreamingAlt: "fonts/StayDreamingAlt.ttf";
    readonly safiraMarch: "fonts/SafiraMarch-Thin.ttf";
    readonly cairo: "fonts/Cairo.woff2";
    readonly westernSans: "fonts/WesternSans-Regular.woff2";
};
