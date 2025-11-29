import { motion } from "framer-motion";

export default function AARNChainring() {
  return (
    <motion.img
      src="/aarn-ring.png"
      alt="AARN 49T Chainring"
      className="
        fixed 
        top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        w-[1000px]      /* adjust size */
        opacity-20 
        pointer-events-none
      "
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 20,
      }}
    />
  );
}
