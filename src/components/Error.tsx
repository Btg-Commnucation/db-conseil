import { Link } from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

const Error = () => {
  return (
    <>
      <Header />
      <main className="error">
        <div
          className="container-narrow"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBlock: "5rem",
          }}
        >
          <img src="/top-logo.svg" alt="DB Conseils" />
          <h1 style={{ marginBlock: "3rem" }}>Erreur 404</h1>
          <strong style={{ marginBottom: "2rem" }}>
            Oups, il semble y avoir eut un problème
          </strong>
          <p>
            <Link to="/">Revenir à l'accueil</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Error;
