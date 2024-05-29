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
    logo: {
      width: 180,
      height: 180,
      marginBottom: 10,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      color: colors.text,
    },
    highlight: {
      color: '#d82239',
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
    halfInput: {
      width: '48%',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 20,
    },
    buttonContainer: {
      width: '100%',
      borderRadius: 5,
      marginBottom: 20,
    },
    button: {
      width: '100%',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    footer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    footerText: {
      color: '#d82239',
      fontWeight: 'bold',
    },
  });
};

export default createStyles;
