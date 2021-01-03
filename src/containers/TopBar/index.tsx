import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import MenuBurgerIcon from "components/MenuBurgerIcon";
import styles from "./TopBar.module.scss";
import { MenuContext } from "contexts/MenuContext";

type TopBarProps = {
  children?: React.ReactNode;
};
function TopBar({ children }: TopBarProps): JSX.Element {
  const menuContext = useContext(MenuContext);
  return (
    <div className={styles.main}>
      <Card className={styles.card}>
        <Card.Body className={styles["card-body"]}>
          <MenuBurgerIcon
            className={styles.menuBtn}
            onClick={() => {
              menuContext?.dispatchMenu({
                type: "SET_SHOW_MENU",
                value: true,
              });
            }}
          />
          {children}
        </Card.Body>
      </Card>
    </div>
  );
}

export default TopBar;
