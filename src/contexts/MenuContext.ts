import { createContext } from "react";

interface IMenuState {
  activeKey: string;
}

interface IAction {
  type: string;
  value: string;
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
        activeKey: action.value,
      };
    }

    default:
      return state;
  }
};
