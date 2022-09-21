import React, {
  FC,
  useContext,
  ChangeEvent,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {
  GestureResponderEvent,
  View,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {
  Typography,
  Button,
  Select,
  Slider,
  Icon,
  Divider,
  TextInput,
} from '@app/components';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';
import { RootContext } from '@app/state';
import { GET_ONLY_NUMBERS_AND_DOT_REGEX } from '@app/components/Slider/components/CoinValueInput/constants';
import { addFiatSignToAmount, formatNumberToLocale } from '@app/utils/numbers';
import styles from './styles';
import SliderContainer from './SliderContainer';
import {
  SLIDERS_TEXTUAL_STEPS,
  SLIDERS_NUMERIC_STEPS,
  MAX_NET_WORTH_DIGITS,
  HOW_MUCH_TO_INVEST_SLIDER_STEP,
  RESETED_HOW_MUCH_TO_INVEST_SLIDER_STEP,
} from './constants';
import { getTextInputStyle, getTrackStyle, getContainerStyle } from './utils';
import HowMuchToInvestThumb from './components/HowMuchToInvestThumb';

export interface SlideProps {
  buttonDisabled?: boolean;
  selectValueQ1?: string;
  selectValueQ2?: string;
  selectValueQ3?: string;
  selectValueQ4?: string;
  selectValueQ5?: string;
  selectValueQ6?: string;
  selectValueQ7?: string;
  customContainerStyle?: StyleProp<ViewStyle>;
  maskedValue?: string;
  addMask?: boolean;
  showAttentionMessage?: boolean;
  placeHolder?: string;
  attentionMessageValue?: string;
  textInputValue?: string;
  netWorthValue?: number;
  setNetWorthInputText?: (text: string) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  slider1Answer?: (event: ChangeEvent) => void;
  howMuchToInvest?: number;
  setHowMuchToInvest?: (value: React.SetStateAction<number>) => void;
  slider3Answer?: (event: ChangeEvent) => void;
  slider4Answer?: (event: ChangeEvent) => void;
  slider5Answer?: (event: ChangeEvent) => void;
  proceedButtonAction?: (event: GestureResponderEvent) => void;
  unqualifiedButton?: (event: GestureResponderEvent) => void;
  qualifiedButton?: (event: GestureResponderEvent) => void;
  checkoutVideo?: (event: GestureResponderEvent) => void;
  accStatusQ1?: (event: GestureResponderEvent) => void;
  accStatusQ2?: (event: GestureResponderEvent) => void;
  accStatusQ3?: (event: GestureResponderEvent) => void;
  invProfQ1?: (event: GestureResponderEvent) => void;
  expQ1?: (event: GestureResponderEvent) => void;
  investQ1?: (event: GestureResponderEvent) => void;
  investQ2?: (event: GestureResponderEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
}

const captionTextGoal = (
  <View style={styles.captionTextGoal}>
    <Typography size="body1">
      {translate('screens.prequalification.acheive')}
    </Typography>
  </View>
);

const captionText1 = (
  <Typography size="body1">
    <Typography size="body1">
      {translate('screens.prequalification.household')}
    </Typography>
  </Typography>
);

const howMuchToInvestLabel = (
  <Typography size="body1">
    {translate('screens.prequalification.howmuch')}
  </Typography>
);

const captionTextPercentage = (
  <Typography size="body1" style={styles.captionTextPercentage}>
    {translate('screens.prequalification.alt')}
  </Typography>
);

const CustomThumb = () => (
  <View style={styles.componentThumbStyleContainer}>
    <Icon.ThreeLineSlider />
  </View>
);

export const PrequalificationSlide: FC<SlideProps> = ({
  proceedButtonAction,
}) => (
  <View style={styles.container}>
    <View style={styles.preQualifiedIconContainer}>
      <Icon.PreQualifiedIcon />
    </View>
    <View style={styles.iconTextContainer}>
      <Typography
        size="body2"
        variant="main.500"
        strong
        style={styles.iconTitle}
      >
        {translate('screens.prequalification.prequal')}
      </Typography>
    </View>
    <View style={styles.boldTextContainer}>
      <Typography size="h2" strong style={styles.boldText}>
        {translate('screens.prequalification.make-sure')}
      </Typography>
    </View>
    <View style={styles.smallTextContainer}>
      <Typography size="body1" style={styles.smallText}>
        {translate('screens.prequalification.verify')}
      </Typography>
    </View>
    <View style={styles.buttonContainerPrequal}>
      <Button
        label={translate('screens.prequalification.proceed')}
        onPress={proceedButtonAction}
      />
    </View>
  </View>
);

export const AccreditedStatusSlide: FC<SlideProps> = ({
  proceedButtonAction,
  accStatusQ1,
  accStatusQ2,
  accStatusQ3,
  buttonDisabled,
  selectValueQ1,
  selectValueQ2,
  selectValueQ3,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  return (
    <View style={styles.container}>
      <View style={styles.question1Container}>
        <Typography size="body1" style={styles.smallText1m}>
          {translate('screens.prequalification.1m')}
        </Typography>
        <View style={styles.selectContainer}>
          <Select
            style={getTextInputStyle(theme)}
            value={selectValueQ1}
            customContainerStyle={getContainerStyle(theme)}
            iconStyle={styles.iconStyle}
            onPress={accStatusQ1}
            textInputDisabled
          />
        </View>
      </View>
      <View style={styles.divider}>
        <Divider />
      </View>
      <View style={styles.question2Container}>
        <Typography size="body1" style={styles.smallText200k}>
          {translate('screens.prequalification.200k')}
        </Typography>
        <View style={styles.selectContainer}>
          <Select
            style={getTextInputStyle(theme)}
            onPress={accStatusQ2}
            value={selectValueQ2}
            customContainerStyle={getContainerStyle(theme)}
            textInputDisabled
          />
        </View>
      </View>
      <View style={styles.divider}>
        <Divider />
      </View>
      <View style={styles.question3Container}>
        <Typography size="body1" style={styles.smallTextQ3}>
          {translate('screens.prequalification.qualifications')}
        </Typography>
        <View style={styles.selectContainer}>
          <Select
            style={getTextInputStyle(theme)}
            onPress={accStatusQ3}
            value={selectValueQ3}
            customContainerStyle={getContainerStyle(theme)}
            textInputDisabled
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          disabled={buttonDisabled}
          label={translate('screens.prequalification.next')}
          onPress={proceedButtonAction}
        />
      </View>
    </View>
  );
};

export const InvestorProfileSlide: FC<SlideProps> = ({
  proceedButtonAction,
  buttonDisabled,
  invProfQ1,
  selectValueQ4,
  slider1Answer,
  howMuchToInvest,
  setHowMuchToInvest,
  setNetWorthInputText,
  netWorthValue,
  placeHolder,
  showAttentionMessage,
  attentionMessageValue,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const [
    netWorthInputMaskedValue,
    setNetWorthInputMaskedValue,
  ] = useState<string>();

  const [
    howMuchToInvestMaskedValue,
    setHowMuchToInvestMaskedValue,
  ] = useState<string>();

  const [value, setValue] = useState(howMuchToInvest || 0);

  useEffect(() => {
    setValue(howMuchToInvest || 0);
  }, [howMuchToInvest]);

  const renderAttentionMessage = (
    <View style={styles.attentionContainer}>
      <View style={styles.attentionIcon}>
        <Icon.Attention tint={palette.red[500]} />
      </View>
      <Typography variant="red">
        {translate('screens.prequalification.attentionWarning', {
          value: attentionMessageValue,
        })}
      </Typography>
    </View>
  );

  const [halfAllowedToInvest, setHalfAllowedToInvest] = useState(
    () => RESETED_HOW_MUCH_TO_INVEST_SLIDER_STEP
  );
  const [maximumAllowedToInvest, setMaximumAllowedToInvest] = useState(
    () => RESETED_HOW_MUCH_TO_INVEST_SLIDER_STEP
  );

  const handleResetHowMuchToInvestInput = useCallback(() => {
    setHowMuchToInvest(0);
    setValue(0);
    setHowMuchToInvestMaskedValue('');
  }, [setHowMuchToInvest]);

  const handleResetNetWorthInput = () => {
    setNetWorthInputText('');
    setNetWorthInputMaskedValue('');
    handleResetHowMuchToInvestInput();
  };

  useEffect(() => {
    if (netWorthValue) {
      const halfNetWorthValue = netWorthValue / 2;
      setHalfAllowedToInvest({
        displayed: addFiatSignToAmount(formatNumberToLocale(halfNetWorthValue)),
        value: halfNetWorthValue,
      });

      setMaximumAllowedToInvest({
        displayed: addFiatSignToAmount(formatNumberToLocale(netWorthValue)),
        value: netWorthValue,
      });
    } else {
      setHalfAllowedToInvest(RESETED_HOW_MUCH_TO_INVEST_SLIDER_STEP);
      setMaximumAllowedToInvest(RESETED_HOW_MUCH_TO_INVEST_SLIDER_STEP);
    }
  }, [netWorthValue]);

  useEffect(() => {
    if (value) {
      const formatted = addFiatSignToAmount(formatNumberToLocale(value));
      setHowMuchToInvestMaskedValue(formatted);
    } else {
      handleResetHowMuchToInvestInput();
    }
  }, [handleResetHowMuchToInvestInput, value]);

  const handleChangeNetWorhtInputText = (textValue: string) => {
    const replaced = textValue.replace(GET_ONLY_NUMBERS_AND_DOT_REGEX, '');

    if (!replaced) {
      handleResetNetWorthInput();
      return;
    }

    const formatted = addFiatSignToAmount(formatNumberToLocale(replaced));

    setNetWorthInputText(replaced);
    setNetWorthInputMaskedValue(formatted);
  };

  const handleChangeHowMuchToInvestInputText = (textValue: string) => {
    const replaced = textValue.replace(GET_ONLY_NUMBERS_AND_DOT_REGEX, '');

    if (!replaced) {
      handleResetHowMuchToInvestInput();
      return;
    }

    let numberedValue = Number(replaced);

    if (numberedValue > maximumAllowedToInvest.value) {
      numberedValue = maximumAllowedToInvest.value;
    }

    const formatted = addFiatSignToAmount(formatNumberToLocale(numberedValue));

    setHowMuchToInvestMaskedValue(formatted);
    setHowMuchToInvest(numberedValue);
    setValue(numberedValue);
  };

  const handleOnValueChange = (sliderValue: number[]) => {
    setHowMuchToInvest(sliderValue[0]);
    setValue(sliderValue[0]);
  };

  const CustomHowMuchToInvestThumb = () => (
    <HowMuchToInvestThumb
      amount={value}
      maximumAllowed={maximumAllowedToInvest.value}
      isDisabled={!netWorthValue}
    />
  );

  return (
    <View style={styles.container}>
      <Typography size="h5" strong style={styles.incomeText}>
        {translate('screens.prequalification.income')}
      </Typography>

      <View style={styles.question1Container}>
        <Typography size="body1" style={styles.smallTextEmp}>
          {translate('screens.prequalification.employed')}
        </Typography>
        <View style={styles.selectContainer}>
          <Select
            style={getTextInputStyle(theme)}
            onPress={invProfQ1}
            value={selectValueQ4}
            customContainerStyle={getContainerStyle(theme)}
            textInputDisabled
          />
        </View>
      </View>

      <View style={styles.dividerIncome}>
        <Divider />
      </View>

      <SliderContainer
        caption={captionText1}
        slider1GraphPoint1={`${SLIDERS_TEXTUAL_STEPS.lessThanFiftyThousand}  `}
        slider1GraphPoint2={`  ${SLIDERS_TEXTUAL_STEPS.fiftyKToOneHundredK}`}
        slider1GraphPoint3={SLIDERS_TEXTUAL_STEPS.oneToTwoHundredThousand}
        slider1GraphPoint4={SLIDERS_TEXTUAL_STEPS.moreThanTwoHundredThousand}
        trackMarks={[
          SLIDERS_NUMERIC_STEPS.zero,
          SLIDERS_NUMERIC_STEPS.tenThousand,
          SLIDERS_NUMERIC_STEPS.twentyThousand,
          SLIDERS_NUMERIC_STEPS.thirtyThousand,
        ]}
      >
        <Slider
          passValue
          handleChange={slider1Answer}
          hideTopView
          animateTransitions
          renderThumbComponent={CustomThumb}
          thumbStyle={styles.thumb}
          trackStyle={getTrackStyle(theme)}
          maximumValue={SLIDERS_NUMERIC_STEPS.thirtyThousand}
          minimumValue={SLIDERS_NUMERIC_STEPS.zero}
          step={SLIDERS_NUMERIC_STEPS.tenThousand}
          minimumTrackTintColor={palette.royalBlue[500]}
          animationType="spring"
          decimalSize={SLIDERS_NUMERIC_STEPS.zero}
        />
      </SliderContainer>

      <View style={styles.question2Container}>
        <Typography size="h5" strong style={styles.networthText}>
          {translate('screens.prequalification.networth')}
        </Typography>
      </View>

      <View style={styles.netWorthtInputContainer}>
        <Typography size="body1">
          {translate('screens.prequalification.liquid')}
        </Typography>

        <TextInput
          placeholder={placeHolder}
          outerWrapperHasAllWidth={false}
          keyboardType="numeric"
          maxLength={MAX_NET_WORTH_DIGITS}
          onChangeText={handleChangeNetWorhtInputText}
          value={netWorthInputMaskedValue}
          customContainerStyle={styles.investorProfileStepInputs}
        />
      </View>

      <View style={styles.dividerInvest}>
        <Divider />
      </View>

      <View style={styles.howMuchToInvestContainer}>
        {howMuchToInvestLabel}

        <TextInput
          outerWrapperHasAllWidth={false}
          placeholder={translate(
            'screens.prequalification.textInputPlaceholder'
          )}
          maxLength={MAX_NET_WORTH_DIGITS}
          customContainerStyle={styles.investorProfileStepInputs}
          value={howMuchToInvestMaskedValue}
          keyboardType="numeric"
          onChangeText={handleChangeHowMuchToInvestInputText}
          disabled={!netWorthValue}
        />
      </View>

      <SliderContainer
        howMuchToInvestFirstStep={addFiatSignToAmount(0)}
        howMuchToInvestMediumStep={halfAllowedToInvest.displayed}
        howMuchToInvestMaximumStep={maximumAllowedToInvest.displayed}
        howMuchToInvestMaximumValue={maximumAllowedToInvest.value}
        hasThreePoints
        sliderValue={[value]}
      >
        <Slider
          containerStyle={styles.howMuchToInvestSliderContainer}
          disabled={!netWorthValue}
          passValue
          handleChange={handleOnValueChange}
          value={value}
          maximumValue={netWorthValue}
          minimumValue={SLIDERS_NUMERIC_STEPS.zero}
          step={HOW_MUCH_TO_INVEST_SLIDER_STEP}
          decimalSize={SLIDERS_NUMERIC_STEPS.zero}
          hideTopView
          renderThumbComponent={CustomHowMuchToInvestThumb}
          thumbStyle={styles.thumb}
          trackStyle={getTrackStyle(theme)}
          minimumTrackTintColor={palette.royalBlue[500]}
          animationType="spring"
        />
      </SliderContainer>
      {showAttentionMessage && renderAttentionMessage}

      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          disabled={buttonDisabled}
          label={translate('screens.prequalification.next')}
          onPress={proceedButtonAction}
        />
      </View>
    </View>
  );
};

export const ExperienceSlide: FC<SlideProps> = ({
  proceedButtonAction,
  buttonDisabled,
  expQ1,
  selectValueQ5,
  slider3Answer,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  return (
    <View style={styles.container}>
      <View style={styles.question1Container}>
        <Typography size="body1" style={styles.smallTextQ1}>
          {translate('screens.prequalification.experience')}
        </Typography>
        <View style={styles.selectContainer}>
          <Select
            style={getTextInputStyle(theme)}
            onPress={expQ1}
            value={selectValueQ5}
            customContainerStyle={getContainerStyle(theme)}
            textInputDisabled
          />
        </View>
      </View>
      <View style={styles.question2Container}>
        <Typography size="buttons" variant="grey.600" style={styles.subText}>
          {translate('screens.prequalification.investing')}
        </Typography>
      </View>
      <View style={styles.dividerInvest}>
        <Divider />
      </View>
      <View style={styles.question3ContainerExp}>
        <Typography size="body1" style={styles.smallTextQ1}>
          {translate('screens.prequalification.expyears')}
        </Typography>
      </View>
      <View style={styles.question3Container}>
        <Typography
          size="buttons"
          variant="grey.600"
          style={styles.subTextSpacing}
        >
          {translate('screens.prequalification.includes')}
        </Typography>
      </View>
      <SliderContainer
        hasThreePoints
        slider3GraphPoint1={SLIDERS_TEXTUAL_STEPS.lessThanOne}
        slider3GraphPoint2={SLIDERS_TEXTUAL_STEPS.oneToFive}
        slider3GraphPoint3={SLIDERS_TEXTUAL_STEPS.fivePlus}
        trackMarks={[
          SLIDERS_NUMERIC_STEPS.zero,
          SLIDERS_NUMERIC_STEPS.fifteenThousand,
          SLIDERS_NUMERIC_STEPS.thirtyThousand,
        ]}
      >
        <Slider
          passValue
          handleChange={slider3Answer}
          hideTopView
          animateTransitions
          renderThumbComponent={CustomThumb}
          thumbStyle={styles.thumb}
          trackStyle={getTrackStyle(theme)}
          maximumValue={SLIDERS_NUMERIC_STEPS.thirtyThousand}
          minimumValue={SLIDERS_NUMERIC_STEPS.zero}
          step={SLIDERS_NUMERIC_STEPS.fifteenThousand}
          minimumTrackTintColor={palette.royalBlue[500]}
          animationType="spring"
          decimalSize={SLIDERS_NUMERIC_STEPS.zero}
        />
      </SliderContainer>
      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          disabled={buttonDisabled}
          label={translate('screens.prequalification.next')}
          onPress={proceedButtonAction}
        />
      </View>
    </View>
  );
};

export const InvestingSlide: FC<SlideProps> = ({
  proceedButtonAction,
  buttonDisabled,
  investQ1,
  investQ2,
  selectValueQ6,
  selectValueQ7,
  slider4Answer,
  slider5Answer,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  return (
    <View style={styles.container}>
      <View style={styles.question1ContainerInv}>
        <Typography size="body1" style={styles.smallTextInvestmentGoal}>
          {translate('screens.prequalification.goal')}
        </Typography>
        <View style={styles.selectContainer}>
          <Select
            style={getTextInputStyle(theme)}
            onPress={investQ1}
            value={selectValueQ6}
            customContainerStyle={getContainerStyle(theme)}
            textInputDisabled
          />
        </View>
      </View>
      <View style={styles.dividerIncome}>
        <Divider />
      </View>
      <SliderContainer
        caption={captionTextGoal}
        hasThreePoints
        slider4GraphPoint1={SLIDERS_TEXTUAL_STEPS.zeroToOne}
        slider4GraphPoint2={`${SLIDERS_TEXTUAL_STEPS.oneToFive}   `}
        slider4GraphPoint3={`${SLIDERS_TEXTUAL_STEPS.fivePlus}    `}
        trackMarks={[
          SLIDERS_NUMERIC_STEPS.zero,
          SLIDERS_NUMERIC_STEPS.fifteenThousand,
          SLIDERS_NUMERIC_STEPS.thirtyThousand,
        ]}
      >
        <Slider
          passValue
          handleChange={slider4Answer}
          hideTopView
          animateTransitions
          renderThumbComponent={CustomThumb}
          thumbStyle={styles.thumb}
          trackStyle={getTrackStyle(theme)}
          maximumValue={SLIDERS_NUMERIC_STEPS.thirtyThousand}
          minimumValue={SLIDERS_NUMERIC_STEPS.zero}
          step={SLIDERS_NUMERIC_STEPS.fifteenThousand}
          minimumTrackTintColor={palette.royalBlue[500]}
          animationType="spring"
          decimalSize={SLIDERS_NUMERIC_STEPS.zero}
        />
      </SliderContainer>
      <View style={styles.dividerInvest}>
        <Divider />
      </View>
      <View style={styles.question3Container}>
        <Typography size="body1" style={styles.smallTextQ1}>
          {translate('screens.prequalification.liquidimp')}
        </Typography>
        <View style={styles.selectContainer}>
          <Select
            style={getTextInputStyle(theme)}
            onPress={investQ2}
            value={selectValueQ7}
            customContainerStyle={getContainerStyle(theme)}
            textInputDisabled
          />
        </View>
      </View>
      <View style={styles.dividerInvest}>
        <Divider />
      </View>
      <SliderContainer
        caption={captionTextPercentage}
        slider5GraphPoint1={` ${SLIDERS_TEXTUAL_STEPS.zeroPercent}    `}
        slider5GraphPoint2={`  ${SLIDERS_TEXTUAL_STEPS.oneToFiftyPercent}`}
        slider5GraphPoint3={`   ${SLIDERS_TEXTUAL_STEPS.fiftyOneToSeventyFivePercent}`}
        slider5GraphPoint4={`  ${SLIDERS_TEXTUAL_STEPS.oneHundredPercent}`}
        trackMarks={[
          SLIDERS_NUMERIC_STEPS.zero,
          SLIDERS_NUMERIC_STEPS.tenThousand,
          SLIDERS_NUMERIC_STEPS.twentyThousand,
          SLIDERS_NUMERIC_STEPS.thirtyThousand,
        ]}
      >
        <Slider
          passValue
          handleChange={slider5Answer}
          hideTopView
          animateTransitions
          renderThumbComponent={CustomThumb}
          thumbStyle={styles.thumb}
          trackStyle={getTrackStyle(theme)}
          maximumValue={SLIDERS_NUMERIC_STEPS.thirtyThousand}
          minimumValue={SLIDERS_NUMERIC_STEPS.zero}
          step={SLIDERS_NUMERIC_STEPS.tenThousand}
          minimumTrackTintColor={palette.royalBlue[500]}
          animationType="spring"
          decimalSize={SLIDERS_NUMERIC_STEPS.zero}
        />
      </SliderContainer>
      <View style={styles.buttonContainer}>
        <Button
          variant="primary"
          disabled={buttonDisabled}
          label={translate('screens.prequalification.next')}
          onPress={proceedButtonAction}
        />
      </View>
    </View>
  );
};
