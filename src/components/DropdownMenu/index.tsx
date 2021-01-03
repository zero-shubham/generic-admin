import React from "react";
import { MenuItemProps } from "components/MenuItem";
import styles from "./DropdownMenu.module.scss";

interface IDropdownMenu {
  children:
    | React.ReactElement<MenuItemProps>
    | Array<React.ReactElement<MenuItemProps>>;

  show: boolean;
  className?: string;
}

function DropdownMenu({
  children,
  show,
  className,
}: IDropdownMenu): JSX.Element {
  const classNames = [styles.main, className];
  classNames.push(show ? styles.show : styles.hide);

  return (
    <div className={classNames.join(" ")}>{show && <div>{children}</div>}</div>
  );
}

export default DropdownMenu;
