/**
 * @file: 首页-储物戒
 * @author: huxiaoshuai
 * @Date: 2022-01-19 12:03:20
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-01-19 21:43:52
 */
import React, { useState } from "react";
import { View, Text, Image, cloud } from "remax/wechat";
import styles from "./index.less";
import { IconFont } from "@/components";
import { Button } from "annar";

export default () => {
  const [count, setCount] = useState(0);

  const buttonHandler = async (e: any) => {
    console.log(e);
    setCount((count) => count + 1);
    const res = await cloud.callFunction({
      name: "test",
    });
    console.log({
      res,
    });
  };

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{" "}
          开始
        </View>
        <IconFont name="Robot-1" size={100}></IconFont>
        <Button type="primary" onTap={buttonHandler}>
          Click me {count}
        </Button>
      </View>
    </View>
  );
};
