import React, { FC } from 'react';
import { Path } from 'react-native-svg';

interface TextProps {
  tint: string;
}

const Text: FC<TextProps> = ({ tint }) => (
  <>
    <Path
      d="M61.8218 39.8406C60.1801 39.8406 58.715 39.5496 57.4265 38.9677C56.1588 38.3859 55.1405 37.5858 54.3716 36.5675C53.6234 35.5492 53.1663 34.375 53 33.045L53.3741 32.5462L58.4552 31.5487C58.5591 32.754 58.9436 33.6788 59.6086 34.323C60.2944 34.9673 61.1568 35.2894 62.1959 35.2894C63.0687 35.2894 63.7545 35.0712 64.2533 34.6348C64.7728 34.1776 65.0326 33.5437 65.0326 32.7332C65.0326 32.0475 64.8455 31.4967 64.4715 31.0811C64.0974 30.6655 63.6402 30.3538 63.0999 30.1459C62.5803 29.9381 61.8842 29.7303 61.0113 29.5225L60.3567 29.3666C58.2993 28.8263 56.7095 28.0886 55.5873 27.1534C54.4651 26.2182 53.904 24.9401 53.904 23.3192C53.904 21.4696 54.6106 20.0253 56.0237 18.9862C57.4369 17.9263 59.2864 17.3964 61.5724 17.3964C63.9 17.3964 65.7391 17.9471 67.09 19.0485C68.4408 20.1292 69.2824 21.5319 69.6149 23.2568L69.2097 23.7868L64.5962 24.4102C64.4922 23.4335 64.1701 22.6645 63.6298 22.1034C63.1103 21.5216 62.3933 21.2306 61.4789 21.2306C60.8139 21.2306 60.2736 21.3865 59.8579 21.6982C59.4423 21.9891 59.2345 22.3944 59.2345 22.9139C59.2345 23.3503 59.3904 23.714 59.7021 24.005C60.0138 24.2751 60.4087 24.4933 60.8866 24.6596C61.3854 24.8258 62.092 25.0233 63.0064 25.2519L63.7233 25.4389C65.0741 25.7714 66.2275 26.187 67.1835 26.6858C68.1602 27.1638 68.9707 27.86 69.6149 28.7743C70.2592 29.668 70.5813 30.8421 70.5813 32.2968C70.5813 33.8762 70.1968 35.2374 69.4279 36.3804C68.659 37.5026 67.6095 38.3651 66.2795 38.9677C64.9702 39.5496 63.4843 39.8406 61.8218 39.8406Z"
      fill={tint}
    />
    <Path
      d="M77.6255 39.8406C76.0461 39.8406 74.7784 39.4249 73.8225 38.5937C72.8873 37.7416 72.4197 36.4428 72.4197 34.6971V28.1197H69.8324V23.9426H72.4197V19.5785H73.2614L77.5943 21.0436V23.9426H80.6492V28.1197H77.5943V34.1984C77.5943 34.6971 77.7294 35.0712 77.9996 35.3206C78.2697 35.5699 78.6438 35.6946 79.1218 35.6946C79.4751 35.6946 79.8284 35.6219 80.1817 35.4764L80.4934 35.6635V39.5288C79.5374 39.7367 78.5815 39.8406 77.6255 39.8406Z"
      fill={tint}
    />
    <Path
      d="M85.7389 39.8406C84.8868 39.8406 84.0763 39.6431 83.3074 39.2483C82.5593 38.8534 81.9462 38.2923 81.4683 37.565C81.0111 36.8168 80.7825 35.9544 80.7825 34.9777C80.7825 33.5853 81.2604 32.4527 82.2164 31.5799C83.1723 30.707 84.5647 30.1771 86.3935 29.9901L90.2589 29.5848V29.1172C90.2589 28.473 90.0822 27.9846 89.729 27.6521C89.3757 27.2989 88.8561 27.1222 88.1703 27.1222C87.5053 27.1222 86.9858 27.3092 86.6117 27.6833C86.2584 28.0366 86.0714 28.5042 86.0506 29.0861L81.7176 28.6185L81.5618 28.3068C81.9358 26.8105 82.6944 25.6571 83.8374 24.8466C84.9804 24.0361 86.4247 23.6309 88.1703 23.6309C90.2277 23.6309 91.9006 24.1504 93.1891 25.1895C94.4776 26.2078 95.1218 27.6937 95.1218 29.6472V34.323C95.1218 35.2582 95.4543 35.7258 96.1193 35.7258C96.2856 35.7258 96.4414 35.705 96.5869 35.6635L96.8363 35.9128V39.4042C96.192 39.612 95.4023 39.7159 94.4672 39.7159C93.719 39.7159 93.0125 39.56 92.3474 39.2483C91.7032 38.9366 91.1733 38.4378 90.7576 37.752H90.4459C89.677 38.5417 88.9496 39.0924 88.2639 39.4042C87.5988 39.6951 86.7572 39.8406 85.7389 39.8406ZM87.0793 36.1311C87.7443 36.1311 88.3054 35.9648 88.7626 35.6323C89.2406 35.279 89.7393 34.7075 90.2589 33.9178V32.6397L87.4534 33.0138C86.1233 33.2008 85.4583 33.7516 85.4583 34.6659C85.4583 35.1024 85.6038 35.4556 85.8947 35.7258C86.2065 35.996 86.6013 36.1311 87.0793 36.1311Z"
      fill={tint}
    />
    <Path
      d="M104.396 39.8406C102.879 39.8406 101.477 39.4977 100.188 38.8119C98.9204 38.1053 97.9125 37.139 97.1643 35.9128C96.4162 34.6867 96.0421 33.2944 96.0421 31.7357C96.0421 30.1771 96.4162 28.7847 97.1643 27.5586C97.9125 26.3325 98.9204 25.3765 100.188 24.6908C101.477 23.9842 102.879 23.6309 104.396 23.6309C106.474 23.6309 108.189 24.1504 109.54 25.1895C110.911 26.2286 111.784 27.621 112.158 29.3666L111.815 29.8342L107.669 30.3953C107.482 29.7095 107.108 29.1484 106.547 28.712C105.986 28.2756 105.269 28.0574 104.396 28.0574C103.42 28.0574 102.609 28.3691 101.965 28.9926C101.341 29.616 101.03 30.5304 101.03 31.7357C101.03 32.9203 101.341 33.8347 101.965 34.4789C102.609 35.1024 103.42 35.4141 104.396 35.4141C105.269 35.4141 105.955 35.227 106.454 34.853C106.952 34.4581 107.358 33.8659 107.669 33.0761L111.815 33.6373L112.158 34.0737C111.597 35.944 110.662 37.3779 109.353 38.3755C108.044 39.3522 106.391 39.8406 104.396 39.8406Z"
      fill={tint}
    />
    <Path
      d="M112.905 16.7729H118.08V28.7743H118.392L122.288 23.9426H128.242L122.756 30.707L128.398 39.5288H122.413L118.392 33.2008H118.08V39.5288H112.905V16.7729Z"
      fill={tint}
    />
    <Path
      d="M134.671 39.8406C133.154 39.8406 131.772 39.5081 130.525 38.8431C129.279 38.1573 128.291 37.2013 127.564 35.9752C126.837 34.7283 126.473 33.3151 126.473 31.7357C126.473 30.1563 126.847 28.7536 127.595 27.5274C128.364 26.3013 129.372 25.3454 130.619 24.6596C131.887 23.9738 133.237 23.6309 134.671 23.6309C136.292 23.6309 137.705 23.9634 138.911 24.6284C140.137 25.2726 141.083 26.2078 141.748 27.4339C142.433 28.6393 142.776 30.0628 142.776 31.7046V32.8891H131.274C131.419 33.7619 131.804 34.4685 132.427 35.0088C133.05 35.5284 133.84 35.7882 134.796 35.7882C135.627 35.7882 136.272 35.6219 136.729 35.2894C137.186 34.9569 137.56 34.4581 137.851 33.7931L142.059 34.3542L142.371 34.8842C141.727 36.5882 140.75 37.8455 139.441 38.656C138.152 39.4457 136.562 39.8406 134.671 39.8406ZM137.882 29.8654C137.778 29.1172 137.435 28.5042 136.853 28.0262C136.272 27.5482 135.534 27.3092 134.64 27.3092C133.871 27.3092 133.185 27.5482 132.583 28.0262C132.001 28.4834 131.616 29.0965 131.429 29.8654H137.882Z"
      fill={tint}
    />
    <Path
      d="M150.255 39.8406C149.07 39.8406 147.886 39.5496 146.701 38.9677C145.537 38.3859 144.561 37.4819 143.771 36.2557C142.981 35.0296 142.587 33.523 142.587 31.7357C142.587 29.9277 142.981 28.4211 143.771 27.2157C144.561 25.9896 145.569 25.0856 146.795 24.5037C148.042 23.9218 149.33 23.6309 150.66 23.6309C151.554 23.6309 152.333 23.7556 152.998 24.005C153.684 24.2336 154.359 24.5765 155.024 25.0337V16.7729H160.199V39.5288H155.024V37.9391C154.442 38.5625 153.767 39.0405 152.998 39.373C152.229 39.6847 151.315 39.8406 150.255 39.8406ZM151.564 35.6635C152.562 35.6635 153.383 35.3621 154.027 34.7595C154.692 34.136 155.024 33.2528 155.024 32.1098V31.3305C155.024 30.2083 154.692 29.3458 154.027 28.7432C153.362 28.1197 152.52 27.808 151.502 27.808C150.421 27.808 149.538 28.1613 148.852 28.8679C148.187 29.5744 147.855 30.5304 147.855 31.7357C147.855 32.9411 148.198 33.897 148.883 34.6036C149.569 35.3102 150.463 35.6635 151.564 35.6635Z"
      fill={tint}
    />
    <Path
      d="M164.132 39.5288C163.363 39.5288 162.688 39.2483 162.106 38.6872C161.545 38.1053 161.264 37.4299 161.264 36.661C161.264 35.8713 161.545 35.1959 162.106 34.6348C162.688 34.0737 163.363 33.7931 164.132 33.7931C164.922 33.7931 165.597 34.0737 166.158 34.6348C166.72 35.1959 167 35.8713 167 36.661C167 37.4299 166.72 38.1053 166.158 38.6872C165.597 39.2483 164.922 39.5288 164.132 39.5288Z"
      fill={tint}
    />
  </>
);

export default Text;