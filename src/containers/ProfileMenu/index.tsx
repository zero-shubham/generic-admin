import React, { useContext } from "react";
import IconButton, {
  IconButtonSizeEnum,
  IconButtonTypeEnum,
} from "components/IconButton";
import memeJpeg from "assets/images/meme1.jpeg";
import DropdownMenu from "components/DropdownMenu";
import MenuItem from "components/MenuItem";
import homeSvg from "assets/images/home.svg";
import homeBlackSvg from "assets/images/home_black.svg";
import styles from "./ProfileMenu.module.scss";
import { ProfileMenuContext } from "contexts/ProfileMenu";

export function profileMenuParentHandler(
  e: React.MouseEvent,
  thisRef: React.RefObject<any> | undefined,
  onTrue: CallableFunction,
  onFalse: CallableFunction
): void {
  if (thisRef?.current.contains(e.target)) {
    onTrue();
  } else {
    onFalse();
  }
}

function ProfileMenu(): JSX.Element {
  const profileMenuContext = useContext(ProfileMenuContext);

  const onMenuClick: (event: React.MouseEvent) => void = () =>
    profileMenuContext?.dispatchProfileMenu({
      type: "SET_SHOW_DROPDOWN",
      value: false,
    });
  return (
    <div className={styles.main} ref={profileMenuContext?.profileMenuState.ref}>
      <div
        className={styles.header}
        onClick={() =>
          profileMenuContext?.dispatchProfileMenu({
            type: "SET_SHOW_DROPDOWN",
            value: !profileMenuContext?.profileMenuState.showDropdownMenu,
          })
        }
      >
        <div className={styles.headerText}>
          <div className={styles.headerText_username}>UserName</div>
          <div className={styles.headerText_superadmin}>Super-Admin</div>
        </div>
        <IconButton
          img={memeJpeg}
          size={IconButtonSizeEnum.Small}
          type={IconButtonTypeEnum.roundedCircle}
          className={styles.headerIcon}
        />
        <div className={styles.container}>
          <DropdownMenu
            show={
              profileMenuContext?.profileMenuState.showDropdownMenu || false
            }
            className={styles.paddingDrpMnu}
          >
            <MenuItem
              to="/profile"
              img={homeSvg}
              imgBlack={homeBlackSvg}
              onClick={onMenuClick}
              className={styles.marginBtm}
            >
              Profile
            </MenuItem>
            <MenuItem
              to="/settings"
              img={homeSvg}
              imgBlack={homeBlackSvg}
              onClick={onMenuClick}
              className={styles.marginBtm}
            >
              Settings
            </MenuItem>
            <MenuItem
              to="/logout"
              img={homeSvg}
              imgBlack={homeBlackSvg}
              onClick={onMenuClick}
            >
              Logout
            </MenuItem>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default ProfileMenu;
