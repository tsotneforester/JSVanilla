import { BrowserRouter as Router, Route, NavLink, Outlet } from "react-router-dom";

function Button({ category, handler, status }) {
  return (
    <>
      <h1>Our Menu</h1>
      <nav>
        {category.map((item, index) => {
          return (
            <NavLink to={item} key={index} className={status === item ? "btn active" : "btn "} onClick={() => handler(item)}>
              {item}
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
    </>
  );
}

export default Button;
