import './css/App.css';
import './css/bestsellingproduct.css';
import './css/televisions.css';
import totalSold from "./helpers/helper_brought_tvs.js";
import totalInventory from "./helpers/helper_inventory_tv.js";
import totalFutureSell from "./helpers/helper_futuresold_tv.js";
import televisions from "./components/televisions.jsx";
import bestsellingproduct from "./components/bestsellingproduct.jsx";
function App() {
  return (
    <>
        <header className="mainHeader">
            <h1>Tech IT Easy Dashboard</h1>
        </header>
        <article className="mainArticle">
            <h2>Verkoopoverzicht</h2>
            <section className="mainSection">
                <div className="contentBox leftbox">
                    <p>Aantal verkochte producten</p>
                    {totalSold}
                </div>
                <div className="contentBox middlebox">
                    <p>Aantal ingekochte producten</p>
                    {totalInventory}
                </div>
                <div className="contentBox rightbox">
                    <p>Aantal te verkopen producten</p>
                    {totalFutureSell}
                </div>
            </section>
        </article>
        <article className="mainArticle">
            <h2>De best verkochte televisie</h2>
                {bestsellingproduct()}
        </article>
        <article className="mainArticle">
            <h2>Alle TV's</h2>
            <div className="btnFilter">
            <button className="button">Meest verkocht</button>
            <button className="button">Goedkoopste</button>
            <button className="button">Meest geschikt voor sport</button>
            </div>
            {televisions()}
        </article>
    </>

  );
}

export default App
