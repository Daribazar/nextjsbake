import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Matcha Cookie Brownie - Бүтээгдэхүүний дэлгэрэнгүй мэдээллийн хуудас"
    />
    <title>Бүтээгдэхүүний дэлгэрэнгүй мэдээллийн хуудас</title>
    <link rel="stylesheet" href="styles.css" /> */}
    <div className="container">
      <header>
        <h1 className="product-title">Matcha Cookie Brownie</h1>
      </header>
      <section className="product-overview">
        <img
          className="product-image"
          src="https://media-cdn.tripadvisor.com/media/photo-s/19/87/eb/7f/the-cakery.jpg"
          alt="Bakery"
        />
        <div className="details">
          <h1>Үнэ: 50'000₮</h1>
          <h2>Бүтээгдэхүүний дэлгэрэнгүй</h2>
          <ul>
            <li>
              <strong>Орц:</strong> Flour...
            </li>
            <li>
              <strong>Calories:</strong> 500 kcal
            </li>
            <li>
              <strong>Хадгалах хугацаа:</strong> 72 цаг
            </li>
          </ul>
          <a href="zahialga.html" className="btn">
            Захиалах
          </a>
        </div>
      </section>
      <section className="description">
        <h2>Бүтээгдэхүүн</h2>
        <p>Хүргэлт үнэгүй</p>
        <p>
          Matcha brownie with Oreo cookies. Enjoy the refreshing taste of matcha
          combined with the delightful flavor of chocolate in this Matcha brownie.
        </p>
        <p>Best paired with hot coffee.</p>
        <p>
          <em>Experience the authentic taste of real brownies.</em>
        </p>
      </section>
      <section className="gallery">
        <h2>Gallery</h2>
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/19/87/eb/7f/the-cakery.jpg"
          alt="Gallery Image 1"
        />
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/19/87/eb/7f/the-cakery.jpg"
          alt="Gallery Image 2"
        />
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/19/87/eb/7f/the-cakery.jpg"
          alt="Gallery Image 3"
        />
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/19/87/eb/7f/the-cakery.jpg"
          alt="Gallery Image 4"
        />
      </section>
      <footer className="site-footer">
        <div className="footer-info">
          <p>
            Монгол Улс, Улаанбаатар хот, ХУД, 18-р хороо, Их Монгол гудамж, Хүннү
            2222 хороолол
          </p>
          <p>info@tlj.mn</p>
          <p>
            <a href="tel:+97675757510">(976) 7575-7510</a>
          </p>
        </div>
        <div className="footer-copyright">
          <p>©2022 - АРТИЗАН ХХК. БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН</p>
          <p>Вэб сайтыг: Грийн софт ХХК</p>
        </div>
      </footer>
    </div>
  </>
  
  );
}
