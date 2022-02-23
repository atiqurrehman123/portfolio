import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    const { resumeData } = this.props;
    return (
      <section id="resume">

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => (
                <div key={item.Website} className="row item">
                  <div className="twelve columns">
                    <h3><a href={item.Website}>{item.CompanyName}</a></h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>
                      <em className="date">
                        {item.MonthOfJoining}
                        ,
                        {item.YearOfJoining}
                        {' '}
                        -
                        {item.WorkingCurrently ? 'Present' : `${item.MonthOfLeaving}-${item.YearOfLeaving}`}
                      </em>
                    </p>
                    <p>
                      {item.Achievements}
                    </p>
                  </div>

                </div>

              ))
            }
          </div>
        </div>

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => (
                <div key={item.UniversityName} className="row item">
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>
                      {' '}
                      <em className="date">
                        {item.MonthOfPassing}
                        {' '}
                        {item.YearOfPassing}
                      </em>
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>
              {resumeData.skillsDescription}
            </p>

            <div className="row">

              {
                resumeData.skills && resumeData.skills.map((item) => (
                  <div key={item.skillName} className="two column software-skill-inline align-center">
                    <div>
                      <img src={item.imgurl} className="skillimage" alt="skillimage"/>
                      <h6>{item.skillName}</h6>
                    </div>
                  </div>
                ))
              }

            </div>

          </div>

        </div>

      </section>
    );
  }
}
