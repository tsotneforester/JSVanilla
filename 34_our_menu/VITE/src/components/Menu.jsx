function Menu({ data }) {
  return (
    <div className="dishes">
      {data.map((e) => {
        return (
          <article key={e.id}>
            <img src={e.img} alt={e.title} />
            <section className="heading">
              <h1 title={e.title}>{e.title}</h1>
              <span className="price">$ {e.price}</span>
            </section>
            <section className="desc">{e.desc}</section>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
