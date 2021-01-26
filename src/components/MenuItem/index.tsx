import React, { useEffect, useState } from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import Card from "react-bootstrap/Card";
import styles from "./MenuItem.module.scss";

export type MenuItemProps = {
  to: string;
  children?: React.ReactNode;
  img?: string;
  imgBlack?: string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
};

function MenuItem({
  to,
  children,
  img,
  imgBlack,
  className,
  onClick,
}: MenuItemProps): JSX.Element {
  const [isExact, setIsExact] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const currLocation = useLocation();

  useEffect(() => {
    const matched = matchPath(currLocation.pathname, {
      path: to,
      exact: true,
      strict: true,
    });

    if (matched?.isExact) {
      setIsExact(matched.isExact);
    } else {
      setIsExact(false);
    }
  }, [currLocation]);

  return (
    <div
      className={
        isHovered
          ? `${styles.main} ${styles.moveRight} ${className}`
          : `${styles.main} ${className}`
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Link to={to}>
        <Card
          className={isExact ? `${styles.card} ${styles.active}` : styles.card}
        >
          <Card.Body className={styles["card-body"]}>
            {img && (isExact || isHovered) && (
              <img src={img} className={styles.img} />
            )}
            {imgBlack && !isExact && !isHovered && (
              <img src={imgBlack} className={styles.img} />
            )}
            {children}
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default MenuItem;
