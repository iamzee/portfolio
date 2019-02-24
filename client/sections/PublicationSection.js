import React from 'react';

const PublicationSection = () => (
  <div className="publication-section" id="publication-section">
    <h2 className="publication-section__title">Publications</h2>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="card">
            <div className="card__side card__side--front card__side--front-1" />
            <div className="card__side card__side--back col-schema--back">
              <p className="card__text">
                A simple and efficient key dependent S-Box design
                using Fisher Yates shuffle technique
              </p>
              <a href="#" className="btn">Buy Now</a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card__side card__side--front card__side--front-2" />
            <div className="card__side card__side--back col-schema--back">
              <p className="card__text">
                Enhancement of Fuzzy Rank Aggregation Tachnique
              </p>
              <a href="#" className="btn">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PublicationSection;
