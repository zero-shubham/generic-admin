import React, { useReducer, createRef } from "react";
import Menu from "containers/Menu";
import TopBar from "containers/TopBar";
import { BrowserRouter as Router } from "react-router-dom";
import MenuItem from "components/MenuItem";
import homeSvg from "assets/images/home.svg";
import homeBlackSvg from "assets/images/home_black.svg";
import SubMenu from "components/SubMenu";
import ProfileMenu, { profileMenuParentHandler } from "containers/ProfileMenu";
import { ProfileMenuContext, ProfileMenuReducer } from "contexts/ProfileMenu";
import styles from "./Layout.module.scss";
import { MenuContext, MenuReducer } from "contexts/MenuContext";

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
        <Router>
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
              <SubMenu
                header="SubMenu"
                subpath="/submenu"
                img={homeBlackSvg}
                className={styles.marginBtm}
              >
                <MenuItem
                  to="/submenu/bookings"
                  img={homeSvg}
                  imgBlack={homeBlackSvg}
                  className={styles.marginBtm}
                >
                  Booking
                </MenuItem>
                <MenuItem
                  to="/submenu/about"
                  img={homeSvg}
                  imgBlack={homeBlackSvg}
                >
                  About
                </MenuItem>
              </SubMenu>
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
        </Router>
      </ProfileMenuContext.Provider>
    </div>
  );
}

export default Layout;
