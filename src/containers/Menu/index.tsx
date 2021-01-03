import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Scrollbars } from "react-custom-scrollbars";
import styles from "./Menu.module.scss";
import { MenuContext } from "contexts/MenuContext";
import closeSvg from "assets/images/close.svg";

type MenuProps = {
  children?: React.ReactNode;
};
function Menu({ children }: MenuProps): JSX.Element {
  const menuContext = useContext(MenuContext);
  return (
    <div
      className={
        menuContext?.menuState.showMenu
          ? `${styles.main} ${styles.show}`
          : styles.main
      }
    >
      <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>
          <div>LOGO</div>
          <div
            className={styles.closeBtn}
            onClick={() => {
              menuContext?.dispatchMenu({
                type: "SET_SHOW_MENU",
                value: false,
              });
            }}
          >
            <img src={closeSvg} />
          </div>
        </Card.Body>
        <Scrollbars>
          <div className={styles.menuLinks}>
            <Accordion activeKey={menuContext?.menuState.activeKey}>
              <Card.Body>{children}</Card.Body>
            </Accordion>
          </div>
        </Scrollbars>
      </Card>
    </div>
  );
}

export default Menu;
