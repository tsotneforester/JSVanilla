import { useEffect } from "react";

function Alert({ alert, data, removeAlert }) {
  useEffect(() => {
    setTimeout(() => {
      removeAlert();
    }, 3000);
  }, [data]);

  return (
    <>
      <div className={"comment " + alert.type}>{alert.msg}</div>
    </>
  );
}
export default Alert;
