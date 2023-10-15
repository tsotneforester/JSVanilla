function Menu({ data }) {
  return data.map((e) => {
    return (
      <article key={e.id}>
        <img src={e.img} alt={e.title} />
        <section className="heading">
          <h2>{e.title}</h2>
          <span className="price">$ {e.price}</span>
        </section>
        <section className="desc">{e.desc}</section>
      </article>
    );
  });
}

export default Menu;
