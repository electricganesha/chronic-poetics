import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import styles from "./Transition.module.scss";
import Spinner from "../../components/Spinner";

const Transition = ({ isRouteChanging, children }) => {
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
          style={{ height: "100%" }}
        >
          {isRouteChanging ? (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Spinner />
            </div>
          ) : (
            <>{children}</>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
