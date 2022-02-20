/*
 * @Author: 周长升
 * @Date: 2022-02-18 00:49:03
 * @LastEditTime: 2022-02-19 11:40:58
 * @LastEditors: 周长升
 * @Description:
 */
import { State } from "../state";
import { logError } from "../utils";

type RegisterPage = (obj: Record<string, unknown>) => void;

/**
 * 注册页面
 * @param obj - 属性
 */
export const registerPage: RegisterPage = (obj: Record<string, unknown>) => {
  try {
    switch (State.sdk.type) {
      case "sensors":
        {
          State.sdk.syncRef?.registerPage(obj);
        }
        break;
    }
  } catch (e) {
    logError(e);
  }
};
