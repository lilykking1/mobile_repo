import { palette } from '@app/theme';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    bottom: 45,
    paddingHorizontal: 16,
    position: 'absolute',
    width: Dimensions.get('screen').width,
  },
  confirmNewPortfolioButton: {
    marginTop: 16,
  },
  content: {
    paddingBottom: 30,
    paddingHorizontal: 24,
  },
  portfolioContent: {
    flex: 1,
    paddingBottom: 60,
    paddingHorizontal: 16,
  },
  reassessmentButtonsContainer: {
    borderTopColor: palette.grey[500],
    borderTopWidth: 1,
    bottom: 0,
    paddingBottom: 45,
    paddingHorizontal: 16,
    paddingTop: 14,
    position: 'absolute',
    width: Dimensions.get('screen').width,
  },
  reassessmentContainer: {
    paddingBottom: 60,
  },
  resetRiskButton: {
    marginBottom: 36,
    marginHorizontal: 16,
  },
  riskGroupTable: {
    marginBottom: 40,
  },
});

export default styles;
