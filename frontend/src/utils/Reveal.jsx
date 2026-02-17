import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "100%" }) => {
  const ref = useRef(null);
  // 'once: true' means it animates once and stays visible. 
  // 'margin: "-75px"' means the animation starts when the element is 75px up the screen.
  const isInView = useInView(ref, { once: true, margin: "-75px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, filter: "blur(10px)" }, // Start: Invisible, low, and blurry
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },  // End: Visible, in place, sharp
        }}
        initial="hidden"
        animate={mainControls}
        // This 'duration: 1.2' is what makes it feel "Slow" and luxurious
        transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;