import Search from "../Search";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="background-image"></div>
      <div className="gradient">
        <div className="container">
          <h1>Les offres DB Conseils</h1>
          <Search />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
