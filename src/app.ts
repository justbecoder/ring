/**
 * @file: description
 * @author: huxiaoshuai
 * @Date: 2022-01-19 12:03:20
 * @LastEditors: huxiaoshuai
 * @LastEditTime: 2022-01-19 21:47:58
 */
import * as React from "react";
import "./app.less";
import "annar/dist/annar.css";
import { cloud } from "remax/wechat";

cloud.init({
  env: "cloud1-9g8vad6y3ebde707",
});

const App: React.FC = (props) => props.children as React.ReactElement;

export default App;
