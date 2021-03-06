/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
// @ts-ignore
import Iconfont_wechat from './wechat/wechat';

interface Props {
  name: 'Robot-1' | 'blizzard';
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // FIXME: RemaxJs doesn't support pxTransform()
  // @ts-ignore
  return <Iconfont_wechat name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;
