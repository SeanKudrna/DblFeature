import { StyleSheet } from 'react-native';

const createStyles = (colors: any) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      color: colors.text,
    },
    input: {
      width: '100%',
      padding: 15,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 5,
      marginBottom: 20,
      backgroundColor: colors.inputBackground,
      color: colors.text,
    },
    button: {
      width: '100%',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      backgroundColor: colors.buttonBackground,
    },
    buttonText: {
      color: colors.buttonText,
      fontWeight: 'bold',
    },
    footer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    footerText: {
      color: colors.footerText,
    },
  });
};

export default createStyles;
