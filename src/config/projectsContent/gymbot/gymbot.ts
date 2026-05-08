import { gymbotCode } from "./gymbotCode";

export const gymbot = {
  title: "Gymbot",
  isFeatured: true,
  summary:
    "Autonomous gym reservation bot with OS-level power management, human-like interaction simulation and Telegram-based remote recovery. Designed to run fully unattended on Linux systems.",

  code: {
    language: "python",
    content: gymbotCode,
  },

  highlights: [
    "Fully autonomous execution with Linux RTC wakealarm and system suspend cycles",
    "Human-like interaction simulation to avoid bot detection (mouse, typing, delays)",
    "Layered recovery system with Telegram-based remote intervention",
    "Uses real Chromium profile with stealth browser fingerprinting",
    "Schedule-driven execution with YAML configuration and timezone handling",
  ],

  repos: [
    {
      name: "Automation System",
      description:
        "Python-based automation system integrating Playwright, systemd timers, RTC wake alarms and Telegram for fully autonomous gym class reservations.",
      tech: [
        "Python",
        "Playwright",
        "systemd",
        "Linux",
        "Telegram API",
        "PyYAML",
        "Loguru",
      ],
      repo: "https://github.com/camilo6castell/gym-bot",
      demo: "",
    },
  ],
};
