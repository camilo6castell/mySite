import { useTheme } from 'styled-components'
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// @ts-ignore
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function StyledSyntaxHighlighter({
  children,
  language,
}: {
  children: string
  language: string
}) {
  const theme = useTheme()

  const isDark = theme.bg === '#07103a' // puedes mejorar esto con un flag si quieres

  return (
  <SyntaxHighlighter
    language={language}
    style={isDark ? oneDark : oneLight}
    customStyle={{
      background: 'transparent',
      margin: 0,
      fontSize: '0.85rem',
      height: '100%',
    }}
    codeTagProps={{
      style: {
        background: 'transparent',
      }
    }}
  >
    {children}
  </SyntaxHighlighter>
  )
}