import React from "react";
import Image from "react-bootstrap/Image";
import styles from "./IconButton.module.scss";

export enum IconButtonSizeEnum {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}

export enum IconButtonTypeEnum {
  roundedCircle,
  rounded,
  thumbnail,
}

interface IIconButton {
  img: string;
  size?: IconButtonSizeEnum;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  type?: IconButtonTypeEnum;
}

function IconButton({
  img,
  onClick,
  size = IconButtonSizeEnum.Large,
  className,
  type = IconButtonTypeEnum.roundedCircle,
}: IIconButton): JSX.Element {
  return (
    <div
      className={`${styles.main} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      <Image
        src={img}
        roundedCircle={type === IconButtonTypeEnum.roundedCircle}
        rounded={type === IconButtonTypeEnum.rounded}
        thumbnail={type === IconButtonTypeEnum.thumbnail}
        className={styles.img}
      />
    </div>
  );
}

export default IconButton;
