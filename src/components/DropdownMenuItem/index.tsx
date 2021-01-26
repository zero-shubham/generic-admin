import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./DropdownMenuItem.module.scss";

export type DropdownMenuItemProps = {
  children: string;
  img?: string;
  imgBlack?: string;
  className?: string;
  to?: string;
  onClick?: (event: React.MouseEvent) => void;
};

function DropdownMenuItem({
  children,
  img,
  className,
  imgBlack,
  to,
  onClick,
}: DropdownMenuItemProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();
  return (
    <div
      className={`${styles.main} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
        if (to) {
          history.replace(to);
        }
      }}
    >
      {img && isHovered && <img className={styles.img} src={img} />}
      {imgBlack && !isHovered && <img className={styles.img} src={imgBlack} />}
      {children}
    </div>
  );
}

export default DropdownMenuItem;
