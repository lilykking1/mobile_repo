import React, { FC, useCallback, useContext, useEffect, useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { isUndefined } from 'lodash';

import { Theme } from '@app/state/stores/settings/types';
import Welcome from '@app/screens/Welcome';
import { RootContext } from '@app/state';
import { Modal } from '@app/modals';

const Empty: FC = () => {
  const {
    settingsStore: { theme, selectTheme, getIsHydrated },
  } = useContext(RootContext);

  const hasAlreadyChosenTheme = !isUndefined(theme);

  const periodBottomSheetFilterRef = useRef<BottomSheetModal>(null);

  const handleOpenModal = () => periodBottomSheetFilterRef.current?.present();
  const handleCloseModal = () => periodBottomSheetFilterRef.current?.close();

  // Theme Selection opens on first login when no theme has been selected yet
  useEffect(() => {
    if (!hasAlreadyChosenTheme && getIsHydrated()) {
      handleOpenModal();
    }
  }, [hasAlreadyChosenTheme, getIsHydrated, theme]);

  const handleSelectTheme = useCallback(
    (chosenTheme: Theme) => {
      selectTheme(chosenTheme);
      handleCloseModal();
    },
    [selectTheme]
  );

  return (
    <>
      <Welcome />

      <Modal.ThemeSelection
        ref={periodBottomSheetFilterRef}
        handleSelectTheme={handleSelectTheme}
      />
    </>
  );
};

export default Empty;
