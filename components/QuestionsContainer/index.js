import styles from "./QuestionsContainer.module.scss";

const QuestionsContainer = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default QuestionsContainer;
