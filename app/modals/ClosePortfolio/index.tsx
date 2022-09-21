import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
  useMemo,
} from 'react';
import { Image, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { Button, Typography } from '@app/components';
import { YellowQuestionMark } from '@app/assets/images';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import { RootContext } from '@app/state';
import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';

import { translate } from '@app/i18n';
import { Routes } from '@app/navigation/types';
import { logAmplitudeEvent } from '@app/utils/amplitude';
import { AmplitudeManagedPortfolioEvents } from '@app/utils/amplitude/constants/managedPortfolio';
import styles from './styles';
import { getTextTheme } from './utils';

interface ClosePortfolioProps extends BottomSheetModalProps {
  onHide: () => void;
}

const ClosePortfolio: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  ClosePortfolioProps
> = ({ onHide }, ref) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const navigateToCloseManagedPortfolio = () => {
    logAmplitudeEvent(AmplitudeManagedPortfolioEvents.CLICK_CLOSE_PORTFOLIO);
    navigation.navigate('CloseManagedPortfolio');
    onHide();
  };
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const titleStyles = useMemo(() => getTextTheme(theme, 'title'), [theme]);

  const subtitleStyles = useMemo(() => getTextTheme(theme, 'subtitle'), [
    theme,
  ]);

  return (
    <BottomSheetModal contentStyle={styles.content} ref={ref} snapToContent>
      <View style={styles.innerContent}>
        <Image source={YellowQuestionMark} accessibilityIgnoresInvertColors />
        <Typography
          style={[styles.centeredText, styles.title, titleStyles]}
          size="h4"
          strong
        >
          {translate('modals.closePortfolio.title')}
        </Typography>
        <Typography
          style={[styles.centeredText, styles.subtitle, subtitleStyles]}
          size="body1"
        >
          {translate('modals.closePortfolio.subtitle')}
        </Typography>
        <View style={styles.buttonsContainer}>
          <View style={styles.proceedButton}>
            <Button
              variant="secondary"
              label={translate('modals.closePortfolio.actions.proceed')}
              onPress={navigateToCloseManagedPortfolio}
            />
          </View>
          <View style={styles.goBackButton}>
            <Button
              variant="primary"
              label={translate('modals.closePortfolio.actions.goBack')}
              onPress={() => onHide()}
            />
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default forwardRef(ClosePortfolio);
