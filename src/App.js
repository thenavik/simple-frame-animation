import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          borderRadius: "2rem",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
        }}
      >
        <motion.h2 layout="position">Frame Animation</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              cursor: "default",
            }}
            className="expand"
          >
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </p>
            <p>Sections 1.10.32 and 1.10.33 from</p>
            <button>Read More</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
