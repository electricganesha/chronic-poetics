import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import styles from "./Transition.module.scss";

const Transition = ({ children }) => {
  const { asPath } = useRouter();

  const fade = {
    name: "Fade",
    variants: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
      exit: {
        opacity: 0,
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
          variants={fade.variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={fade.transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
