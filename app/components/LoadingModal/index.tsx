import React, { FC, useMemo, useContext } from 'react';
import { Modal, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { observer } from 'mobx-react';

import { CustomSpinner } from '@app/components';
import { RootContext } from '@app/state';

import { getBlurVariant, getBlurConfig } from './utils';
import styles from './styles';

const LoadingModal: FC = ({ ...rest }) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const modalTransparencyReduce = useMemo(() => getBlurConfig(theme), [theme]);

  const blurType = useMemo(() => getBlurVariant(theme), [theme]);

  return (
    <Modal animated animationType="fade" transparent>
      <View style={styles.container} {...rest}>
        <CustomSpinner />
      </View>
      <BlurView
        style={styles.blur}
        blurType={blurType}
        blurAmount={20}
        reducedTransparencyFallbackColor={modalTransparencyReduce}
      />
    </Modal>
  );
};

export default observer(LoadingModal);
