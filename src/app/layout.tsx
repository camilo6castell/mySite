// Styles
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyle from "../ui/styles/GlobalStyle";
import { ThemeProvider } from "../lib/providers";
// Components
import Navbar from "../ui/components/layout/Navbar";
import BackgroundWaves from "../ui/components/layout/BackgroundWaves";
import RightNav from "../ui/components/layout/RightNav";
// Content
import { metadataContent_layout } from "../config/content";
//

export const metadata = metadataContent_layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyle />
            <BackgroundWaves />
            <Navbar />
            <RightNav />
            <div id="snap-container">{children}</div>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
