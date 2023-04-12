function Star({ rating }) {
  return (
    <>
      {[...new Array(rating)].map((e, i) => {
        return <img key={i} src="./star.svg" alt="" />;
      })}
    </>
  );
}

export default Star;
