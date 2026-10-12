import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import './styles.css';

const img = (id: string, width?: number, height?: number) => `https://framerusercontent.com/images/${id}${width ? `?width=${width}${height ? `&height=${height}` : ''}` : ''}`;

const products = [
  ['Sourdough', '$2,000', '$1,800', 'tVR6PivVDZRRd8TjUiV4TFUAdQ.png'],
  ['Custard Puff', '$1,800', '$1,600', '2rI7n09s1bVQy5YoU7W5SU4q8.png'],
  ['Round Bread', '$2,400', '$2,000', 'tA5OZOCSmerG6ZfaJ6k7mEelGk.png'],
  ['Honey Cake', '$2,600', '$2,400', 'qQTfGVm6y8tGjPh1OYkB1TpnKw.png'],
  ['Sweet Tart', '$2,800', '$2,600', 'hX6f6s20NJwPfqtkICzk7XWIeEs.png'],
  ['Choco Donut', '$1,200', '$1,000', 'QWCUkIVuO9AslznK4TknvgHens.png'],
  ['Sugar Cookie', '$3,000', '$2,800', 'Py68SQhhEYaUPi4Oq30dlddlfSc.png'],
  ['Cinnamon Roll', '$2,000', '$1,800', 'EzJqR2YgvU2ISPHOM5Cozyrz4.png'],
  ['Caramel Crunch', '$1,000', '$800', '8uEV5gmqELemHpydjgBvrHi4vk.png'],
];

const testimonials = [
  ['“I visited this bakery last week and fell in love with their croissants. Crispy outside, soft inside – just perfect!”', 'Arlene McCoy', 'Nursing Assistant'],
  ['“We ordered cakes for our party, and everyone was impressed. Beautifully crafted and unbelievably tasty.”', 'Kristin Watson', 'President of Sales'],
  ['“Every visit to this bakery feels truly special. From decadent chocolates to soft, buttery rolls, quality shines.”', 'Cameron Williamson', 'Marketing Coordinator'],
];

