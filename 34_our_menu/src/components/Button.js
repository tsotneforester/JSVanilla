function Button({ category, handler }) {
  return category.map((item, index) => {
    return (
      <button key={index} className="btn" onClick={() => handler(item)}>
        {item}
      </button>
    );
  });
}

export default Button;
