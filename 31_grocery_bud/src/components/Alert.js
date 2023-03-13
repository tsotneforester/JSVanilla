import { useEffect } from "react";

function Alert({ msg, type, data, removeAlert }) {
  useEffect(() => {
    setTimeout(() => {
      removeAlert();
    }, 3000);
  }, [data]);

  return (
    <>
      <div className={"comment " + type}>{msg}</div>
    </>
  );
}
export default Alert;
