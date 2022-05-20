/**
 * @file: 首页-储物戒
 * @author: huxiaoshuai
 * @Date: 2022-01-19 12:03:20
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-01-26 21:12:23
 */
import React, { useState } from "react";
import { View, Text, Image, cloud, navigateTo } from "remax/wechat";
import styles from "./index.less";
import { IconFont } from "@/components";
import { Button, Row, Col, Card, Icon } from "annar";

export default () => {
  const [count, setCount] = useState(0);

  var addTwoNumbers = function (l1: any, l2: any) {
    // 数组转为数值
    const len1 = l1.length;
    const len2 = l2.length;

    let num1 = "";
    let num2 = "";

    for (let i = len1 - 1; i >= 0; i--) {
      num1 += l1[i];
    }
    for (let j = len2 - 1; j >= 0; j--) {
      num2 += l2[j];
    }

    const num = (+num1 + +num2).toString();
    const len = num.length;
    const arr = [];
    for (let i = 0; i < num.length; i++) {
      arr.push(+num[i]);
    }
    return arr;
  };

  console.log(addTwoNumbers([0], [0]));

  const buttonHandler = async (e: any) => {
    // console.log(e);
    // setCount((count) => count + 1);
    // const res = await cloud.callFunction({
    //   name: "test",
    // });
    // console.log({
    //   res,
    // });
    navigateTo({
      url: "/pages/box/box?isFirst=true",
    });
  };

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <View>这里空空如也</View>
        <Button type="primary" onTap={buttonHandler} style={{ marginTop: 30 }}>
          新建储物格 {count}
        </Button>
      </View>
    </View>
  );
};
