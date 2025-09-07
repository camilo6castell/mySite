// @ts-nocheck

// Styles
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyle from '../styles/GlobalStyle'
import { ThemeProvider } from '../lib/providers'
// Components
import Navbar from '../components/layout/Navbar'
import BackgroundWaves from '../components/BackgroundWaves'
import RightNav from '../components/RightNav'
// Content
import { metadataContent_layout } from './config/content'
//

export const metadata = metadataContent_layout

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyle />
            <Navbar />
            <RightNav />
            <div id="snap-container">
              {children}
            </div>
            <BackgroundWaves />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
