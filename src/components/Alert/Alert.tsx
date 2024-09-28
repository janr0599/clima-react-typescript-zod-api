import styles from "./Alert.module.css";

type AlertProps = {
  alert: string;
};

function Alert({ alert }: AlertProps) {
  return (
    <div className={styles.alert}>
      <p>{alert}</p>
    </div>
  );
}

export default Alert;
