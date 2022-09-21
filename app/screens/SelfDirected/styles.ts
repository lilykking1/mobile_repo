import { StyleSheet } from 'react-native';
import { palette } from '@app/theme';

const styles = StyleSheet.create({
  accrualCardContainer: {
    height: 28,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 5,
    width: 110,
  },
  accrualCardStyle: {
    paddingBottom: 3,
    paddingTop: 5,
  },
  assetsView: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 20,
  },
  container: {
    flex: 1,
  },
  iconWallet: {
    borderRadius: 10,
    height: 36,
  },
  lineChart: {
    backgroundColor: palette.royalBlue[950],
  },
  quantityView: {
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  titleContainer: {
    marginTop: 20,
  },
});

export default styles;
