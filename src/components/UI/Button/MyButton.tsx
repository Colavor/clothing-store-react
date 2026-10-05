import type React from "react";
import styles from "./styles.module.css";

type MyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const MyButton = ({ children, ...props }: MyButtonProps) => {
  return (
    <button className={styles.myButton} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
