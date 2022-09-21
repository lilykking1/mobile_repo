import { getFontStyleForWeight } from '@app/utils/font';

export const labelStyle = {
  ...getFontStyleForWeight({
    fontFamily: 'VisueltPro',
    fontWeight: '500',
    fontSize: 10,
  }),
};
