import { palette } from '@app/theme';
import { getFontStyleForWeight } from '@app/utils/font';

export const labelStyle = {
  color: palette.greySmoke,
  ...getFontStyleForWeight({
    fontFamily: 'VisueltPro',
    fontWeight: '500',
    fontSize: 10,
  }),
};
