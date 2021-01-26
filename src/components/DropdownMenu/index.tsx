import React from "react";
import styles from "./DropdownMenu.module.scss";
import { DropdownMenuItemProps } from "components/DropdownMenuItem";

type DropdownMenuProps = {
  children:
    | React.ReactElement<DropdownMenuItemProps>
    | Array<React.ReactElement<DropdownMenuItemProps>>;

  show: boolean;
  className?: string;
};

function DropdownMenu({
  children,
  show,
  className,
}: DropdownMenuProps): JSX.Element {
  const classNames = [styles.main, className];
  classNames.push(show ? styles.show : styles.hide);

  return (
    <div className={classNames.join(" ")}>{show && <div>{children}</div>}</div>
  );
}

export default DropdownMenu;
