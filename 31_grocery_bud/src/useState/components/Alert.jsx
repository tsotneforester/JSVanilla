import { useEffect } from "react";

function Alert({ alert, data, alertSetter }) {
  useEffect(() => {
    setTimeout(() => {
      alertSetter({ show: false, msg: "Removed", type: "" });
    }, 3000);
  }, [data]);

  return (
    <>
      <div className={"comment " + alert.type}>{alert.msg}</div>
    </>
  );
}
export default Alert;
