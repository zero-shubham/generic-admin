import React from "react";
import { MenuItemProps } from "components/MenuItem";
import { SubMenuProps } from "components/SubMenu";
import styles from "./MenuCategory.module.scss";

interface IMenuCategory {
  children:
    | React.ReactElement<MenuItemProps>
    | Array<React.ReactElement<MenuItemProps>>
    | React.ReactElement<SubMenuProps>
    | Array<React.ReactElement<SubMenuProps>>;
  category: string;
}
function MenuCategory({ children, category }: IMenuCategory): JSX.Element {
  return (
    <div className={styles.main}>
      <div className={styles.category}>{category}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default MenuCategory;
