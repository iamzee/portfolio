import React from 'react';
import Slider from 'react-slick';

const AcademicSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="academic-section" className="academic-section">
      <h2 className="academic-section__title">Qualifications</h2>
      <Slider {...settings}>
        <div className="grade-card">
          <div className="grade-card__header col-schema--back">
            <h2 className="grade-card__title">10th</h2>
            <p className="grade-card__year">1998</p>
          </div>
          <div className="grade-card__footer">
            <p className="grade-card__subtitle">I.C.S.E</p>
            <p className="grade-card__subtitle">1st division</p>
            <p className="grade-card__subtitle">76.40%</p>
          </div>
        </div>
        <div className="grade-card">
          <div className="grade-card__header col-schema--back">
            <h2 className="grade-card__title">12th</h2>
            <p className="grade-card__year">2000</p>
          </div>
          <div className="grade-card__footer">
            <p className="grade-card__subtitle">C.B.S.E</p>
            <p className="grade-card__subtitle">1st division</p>
            <p className="grade-card__subtitle">83.40%</p>
          </div>
        </div>
        <div className="grade-card">
          <div className="grade-card__header col-schema--back">
            <h2 className="grade-card__title">B.Tech</h2>
            <p className="grade-card__year">2005</p>
          </div>
          <div className="grade-card__footer">
            <p className="grade-card__subtitle">U.P.T.U</p>
            <p className="grade-card__subtitle">1st division</p>
            <p className="grade-card__subtitle">67.24%</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AcademicSection;
