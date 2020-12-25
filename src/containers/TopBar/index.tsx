import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./TopBar.module.scss";

type TopBarProps = {
  children?: React.ReactNode;
};
function TopBar({ children }: TopBarProps): JSX.Element {
  return (
    <div className={styles.main}>
      <Card>
        <Card.Body>{children}</Card.Body>
      </Card>
    </div>
  );
}

export default TopBar;
