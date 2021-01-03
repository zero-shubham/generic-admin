import { createContext } from "react";

interface IMenuState {
  activeKey: string;
  showMenu: boolean;
}

export enum MenuContextActions {
  SET_ACTIVE_KEY = "SET_ACTIVE_KEY",
  SET_SHOW_MENU = "SET_SHOW_MENU",
}

interface IAction {
  type: MenuContextActions;
  value: any;
}

interface IMenuContext {
  menuState: IMenuState;
  dispatchMenu: CallableFunction;
}
export const MenuContext = createContext<IMenuContext | undefined>(undefined);

export const MenuReducer = (state: IMenuState, action: IAction): IMenuState => {
  switch (action.type) {
    case "SET_ACTIVE_KEY": {
      return {
        ...state,
        activeKey: action.value,
      };
    }

    case "SET_SHOW_MENU": {
      return {
        ...state,
        showMenu: action.value,
      };
    }

    default:
      return state;
  }
};
