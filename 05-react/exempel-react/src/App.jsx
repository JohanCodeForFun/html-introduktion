import React from "react";

function Card({ tag, title, price, desc, cta }) {
  return (
    <article className="card">
      {tag && <span className="tag">{tag}</span>}
      <h2 className="title">{title}</h2>
      <p className="price">{price}</p>
      <p className="desc">{desc}</p>
      <button className="btn">{cta}</button>
    </article>
  );
}

const data = [
  { tag: "Populär",    title: "Starter",    price: "99 kr/mån",  desc: "Perfekt för att komma igång.",            cta: "Välj Starter" },
  { tag: "Bäst värde", title: "Pro",        price: "199 kr/mån", desc: "Mer kraft och flexibilitet.",             cta: "Välj Pro" },
  { tag: "Avancerat",  title: "Enterprise", price: "Kontakta oss", desc: "Skräddarsydda lösningar för team.",     cta: "Kontakta sälj" },
];

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <h1>Våra paket</h1>
        <p>Välj det paket som passar dig bäst.</p>
      </header>

      <section className="grid">
        {data.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </section>
    </div>
  );
}
