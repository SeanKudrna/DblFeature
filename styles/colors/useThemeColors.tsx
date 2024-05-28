import { useColorScheme } from 'react-native';
import darkColors from './dark.json';
import lightColors from './light.json';

const useThemeColors = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? darkColors : lightColors;
};

export default useThemeColors;
