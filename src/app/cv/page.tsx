import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import CVView from "@/ui/components/cv/CVView";

export const metadata: Metadata = {
  title: "CV — Camilo Castellanos",
  description: "Hoja de vida completa de Camilo Castellanos",
};

export default function CVPage() {
  const filePath = path.join(process.cwd(), "src/content/cv.md");
  const markdown = fs.readFileSync(filePath, "utf8");

  return <CVView markdown={markdown} />;
}
