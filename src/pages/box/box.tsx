/**
 * @file: 储物格
 * @author: huxiaoshuai
 * @Date: 2022-01-20 17:17:21
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-01-26 21:09:05
 */
import React, { useState } from "react";
import { View, navigateBack } from "remax/wechat";
import { useQuery } from "remax";
import { Button } from "annar";

export default () => {
  const query = useQuery();
  console.log({
    query,
  });

  const back = () => {
    console.log(222);
    navigateBack();

    // 0 2 4 6 8 2n
    for (let i = 0; i < 10; i += 2) {
      console.log(i);
    }
  };

  return (
    <>
      <View>新建储物格</View>
      <Button type="primary" size="large" onTap={back}>
        返回
      </Button>
    </>
  );
};
