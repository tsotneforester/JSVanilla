function Button({ category, handler, status }) {
  return category.map((item, index) => {
    return (
      <button key={index} className={status === item ? "btn active" : "btn "} onClick={() => handler(item)}>
        {item}
      </button>
    );
  });
}

export default Button;
