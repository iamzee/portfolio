import React from 'react';

const CoursesSection = () => (
  <div className="courses-section" id="courses-section">
    <h2 className="courses-section__title col-schema">Courses Taught</h2>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <ul className="course-list">
            <li className="course-item">Computer Organisation</li>
            <li className="course-item">Analysis and Design of Algorithms</li>
            <li className="course-item">Data Structures</li>
            <li className="course-item">Advanced Computer Architecture</li>
            <li className="course-item">Object Oriented Technology</li>
            <li className="course-item">Electronic Devices and Applications</li>
            <li className="course-item">Fundamentals of Computing</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="course-list">
            <li className="course-item">Data Mining Lab</li>
            <li className="course-item">Linux Utitlity Lab</li>
            <li className="course-item">Advanced Data Structure Lab</li>
            <li className="course-item">DBMS Lab</li>
            <li className="course-item">Computer Graphics Lab</li>
            <li className="course-item">C Programming Lab</li>
            <li className="course-item">Analog Electronic Devices Lab</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default CoursesSection;
