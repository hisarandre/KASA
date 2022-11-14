import BannerBg from "../assets/banner_background.png";
import Thumbnail from "../components/Thumbnail";

function Home({ data, loading, error }) {
  const bannerMessage = `Chez vous, \n partout et ailleurs`;

  return (
    <div className="main-container">
      <section className="banner banner--home">
        <img src={BannerBg} alt="Bannière" />
        <h1> {bannerMessage} </h1>
      </section>

      <section className="gallery">
        {loading && <p>Recherche de logements...</p>}
        {error && <p>Erreur de chargement...</p>}
        {!error && data && <Thumbnail data={data} />}
      </section>
    </div>
  );
}

export default Home;
