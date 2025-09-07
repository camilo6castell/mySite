import 'styled-components';
import { ThemeColors } from '@/app/config/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeColors { }
}