import { EXCHANGE_CARD_WIDTH } from '@app/components/AllAssetsCard/constants';

// calculate the width of the card component plus some additional space
export const INTERVAL_TO_SNAP_ITEM = EXCHANGE_CARD_WIDTH + 15;

export const VIEWABILITY_CONFIG = {
  viewAreaCoveragePercentThreshold: 100,
};

// means that the item will be scrolled to 50% of the screen
export const VIEW_POSITION_TO_SCROLL_TO = 0.5;

export const DECELERATION_RATE = 0;

export const QUANTITY_OF_ITENS_TO_RENDER_INITIALLY = 2;
