import "./Menu.css";

const Menu = ({ items }) => {
  return (
    <section className="section-center">
      {items.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <img img={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
