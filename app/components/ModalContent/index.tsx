import React, { FC, useMemo, ReactNode, useContext } from 'react';
import { Modal, View, Pressable, ViewStyle } from 'react-native';
import { observer } from 'mobx-react';
import { RootContext } from '@app/state';
import { BlurView } from '@react-native-community/blur';
import styles from './styles';
import { getModalStyle, getBlurConfig } from './utils';

interface ModalContainerProps {
  visible: boolean;
  onRequestClose: () => void;
  children?: ReactNode;
  style?: ViewStyle;
}

const ModalContainer: FC<ModalContainerProps> = ({
  visible,
  onRequestClose,
  children,
  style,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const modalStyle = useMemo(
    () => [styles.contentStyle, getModalStyle(theme), style],
    [theme, style]
  );

  const modalTransparencyReduce = useMemo(() => getBlurConfig(theme), [theme]);

  const blurFragment = useMemo(
    () => (
      <Pressable style={styles.blur} onPress={onRequestClose}>
        <BlurView
          style={styles.blurFit}
          blurType={theme}
          blurAmount={20}
          reducedTransparencyFallbackColor={modalTransparencyReduce}
        />
      </Pressable>
    ),
    [onRequestClose, modalTransparencyReduce, theme]
  );

  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      animated
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <View style={styles.modalContainer}>
        <View style={modalStyle}>{children}</View>
        {blurFragment}
      </View>
    </Modal>
  );
};

export default observer(ModalContainer);
