import { StyleSheet } from 'react-native';

export const styles = (height?: number, width?: number) =>
  StyleSheet.create({
    container: {
      height,
      width,
    },
  });
