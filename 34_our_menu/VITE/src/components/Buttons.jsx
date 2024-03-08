function Buttons({ data, activeCategory, setter }) {
  return (
    <>
      <nav>
        {data.map((e, i) => {
          return (
            <button key={i} className={`btn ${activeCategory == e && "active"}`} onClick={() => setter(e)}>
              {e}
            </button>
          );
        })}
      </nav>
    </>
  );
}

export default Buttons;
