import retro from "/retro.jpg";
import laptop from "/laptop.jpg";
import gaming from "/gaming.jpg";

export default function Footer() {
  const itensFooter = [
    {
      thumb: retro,
      idList: "01",
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
    },
    {
      thumb: laptop,
      idList: "02",
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
    },
    {
      thumb: gaming,
      idList: "03",
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <>
      <footer>
        {itensFooter.map((e) => (
          <div className="itens-footer">
            <img src={e.thumb} alt="" />
            <div className="itens-list">
                <h1>{e.idList}</h1>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
            </div>
          </div>
        ))}
      </footer>
    </>
  );
}
