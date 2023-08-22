import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animations } from "./";

function List({ data, editTask, removeTask }) {
  return (
    <AnimatePresence mode="sync">
      {data.map((e) => (
        <motion.article {...animations} key={e.id}>
          <p>{e.task}</p>
          <div className="btn-container">
            <img
              onClick={() => {
                editTask(e.id);
              }}
              src="./src/assets/edit.png"
              alt="edit"
            />
            <img
              onClick={() => {
                removeTask(e.id);
              }}
              src="./src/assets/trash.png"
              alt="edit"
            />
          </div>
        </motion.article>
      ))}
    </AnimatePresence>
  );
}

export default List;
