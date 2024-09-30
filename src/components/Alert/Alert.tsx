import { ReactNode } from "react";
import styles from "./Alert.module.css";

type AlertProps = {
  children: ReactNode;
};

function Alert({ children }: AlertProps) {
  return (
    <div className={styles.alert}>
      <p>{children}</p>
    </div>
  );
}

export default Alert;
