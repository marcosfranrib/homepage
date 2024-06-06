export default function MainBody() {
  const newsInfo = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      text: " Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: 2,
      title: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <>
      <main>
        <section className="article-area">
          <picture>
            <source srcset="/bannerMobile.jpg" media="(max-width:800px)" />
            <img src="/bannerDesk.jpg" alt="" />
          </picture>
          <div className="container-title-readmore">
            <h1 className="h1-readmore">O Brilhante Futuro da <br/> Web 3.0?</h1>
            <div className="div-readmore">
              <p className="p-readmore">
                Acabamos de mergulhar na próxima evolução da web que vai colocar
                o poder das plataformas de volta nas mãos das pessoas. Mas será
                que vai realmente cumprir essa promessa?
              </p>
              <button className="button-read-more">SAIBA MAIS</button>
            </div>
          </div>
        </section>
        <section className="news-section">
          <div className="container-news">
            <h1>New</h1>
            {newsInfo.map((e) => (
              <div className="news-info">
                <h2>{e.title}</h2>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
