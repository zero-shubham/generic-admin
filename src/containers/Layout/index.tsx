import React, { useReducer, createRef } from "react";
import Menu from "containers/Menu";
import TopBar from "containers/TopBar";
import MenuItem from "components/MenuItem";
import homeSvg from "assets/images/home.svg";
import homeBlackSvg from "assets/images/home_black.svg";
import filePicSvg from "assets/images/file-picture.svg";
import filePicBlackSvg from "assets/images/file-picture_black.svg";
import userSvg from "assets/images/user.svg";
import userBlackSvg from "assets/images/user_black.svg";
import SubMenu from "components/SubMenu";
import ProfileMenu, { profileMenuParentHandler } from "containers/ProfileMenu";
import { ProfileMenuContext, ProfileMenuReducer } from "contexts/ProfileMenu";
import styles from "./Layout.module.scss";
import { MenuContext, MenuReducer } from "contexts/MenuContext";
import MenuCategory from "components/MenuCategory";

interface ILayout {
  children?: React.ReactNode;
}
function Layout({ children }: ILayout): JSX.Element {
  const [profileMenuState, dispatchProfileMenu] = useReducer(
    ProfileMenuReducer,
    {
      ref: createRef(),
      showDropdownMenu: false,
    }
  );
  const [menuState, dispatchMenu] = useReducer(MenuReducer, {
    activeKey: "",
    showMenu: false,
  });

  return (
    <div
      className="App"
      onClick={(e) =>
        profileMenuParentHandler(
          e,
          profileMenuState.ref,
          () =>
            dispatchProfileMenu({
              type: "SET_SHOW_DROPDOWN",
              value: !profileMenuState.showDropdownMenu,
            }),
          () =>
            dispatchProfileMenu({
              type: "SET_SHOW_DROPDOWN",
              value: false,
            })
        )
      }
    >
      <ProfileMenuContext.Provider
        value={{
          profileMenuState,
          dispatchProfileMenu,
        }}
      >
        <MenuContext.Provider value={{ menuState, dispatchMenu }}>
          <Menu>
            <MenuItem
              to="/"
              img={homeSvg}
              imgBlack={homeBlackSvg}
              className={styles.marginBtm}
            >
              Home
            </MenuItem>
            <MenuCategory category="Advertiser Data">
              <MenuItem
                to="/advertisers"
                img={userSvg}
                imgBlack={userBlackSvg}
                className={styles.marginBtm}
              >
                Advertisers
              </MenuItem>
              <MenuItem
                to="/banners"
                img={filePicSvg}
                imgBlack={filePicBlackSvg}
                className={styles.marginBtm}
              >
                Banners
              </MenuItem>
            </MenuCategory>
          </Menu>
        </MenuContext.Provider>
        <div className={styles.canvas}>
          <MenuContext.Provider value={{ menuState, dispatchMenu }}>
            <TopBar>
              <ProfileMenu />
            </TopBar>
          </MenuContext.Provider>
          {children}
        </div>
      </ProfileMenuContext.Provider>
    </div>
  );
}

export default Layout;
