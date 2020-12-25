import React, { useEffect, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionToggle } from "react-bootstrap";
import { MenuItemProps } from "components/MenuItem";
import { useLocation, matchPath } from "react-router-dom";
import styles from "./SubMenu.module.scss";
import chevronSvg from "assets/images/chevron-right.svg";
import { MenuContext } from "contexts/MenuContext";

type SubMenuProps = {
  header: string;
  path: string;
  children:
    | React.ReactElement<MenuItemProps>
    | Array<React.ReactElement<MenuItemProps>>;
};

function SubMenu({ header, children, path }: SubMenuProps): JSX.Element {
  const menuContext = useContext(MenuContext);

  const decoratedClick = useAccordionToggle(path, () => {
    if (menuContext?.menuState.activeKey !== path) {
      menuContext?.dispatchMenu({
        type: "SET_ACTIVE_KEY",
        value: path,
      });
    } else {
      menuContext?.dispatchMenu({
        type: "SET_ACTIVE_KEY",
        value: "",
      });
    }
  });

  const currLocation = useLocation();

  useEffect(() => {
    const matched = matchPath(currLocation.pathname, {
      path: path,
      strict: true,
    });

    if (matched) {
      menuContext?.dispatchMenu({
        type: "SET_ACTIVE_KEY",
        value: path,
      });
    } else {
      menuContext?.dispatchMenu({
        type: "SET_ACTIVE_KEY",
        value: "",
      });
    }
  }, [currLocation]);

  return (
    <div className={styles.main}>
      <Card className={styles.card}>
        <Card.Header className={styles.cardHeader} onClick={decoratedClick}>
          {header}
        </Card.Header>
        <Accordion.Collapse eventKey={path}>
          <Card.Body className={styles.cardBody}>{children}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <img
        src={chevronSvg}
        className={styles.chevron}
        onClick={decoratedClick}
      />
    </div>
  );
}

export default SubMenu;
