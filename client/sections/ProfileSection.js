import React from 'react';

const ProfileSection = () => (
  <div className="profile-section" id="profile-section">
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h2 className="profile-section__title col-schema">Who am I?</h2>
          <p className="profile-section__text">
            Mohd   Zeeshan   Ansari   is   currently   Assistant   Professor   at   Department   of   Computer Engineering, Jamia Millia Islamia (A Central University), New Delhi.He received M.Tech in Computer  Science  and  Engineering  from  Delhi  TechnologicalUniversity,  New  Delhi  and B.Tech  in  Computer
          </p>
        </div>
        <div className="col-6">
          {/* <h2 className="profile-section__title col-schema">Information</h2>
          <div className="info-tab">
            <i className="info-tab__icon icon-basic-smartphone col-schema" />
            <span className="info-tab__text">+911126980281</span>
          </div>
          <div />

          <div className="info-tab">
            <i className="info-tab__icon icon-basic-mail col-schema" />
            <span className="info-tab__text">zeeshan.niec@gmail.com</span>
          </div>
          <div /> */}

          <div className="profile-photo-container">
            <div className="profile-photo" id="profile-photo-border" />
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default ProfileSection;
