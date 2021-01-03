import React, { createContext } from "react";

interface IProfileMenuState {
  ref: React.RefObject<any> | undefined;
  showDropdownMenu: boolean;
}

interface IAction {
  type: string;
  value: any;
}

interface IProfileMenuContext {
  profileMenuState: IProfileMenuState;
  dispatchProfileMenu: CallableFunction;
}

export const ProfileMenuContext = createContext<
  IProfileMenuContext | undefined
>(undefined);

export const ProfileMenuReducer = (
  state: IProfileMenuState,
  action: IAction
): IProfileMenuState => {
  switch (action.type) {
    case "SET_REF": {
      return {
        ...state,
        ref: action.value,
      };
    }

    case "SET_SHOW_DROPDOWN": {
      return {
        ...state,
        showDropdownMenu: action.value,
      };
    }

    default:
      return state;
  }
};
