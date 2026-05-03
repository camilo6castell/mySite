import 'styled-components';
import { ThemeColors } from '@/config/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeColors { }
}
