import {create} from 'zustand';
import themes from '../utils/colors';
import sfConstraint from '../utils/spacing';

const useTheme = create((set) => ({
    themeMode: 'light',
    colors: themes.light,
    fontSize: sfConstraint.fontSize,
    spacing: sfConstraint.spacing,
    toggleTheme: () => set((currentMode) => {
        if (currentMode.themeMode === 'dark') {
            return { themeMode: 'light', colors: themes.light };
        } else {
            return { themeMode: 'dark', colors: themes.dark };
        }
    })
}));

export default useTheme;