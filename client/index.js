import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
// import 'slick-carousel/slick/slick.scss';
// import 'slick-carousel/slick/slick-theme.scss';
import Navigation from './components/Navigation';
import IntroSection from './sections/IntroSection';
import ProfileSection from './sections/ProfileSection';
import AcademicSection from './sections/AcademicSection';
import CoursesSection from './sections/CoursesSection';
import PublicationSection from './sections/PublicationSection';
import ContactSection from './sections/ContactSection';

const App = () => (
  <div>
    <Navigation />
    <IntroSection />
    <ProfileSection />
    <AcademicSection />
    <CoursesSection />
    <PublicationSection />
    <ContactSection />
  </div>
);

ReactDOM.render (<App />, document.getElementById ('root'));
