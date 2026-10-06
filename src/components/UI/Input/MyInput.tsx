import type React from "react";
import styles from "./styles.module.css";

type MyInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const MyInput = (props: MyInputProps) => {
  return <input className={styles.MyInput} {...props}></input>;
};

export default MyInput;
