/**
 * @file: description
 * @author: huxiaoshuai
 * @Date: 2022-01-19 12:03:20
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-01-20 17:18:50
 */
import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: [
    "pages/index/index",
    "pages/market/market",
    "pages/me/me",
    "pages/box/box",
  ],
  window: {
    navigationBarTitleText: "我的储物戒",
    navigationBarBackgroundColor: "#282c34",
    backgroundColor: "#F8F8F8",
  },
  tabBar: {
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    borderStyle: "black",
    // backgroundColor: "#282c34",
    backgroundColor: "#fff",
    list: [
      {
        text: "储物戒",
        pagePath: "pages/index/index",
        iconPath: "image/icon.png",
        selectedIconPath: "image/icon.png",
      },
      {
        text: "坊市",
        pagePath: "pages/market/market",
        iconPath: "image/icon.png",
        selectedIconPath: "image/icon.png",
      },
      {
        text: "我的",
        pagePath: "pages/me/me",
        iconPath: "image/icon.png",
        selectedIconPath: "image/icon.png",
      },
    ],
  },
};

export default config;
