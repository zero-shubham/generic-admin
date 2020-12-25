import React, { useReducer } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { Scrollbars } from "react-custom-scrollbars";
import { MenuContext, MenuReducer } from "contexts/MenuContext";
import styles from "./Menu.module.scss";

type MenuProps = {
  children?: React.ReactNode;
};
function Menu({ children }: MenuProps): JSX.Element {
  const [state, dispatch] = useReducer(MenuReducer, {
    activeKey: "",
  });
  return (
    <div className={styles.main}>
      <Card className={styles.card}>
        <Card.Body>LOGO</Card.Body>
        <Scrollbars>
          <div className={styles.menuLinks}>
            <MenuContext.Provider
              value={{ menuState: state, dispatchMenu: dispatch }}
            >
              <Accordion activeKey={state.activeKey}>
                <Card.Body>{children}</Card.Body>
              </Accordion>
            </MenuContext.Provider>
          </div>
        </Scrollbars>
      </Card>
    </div>
  );
}

export default Menu;
