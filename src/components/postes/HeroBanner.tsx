import { useState } from "react";
import Search from "../Search";

const HeroBanner = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <aside className="hero-banner">
      <div className="background-image"></div>
      <div className="gradient">
        <div className="container">
          <h1>Et si on envisageait le recrutement autrement</h1>
          {showSearch ? (
            <Search />
          ) : (
            <>
              <div className="job-container changeBottom">
                <h2>Je trouve mon poste</h2>
              </div>
              <div
                className="plus"
                onClick={() => {
                  setShowSearch(true);
                }}
              >
                <strong>+</strong>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default HeroBanner;
