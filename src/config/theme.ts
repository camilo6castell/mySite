export const themeConfig: ThemeConfigType = {
  colors: {
    lightTheme: {
      bg: "#f8fafc",
      bgVideoFilter: "invert(1) brightness(1.1) saturate(3) contrast(1.3)",
      text: "#07103a",
      muted: "#444b56",
      shadowColor: "rgba(0, 0, 0, 0.3)",
      bgCard: "rgba(255, 255, 255, 0.65)",
      borderCard: "rgba(15, 23, 36, 0.54)",
      shadowCard: "rgba(73, 63, 76, 0.51)",
      shadowCardHighContrast: "rgb(0, 0, 0)",
      rightNavDotsColor: "rgba(0, 0, 0, 0.43)",
      paper: {
        bg: "#fdfdfd6e",
        border: "rgba(15, 23, 36, 0.08)",
        shadow: "rgba(15, 23, 42, 0.22)",
      },
      badges: {
        available: {
          bg: "rgba(28, 255, 191, 0.21);",
          text: "rgb(0, 86, 108)",
          border: "1px solid rgba(6,95,70,0.12)",
        },
        suggestion: {
          bg: "rgba(0, 172, 177, 0.93);",
          text: "rgb(241, 211, 251)",
          border: "1px solid rgba(2, 91, 99, 0.47)",
        },
        bullets: {
          bg: "rgba(1, 78, 90, 0.73);",
          text: "rgb(252, 230, 255)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        },
      },
      heroImage: {
        height: "10rem",
      },
      projectCard: {
        hoverShadow: "rgba(0, 0, 0, 0.41)",
        title: "#111827",
        summary: "#374151",
        tech: "#6b7280",
        link: "#4f46e5",
        linkHover: "#4338ca",
      },
    },
    darkTheme: {
      bg: "#1a2a6a",
      text: "#e6eef8",
      bgVideoFilter: "invert(0) brightness(0.6) saturate(4) contrast(1.2)",
      muted: "#a3b4c9",
      shadowColor: "rgba(255, 255, 255, 0.4)",
      bgCard: "rgba(27, 27, 23, 0.74)",
      borderCard: "rgba(207, 207, 207, 0.42)",
      shadowCard: "rgba(221, 221, 221, 0.24)",
      shadowCardHighContrast: "rgba(28, 28, 28, 0.72)",
      rightNavDotsColor: "rgba(255,255,255,0.43)",
      paper: {
        bg: "#131f4d",
        border: "rgba(207, 207, 207, 0.14)",
        shadow: "rgba(0, 0, 0, 0.45)",
      },
      badges: {
        available: {
          bg: "rgba(19, 110, 124, 0.53);",
          text: "rgb(255, 255, 255)",
          border: "1px solid rgba(3, 255, 184, 0.49)",
        },
        suggestion: {
          bg: "rgb(254, 252, 210);",
          text: "rgb(0, 0, 0)",
          border: "1px solid rgba(139, 144, 117, 0.57)",
        },
        bullets: {
          bg: "rgba(33, 225, 255, 0.18);",
          text: "rgb(255, 255, 255)",
          border: "1px solid rgba(0, 255, 234, 0.12)",
        },
      },
      heroImage: {
        height: "10rem",
      },
      projectCard: {
        hoverShadow: "rgba(221, 221, 221, 0.2)",
        title: "#e6eef8",
        summary: "#a3b4c9",
        tech: "#9ca3af",
        link: "#60a5fa",
        linkHover: "#3b82f6",
      },
    },
  },
  animation: {
    general_duration: 0.7,
    general_fade_rem_traslation: 3,
  },
  fonts: {
    body: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto",
  },
  sectionColors: {
    home: "rgb(131, 141, 67)",
    roles: "#62d3ec",
    contact: "rgb(93, 50, 92)",
  },
};

export interface Badge {
  bg: string;
  text: string;
  border: string;
}

export interface HeroImage {
  height: string;
}

export interface ProjectCard {
  hoverShadow: string;
  title: string;
  summary: string;
  tech: string;
  link: string;
  linkHover: string;
}

export interface Paper {
  bg: string;
  border: string;
  shadow: string;
}

export interface ThemeColors {
  bg: string;
  bgVideoFilter: string;
  text: string;
  muted: string;
  shadowColor: string;
  bgCard: string;
  borderCard: string;
  shadowCard: string;
  shadowCardHighContrast: string;
  badges: {
    available: Badge;
    suggestion: Badge;
    bullets: Badge;
  };
  heroImage: HeroImage;
  projectCard: ProjectCard;
  rightNavDotsColor: string;
  paper: Paper;
}

export interface ThemeConfigType {
  colors: {
    lightTheme: ThemeColors;
    darkTheme: ThemeColors;
  };
  animation: {
    general_duration: number;
    general_fade_rem_traslation: number;
  };
  fonts: {
    body: string;
  };
  sectionColors: Record<string, string>;
}
