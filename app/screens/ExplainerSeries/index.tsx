import React, { FC, useCallback, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { Button, SafeArea, SlideShow } from '@app/components';
import { translate } from '@app/i18n';
import { RootRoutes } from '@app/navigation/types';
import { AmplitudeAuthProps, logAmplitudeEvent } from '@app/utils/amplitude';
import { logFirebaseAnalyticsEvent } from '@app/utils/analytics';

import { getOnNavigateToAmplitudeEvent } from '@app/screens/ExplainerSeries/utils';
import { useBraze } from '@app/hooks';
import { BrazeAuthenticationEvents } from '@app/utils/braze/events';
import { SLIDE_TIMER } from './constants';
import styles from './styles';
import FirstSlideAsset from '../../assets/images/introSlider/explainer_slide_animation.json';
import SecondSlideAsset from '../../assets/images/introSlider/second_explainer_slide.png';
import ThirdSlideAsset from '../../assets/images/introSlider/third_explainer_slide.png';
import FourthSlideAsset from '../../assets/images/introSlider/fourth_explainer_slide.png';
import Slide from './fragments/Slide';

const { height } = Dimensions.get('screen');

type TNavigationProp = StackNavigationProp<RootRoutes, 'ExplainerSeries'>;

const ExplainerSeries: FC = () => {
  const { logBrazeCustomEvent } = useBraze();
  const navigation = useNavigation<TNavigationProp>();
  const [withAutoScroll, setWithAutoScroll] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const onSlideShowRefChange = useCallback((node) => {
    if (node) {
      const currentIndex = Number(node.currentSlideIndex.value.toFixed(1));
      setCurrentSlideIndex(currentIndex);
    }
  }, []);

  const slides = [
    {
      id: 'slide1',
      component: (
        <Slide
          lottieAnimation={FirstSlideAsset}
          title={translate('screens.explainerSeriesCarousel.firstSlide.title')}
          subtitle={translate(
            'screens.explainerSeriesCarousel.firstSlide.subtitle'
          )}
          extraTitleStyle={styles.firstSlideTextStyle}
          subtitleFontSize="h6"
          bottomContainerStyle={styles.firstStyleText}
        />
      ),
    },
    {
      id: 'slide2',
      component: (
        <Slide
          image={SecondSlideAsset}
          title={translate('screens.explainerSeriesCarousel.secondSlide.title')}
          subtitle={translate(
            'screens.explainerSeriesCarousel.secondSlide.subtitle'
          )}
          extraTitleStyle={styles.titleSlideStyle}
          subtitleFontSize="h6"
          bottomContainerStyle={styles.slideStyleText}
        />
      ),
    },
    {
      id: 'slide3',
      component: (
        <Slide
          image={ThirdSlideAsset}
          title={translate('screens.explainerSeriesCarousel.thirdSlide.title')}
          subtitle={translate(
            'screens.explainerSeriesCarousel.thirdSlide.subtitle'
          )}
          extraTitleStyle={styles.titleSlideStyle}
          subtitleFontSize="h6"
          bottomContainerStyle={styles.slideStyleText}
        />
      ),
    },
    {
      id: 'slide4',
      component: (
        <Slide
          image={FourthSlideAsset}
          title={translate('screens.explainerSeriesCarousel.fourthSlide.title')}
          extraTitleStyle={styles.titleSlideStyle}
          bottomContainerStyle={styles.fourthSlideStyleText}
        />
      ),
    },
  ];

  const onNavigateTo = async (route: string) => {
    setWithAutoScroll(false);
    logAmplitudeEvent(getOnNavigateToAmplitudeEvent(route), {
      location: `${AmplitudeAuthProps.WELCOME_SCREEN} ${currentSlideIndex + 1}`,
    });
    // TODO: Remove, this is just a demonstrative example.
    await logFirebaseAnalyticsEvent('auth_navigation');
    navigation.navigate('Authentication', { screen: route });
  };

  const onSignUp = () => {
    logBrazeCustomEvent(BrazeAuthenticationEvents.CLICK_SIGNUP);
    onNavigateTo('SignUp');
  };

  return (
    <SafeArea secondary testID="ExplainerSeries">
      <View style={styles.container}>
        <SlideShow
          scrollIntervalInMs={SLIDE_TIMER}
          slideHeight={height}
          containerHeight={height / 1.3}
          slides={slides}
          hasAutoScroll={withAutoScroll}
          ref={onSlideShowRefChange}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.signInButton}>
            <Button
              testID="Onboarding.SignInButton"
              size="large"
              variant="secondary"
              label={translate(
                'screens.explainerSeriesCarousel.action.signIn.title'
              )}
              onPress={() => onNavigateTo('SignIn')}
            />
          </View>
          <View style={styles.signUpButton}>
            <Button
              testID="Onboarding.SignUpButton"
              size="large"
              variant="primary"
              label={translate(
                'screens.explainerSeriesCarousel.action.signUp.title'
              )}
              onPress={onSignUp}
            />
          </View>
        </View>
      </View>
    </SafeArea>
  );
};

export default ExplainerSeries;
