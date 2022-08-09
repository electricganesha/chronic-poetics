import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import styles from "./Transition.module.scss";

const Transition = ({ children, xValue }) => {
  const { asPath } = useRouter();

  const slideRight = {
    name: "Slide Right",
    variants: {
      initial: {
        opacity: 0,
        x: -xValue,
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: xValue,
      },
    },
    transition: {
      duration: 0.3,
      type: "tween",
    },
  };

  return (
    <div className={styles.effect}>
      <AnimatePresence exitBeforeEnter={true}>
        <motion.div
          key={asPath}
          variants={slideRight.variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={slideRight.transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
