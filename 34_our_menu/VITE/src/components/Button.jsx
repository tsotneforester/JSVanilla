function Button({ category, handler, status }) {
  return category.map((item, index) => {
    return (
      <div key={index} className={status === item ? "btn active" : "btn "} onClick={() => handler(item)}>
        {item}
      </div>
    );
  });
}

export default Button;
