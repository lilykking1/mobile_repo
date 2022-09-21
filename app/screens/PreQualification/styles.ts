import { palette } from '@app/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  activeMark: {
    backgroundColor: palette.grey[400],
    borderColor: palette.grey[400],
    borderRadius: 10,
    borderWidth: 4,
    height: 16,
    left: -4 / 2,
    marginLeft: 15,
    width: 16,
  },
  activeMarkDark: {
    backgroundColor: palette.grey[700],
    borderColor: palette.grey[700],
    borderRadius: 10,
    borderWidth: 4,
    height: 16,
    left: -4 / 2,
    marginLeft: 17,
    width: 16,
  },
  attentionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 8,
  },
  attentionIcon: {
    marginRight: 8,
  },
  boldText: {
    textAlign: 'center',
  },
  boldTextContainer: {
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 65,
  },
  buttonContainer: {
    bottom: 20,
    left: 16,
    position: 'absolute',
    right: 16,
  },
  buttonContainerPrequal: {
    bottom: 10,
    left: 16,
    position: 'absolute',
    right: 16,
  },
  captionTextGoal: {
    marginBottom: -30,
  },
  captionTextHousehold: {
    marginTop: 20,
  },
  captionTextPercentage: {
    marginTop: 25,
  },
  componentThumbStyleContainer: {
    borderRadius: 18,
    elevation: 10,
    height: 33,
    justifyContent: 'center',
    right: 20,
    shadowColor: palette.grey[600],
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    width: 56,
  },
  container: {
    flex: 1,
    width: '100%',
  },
  customContainer2: {
    borderColor: palette.white,
    marginLeft: 6,
    paddingTop: 0,
    width: 110,
  },
  customContainerDark: {
    backgroundColor: palette.royalBlue[950],
    borderColor: palette.royalBlue[950],
    borderRadius: 32,
    marginRight: 16,
    paddingTop: 10,
    width: 106,
  },
  customContainerDarkNumber: {
    backgroundColor: palette.royalBlue[950],
    borderColor: palette.royalBlue[950],
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 16,
    paddingTop: 10,
    width: 106,
  },
  customContainerStyle: {
    backgroundColor: palette.grey[300],
    borderColor: palette.white,
    borderRadius: 32,
    marginRight: 16,
    paddingTop: 10,
    width: 110,
  },
  customContainerStyleNumber: {
    backgroundColor: palette.grey[300],
    borderColor: palette.white,
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 16,
    paddingTop: 10,
    width: 110,
  },
  divider: {
    marginLeft: 16,
    marginRight: 16,
  },
  dividerIncome: {
    marginBottom: 15,
  },
  dividerInvest: {
    marginBottom: 20,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
  },
  graphPointContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 38,
  },
  graphPointContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  graphPointContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 20,
  },
  graphPointContainer4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 8,
  },
  graphPointContainerSlider5: {
    bottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  graphPointStyle: {
    color: palette.grey[600],
  },
  greenCheckContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100,
  },
  howMuchToInvestContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  howMuchToInvestSliderContainer: {
    marginTop: -30,
  },
  iconButton: {
    height: 36,
    width: 36,
  },
  iconQ1: {
    marginLeft: 20,
  },
  iconStyle: {
    marginBottom: 3,
  },
  iconTextContainer: {
    marginBottom: 10,
    marginTop: 20,
  },
  iconTitle: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    height: 120,
    width: 120,
  },
  inactiveMark: {
    backgroundColor: palette.royalBlue[500],
    borderColor: palette.royalBlue[500],
    borderRadius: 10,
    borderWidth: 4,
    height: 16,
    left: -4 / 2,
    marginLeft: 15,
    width: 16,
  },
  incomeText: {
    marginLeft: 16,
  },
  inputDollar: {
    marginTop: 1,
  },
  investorProfileStepInputs: {
    width: 160,
  },
  maskView: {
    flexDirection: 'row',
    marginLeft: 8,
    position: 'absolute',
    top: '51.5%',
    zIndex: -1,
  },
  netWorthtInputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%',
  },
  networthText: {
    marginLeft: 16,
    marginTop: 30,
  },
  preQualifiedIconContainer: {
    alignItems: 'center',
    marginTop: '35%',
    paddingLeft: 25,
  },
  prequalImage: {
    height: 63,
    width: 70,
  },
  question1Container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
  question1ContainerInv: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  question2Container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
  question3Container: {
    flexDirection: 'row',
    textAlign: 'left',
  },
  question3ContainerExp: {
    flexDirection: 'row',
    marginTop: -20,
    textAlign: 'left',
  },
  selectContainer: {
    marginLeft: 'auto',
    marginTop: 15,
  },
  sliderContainer: {
    marginLeft: 16,
    marginRight: 16,
  },
  sliderContainerInc: {
    justifyContent: 'center',
  },
  sliderValueBlue: {
    color: palette.royalBlue[800],
  },
  sliderValueHighlight: {
    color: palette.white,
  },
  sliderValueOpaque: {
    color: palette.grey[400],
  },
  smallText: {
    textAlign: 'center',
  },
  smallText1m: {
    marginLeft: 16,
    marginTop: 20,
    paddingTop: 5,
  },
  smallText200k: {
    marginLeft: 16,
    paddingTop: 5,
  },
  smallTextContainer: {
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 24,
  },
  smallTextEmp: {
    marginLeft: 16,
    marginTop: 30,
  },
  smallTextInvesting: {
    marginTop: 10,
    textAlign: 'center',
  },
  smallTextInvestmentGoal: {
    marginLeft: 16,
    marginTop: 28,
  },
  smallTextNumber: {
    marginLeft: 5,
  },
  smallTextQ1: {
    marginLeft: 16,
    marginTop: 20,
  },
  smallTextQ1Input: {
    marginLeft: 16,
    marginRight: 140,
    marginTop: 20,
  },
  smallTextQ3: {
    marginLeft: 16,
    marginTop: 10,
  },
  subText: {
    marginLeft: 16,
  },
  subTextSpacing: {
    marginBottom: -18,
    marginLeft: 16,
    marginTop: 10,
  },
  textDark: {
    color: palette.royalBlue[900],
  },
  textInputContainer: {
    flexDirection: 'row',
  },
  textLight: {
    color: palette.grey[300],
  },
  thumb: {
    backgroundColor: palette.grey[400],
    borderRadius: 10,
    borderWidth: 5,
    height: 20,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2,
    width: 50,
  },
  title: {
    fontSize: 18,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  track: {
    backgroundColor: palette.grey[400],
    borderRadius: 4,
    height: 10,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
  },
  trackDark: {
    backgroundColor: palette.grey[700],
    borderRadius: 4,
    height: 10,
    shadowColor: palette.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
  },
  trackStyles: {
    borderRadius: 2,
    height: 40,
  },
  withBackGroundDark: {
    backgroundColor: palette.royalBlue[950],
    borderRadius: 10,
    flex: 1,
    height: 44,
    marginRight: 20,
    paddingBottom: 15,
    paddingLeft: 5,
  },
  withBackGroundLight: {
    borderRadius: 10,
    flex: 1,
    height: 44,
    marginRight: 20,
    paddingBottom: 15,
    paddingLeft: 5,
  },
});

export default styles;
