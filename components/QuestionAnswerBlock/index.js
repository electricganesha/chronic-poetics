import styles from "./QuestionAnswerBlock.module.scss";

const QuestionAnswerBlock = ({ question, answer }) => {
  return (
    <div className={styles.block}>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default QuestionAnswerBlock;
