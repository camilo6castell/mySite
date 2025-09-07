import 'styled-components';
import { ThemeColors } from '@/app/config/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeColors {
        mode: 'light' | 'dark'; // ejemplo, no rompe nada
    }
}