const services = ['Bakery Catering', 'Pastry Creations', 'Premium Bakes', 'Dessert Craft', 'Signature Bakes', 'Artisan Baking'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <div className="topline">Get 500 on your first order from the store <span>↗</span></div>
      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Luna Rossa home">
          <img src={img('570nw5MpwSdtacyjgSA2O1gti9k.svg', 137, 24)} alt="Luna Rossa" />
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a href="#process" onClick={closeMenu}>All Page <ChevronDown size={13} /></a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Contact us <ArrowRight size={15} /></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow">Endless</div>
            <h1>Baking<br />Happiness<br />For Every<br />Heart</h1>
            <div className="hero-note">Taste the joy!</div>
            <a className="pill-button" href="#gallery">Contact us <ArrowRight size={16} /></a>
          </div>
          <div className="hero-art">
            <div className="sun-shape sun-one" /><div className="sun-shape sun-two" />
            <img src={img('zNlHr0KVsEaqpRrSZfrvvy9WSjQ.png', 5557, 3632)} alt="Fresh artisan bread and baking ingredients" />
            <div className="wheat-label">100%<br />wheat</div>
          </div>
        </section>

        <section id="about" className="about section-pad">
          <div className="section-kicker">The story</div>
          <div className="about-heading"><h2>The Heart Behind Our Bakery</h2><span className="scribble">✦</span></div>
          <div className="about-grid">
            <p className="lead-copy">Our bakery is built on a love for honest ingredients, traditional techniques, and the joy of sharing freshly baked food every loaf, cake, and pastry.</p>
            <div className="about-image"><img src={img('41BZhCtBRJAsdgNWej7l4uMXCc.png', 1100, 1100)} alt="Baker preparing fresh bread" /></div>
            <p className="about-side">Our bakery was created to share fresh baked goodness, meaningful moments, and happiness with everyone.</p>
          </div>
          <div className="stats">
            {[['0K+', 'Happy Customers', 'Baked with care loved by every customer'], ['0%', 'Customer Satisfaction', 'Fresh flavors that customers truly love'], ['0+', 'Five-Star Reviews', 'Customers rate our bakery five stars']].map(([value, label, copy]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span><p>{copy}</p></div>)}
          </div>
        </section>

        <section id="gallery" className="products section-pad">
          <div className="section-kicker">Our menu</div>
          <h2>Our Signature Products<br /><em>Crafted With Passion</em></h2>
          <div className="product-grid">{products.map(([name, oldPrice, price, asset]) => <article className="product-card" key={name}><div className="product-image"><img src={img(asset, 512, 512)} alt={name} /></div><div className="product-meta"><h3>{name}</h3><div><del>{oldPrice}</del><b>{price}</b></div></div><a href="#contact" className="detail-link">View details <ArrowRight size={15} /></a></article>)}</div>
        </section>

        <section id="process" className="process section-pad">
          <div className="process-head"><div><div className="section-kicker">Behind the oven</div><h2>Our Process Behind<br />Every Perfect Bake</h2></div><p>From the first handful of grain to the final golden crust, every step is made slowly, thoughtfully, and with love.</p></div>
          <div className="steps">{[['01', 'Fresh Bakes', 'Baked Daily Fresh'], ['02', 'Artisan Bread', 'Pure Grain Goodness'], ['03', 'Pure Baking', 'Baked With Love'], ['04', 'Baked Bliss', 'Fresh Sweet Joy']].map(([num, title, copy]) => <div className="step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
        </section>

        <section className="services section-pad">
          <div className="section-kicker">What we do</div><h2>Our Bakery Services</h2>
          <div className="service-list">{services.map((service, i) => <a href="#contact" key={service}><span>0{i + 1}</span>{service}<ArrowRight size={17} /></a>)}</div>
        </section>

        <section className="quote-band"><div className="quote-art"><img src={img('qopEVlwGa1uVV7EynpV8dAUZol4.png', 900, 960)} alt="Fresh pastries" /></div><div className="quote-copy"><div className="section-kicker">Sweet moments start here</div><h2>Delicious Fresh Treats<br /><em>Waiting To Be Enjoyed</em></h2><p>Transforming dough into sweet joy every day.</p><a className="pill-button light" href="#gallery">View items <ArrowRight size={16} /></a></div></section>

        <section className="testimonials section-pad"><div className="section-kicker">From our guests</div><h2>Kind Words From<br /><em>Happy Hearts</em></h2><div className="testimonial-grid">{testimonials.map(([quote, name, role]) => <article className="testimonial" key={name}><div className="stars">★★★★★</div><p>{quote}</p><div className="person"><span>{name.charAt(0)}</span><div><b>{name}</b><small>{role}</small></div></div></article>)}</div></section>

        <section className="stories section-pad"><div className="stories-head"><div><div className="section-kicker">From the kitchen</div><h2>Fresh Stories From<br />Our Bakery Kitchen</h2></div><a className="text-link" href="#contact">Explore more <ArrowRight size={15} /></a></div><div className="story-grid"><article className="story-card"><img src={img('b2iNSZf3gxwMUqXYusZR4DaGL80.png', 1000, 700)} alt="Fresh pastry on a table" /><div><span>Posted on February 1, 2026</span><h3>How to Always Choose the Freshest Pastries</h3><p>Explore our bakery’s fresh bakes, easy recipes, and fun stories.</p></div></article><article className="story-card"><img src={img('uin4k2dtPA6KkbS7FGHuXEMQ.png', 900, 700)} alt="Baking ingredients" /><div><span>Posted on February 10, 2026</span><h3>Sweet Recipes and Tips Straight From Our Oven</h3><p>Sweet recipes and tips straight from our oven, shared with love.</p></div></article></div></section>
      </main>

      <footer id="contact" className="footer section-pad"><div className="footer-top"><img src={img('570nw5MpwSdtacyjgSA2O1gti9k.svg', 137, 24)} alt="Luna Rossa" /><h2>Taste freshness in<br /><em>every single bite.</em></h2><a className="pill-button" href="mailto:hello@lunarossa.bakery">Let’s talk <ArrowRight size={16} /></a></div><div className="footer-bottom"><span>© 2026 Luna Rossa Bakery</span><div className="socials"><a href="#contact" aria-label="Instagram"><span>ig</span></a><a href="#contact" aria-label="Facebook"><span>f</span></a><a href="#contact" aria-label="Twitter"><span>t</span></a></div><span>Freshly baked with love</span></div></footer>
    </div>
  );
}

export default App;

createRoot(document.getElementById('root')!).render(<App />);
