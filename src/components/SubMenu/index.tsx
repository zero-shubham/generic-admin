import React, { useEffect, useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionToggle } from "react-bootstrap";
import { MenuItemProps } from "components/MenuItem";
import { useLocation, matchPath } from "react-router-dom";
import styles from "./SubMenu.module.scss";
import chevronSvg from "assets/images/chevron-right.svg";
import { MenuContext } from "contexts/MenuContext";

export type SubMenuProps = {
  header: string;
  subpath: string;
  children:
    | React.ReactElement<MenuItemProps>
    | Array<React.ReactElement<MenuItemProps>>;
  img?: string;
  className?: string;
};

function SubMenu({
  header,
  children,
  subpath,
  img,
  className,
}: SubMenuProps): JSX.Element {
  const menuContext = useContext(MenuContext);

  const decoratedClick = useAccordionToggle(subpath, () => {
    menuContext?.dispatchMenu({
      type: "SET_ACTIVE_KEY",
      value: menuContext?.menuState.activeKey !== subpath ? subpath : "",
    });
  });

  const currLocation = useLocation();

  useEffect(() => {
    const matched = matchPath(currLocation.pathname, {
      path: subpath,
      strict: true,
    });

    menuContext?.dispatchMenu({
      type: "SET_ACTIVE_KEY",
      value: matched ? subpath : "",
    });
  }, [currLocation]);

  return (
    <div className={`${styles.main} ${className}`}>
      <Card className={styles.card}>
        <Card.Header className={styles.cardHeader} onClick={decoratedClick}>
          {img && <img src={img} className={styles.img} />}
          {header}
        </Card.Header>
        <Accordion.Collapse eventKey={subpath}>
          <Card.Body className={styles.cardBody}>{children}</Card.Body>
        </Accordion.Collapse>
      </Card>
      <img
        src={chevronSvg}
        className={
          menuContext?.menuState.activeKey !== subpath
            ? `${styles.chevron} ${styles.chevRotate}`
            : styles.chevron
        }
        onClick={decoratedClick}
      />
    </div>
  );
}

export default SubMenu;
