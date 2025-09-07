export const themeConfig: ThemeConfigType = {
  colors: {
    lightTheme: {
      bg: '#f8fafc',
      text: '#07103a',
      muted: '#334155',
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      bgCard: 'rgba(255, 255, 255, 0.85)',
      borderCard: 'rgba(15, 23, 36, 0.06)',
      shadowCard: 'rgba(0, 0, 0, 0.18)',
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
      waves: {
        a: {
          bg: 'rgba(99,102,241,0.35)',
          top: '5%',
          left: '-20%',
          width: '120%',
          height: '80%',
          blur: '90px',
          opacity: 0.8
        },
        b: {
          bg: 'rgba(16,185,129,0.25)',
          top: '40%',
          left: '-40%',
          width: '140%',
          height: '70%',
          blur: '120px',
          opacity: 0.7
        }
      },
    },
    darkTheme: {
      bg: '#07103a',
      text: '#e6eef8',
      muted: '#a3b4c9',
      shadowColor: 'rgba(255, 255, 255, 0.4)',
      bgCard: 'rgba(29, 29, 29, 0.83)',
      borderCard: 'rgba(207, 207, 207, 0.19)',
      shadowCard: 'rgba(221, 221, 221, 0.16)',
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
      waves: {
        a: {
          bg: 'rgba(99,102,241,0.35)',
          top: '5%',
          left: '-20%',
          width: '120%',
          height: '80%',
          blur: '90px',
          opacity: 0.8,
        },
        b: {
          bg: 'rgba(16,185,129,0.25)',
          top: '40%',
          left: '-40%',
          width: '140%',
          height: '70%',
          blur: '120px',
          opacity: 0.7
        }
      }
    }
  },
  animation: {
    general_duration: 0.7,
    general_fade_rem_traslation: 3,
    waves_duration: {
      a: 40,
      b: 60,
    }
  },
  fonts: {
    body: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto",
  },
  sectionColors: {
    home: '#4498ffff',
    projects: '#742c2c',
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

export interface Wave {
  bg: string;
  top: string;
  left: string;
  width: string;
  height: string;
  blur: string;
  opacity: number;
}

export interface ThemeColors {
  bg: string;
  text: string;
  muted: string;
  shadowColor: string;
  bgCard: string;
  borderCard: string;
  shadowCard: string;
  badge: Badge;
  heroImage: HeroImage;
  projectCard: ProjectCard;
  waves: {
    a: Wave;
    b: Wave;
  };
}

export interface ThemeConfigType {
  colors: {
    lightTheme: ThemeColors;
    darkTheme: ThemeColors;
  };
  animation: {
    general_duration: number;
    general_fade_rem_traslation: number;
    waves_duration: {
      a: number;
      b: number;
    };
  };
  fonts: {
    body: string;
  };
  sectionColors: Record<string, string>;
}

