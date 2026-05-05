export const themeConfig: ThemeConfigType = {
  colors: {
    lightTheme: {
      bg: '#f8fafc',
      bgVideoFilter: 'invert(0.9) brightness(1) saturate(1.8) contrast(0.9)',
      text: '#07103a',
      muted: '#444b56',
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      bgCard: 'rgba(255, 255, 255, 0.75)',
      borderCard: 'rgba(15, 23, 36, 0.06)',
      shadowCard: 'rgba(0, 0, 0, 0.18)',
      shadowCardHighContrast: 'rgb(0, 0, 0)',
      rightNavDotsColor: 'rgba(0, 0, 0, 0.43)',
      badge: {
        bg: 'rgba(28, 255, 191, 0.21);',
        text: '#017a58ff',
        border: '1px solid rgba(6,95,70,0.12)',
      },
      heroImage: {
        height: '10rem',
      },
      projectCard: {
        hoverShadow: 'rgba(0, 0, 0, 0.41)',
        title: '#111827',
        summary: '#374151',
        tech: '#6b7280',
        link: '#4f46e5',
        linkHover: '#4338ca',
      },
    },
    darkTheme: {
      bg: '#07103a',
      text: '#e6eef8',
      bgVideoFilter: 'invert(0) brightness(1.5) saturate(1.5) contrast(0.6)',
      muted: '#a3b4c9',
      shadowColor: 'rgba(255, 255, 255, 0.4)',
      bgCard: 'rgba(29, 29, 29, 0.75)',
      borderCard: 'rgba(207, 207, 207, 0.19)',
      shadowCard: 'rgba(221, 221, 221, 0.16)',
      shadowCardHighContrast: 'rgba(28, 28, 28, 0.72)',
      rightNavDotsColor: 'rgba(255,255,255,0.43)',
      badge: {
        bg: 'rgba(6, 95, 70, 0.33)',
        text: '#57d4b0ff',
        border: '1px solid rgba(95, 101, 99, 0.32)',
      },
      heroImage: {
        height: '10rem',
      },
      projectCard: {
        hoverShadow: 'rgba(221, 221, 221, 0.2)',
        title: '#e6eef8',
        summary: '#a3b4c9',
        tech: '#9ca3af',
        link: '#60a5fa',
        linkHover: '#3b82f6',
      },
    }
  },
  animation: {
    general_duration: 0.7,
    general_fade_rem_traslation: 3,
  },
  fonts: {
    body: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto",
  },
  sectionColors: {
    home: 'rgb(255, 255, 255)',
    projects: '#ffffff',
    contact: '#007442ff'
  }
}

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
  badge: Badge;
  heroImage: HeroImage;
  projectCard: ProjectCard;
  rightNavDotsColor: string;
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

