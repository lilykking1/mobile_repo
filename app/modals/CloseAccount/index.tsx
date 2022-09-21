import React, {
  forwardRef,
  useContext,
  useMemo,
  ForwardRefRenderFunction,
} from 'react';
import { View } from 'react-native';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { translate } from '@app/i18n';
import { Button, TextInput, Typography } from '@app/components';
import { palette } from '@app/theme';

import Header from './fragments/Header';
import styles from './styles';
import { getInputColorVariant } from './utils';

interface CloseAccountProps extends BottomSheetModalProps {
  onCloseAccount: () => void;
  onGoBack: () => void;
}

const CloseAccount: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  CloseAccountProps
> = ({ onCloseAccount, onGoBack }, ref) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const inputStyles = useMemo(
    () => [styles.input, getInputColorVariant(theme)],
    [theme]
  );

  return (
    <BottomSheetModal
      contentStyle={styles.content}
      ref={ref}
      snapToContent
      headerComponent={(
        <Header
          title={translate('screens.profile.action.closeAccount.title')}
        />
      )}
    >
      <Typography size="buttons" altLight="grey.650">
        {translate('screens.profile.closeAccount.titleInput')}
      </Typography>
      <TextInput
        customTypographyColor={palette.white}
        customContainerStyle={styles.customContainer}
        useBottomSheet
        style={inputStyles}
        multiline
        placeholder={translate('screens.profile.closeAccount.inputPlaceholder')}
        returnKeyType="done"
        blurOnSubmit
      />
      <View style={styles.actionsContainer}>
        <Button
          style={styles.btnCancel}
          onPress={onGoBack}
          variant="secondary"
          label={translate('screens.profile.closeAccount.actions.cancel')}
        />
        <Button
          style={styles.btnClose}
          onPress={onCloseAccount}
          variant="red"
          label={translate('screens.profile.closeAccount.actions.close')}
        />
      </View>
    </BottomSheetModal>
  );
};

export default observer(forwardRef(CloseAccount));
