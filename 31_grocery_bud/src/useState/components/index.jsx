export { default as List } from "./List";
export { default as Form } from "./Form";
export { default as Alert } from "./Alert";
export { default as Clear } from "./Clear";
// Export other components here

export const animations = {
  initial: { scale: 0, opacity: 0, x: -100 },
  animate: { scale: 1, opacity: 1, x: 0 },
  exit: { scale: 0, opacity: 0 },
  exit: { scale: 1, opacity: 1, x: 800 },
  transition: { type: "spring", stiffness: 900, damping: 40 },
};
