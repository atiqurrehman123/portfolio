import React, { Component } from 'react';
import Profilepic from "./profilepic.jpeg"
export default class About extends Component {
  render() {
    const { name } = this.props.resumeData;
    const profilepic = Profilepic;
    const { aboutme } = this.props.resumeData;
    const { city } = this.props.resumeData.address;
    const { state } = this.props.resumeData.address;
    const { zip } = this.props.resumeData.address;
    const { phone } = this.props.resumeData;
    const { email } = this.props.resumeData;
    const resumeDownload = this.props.resumeData.resumedownload;
    console.log("profilepic",profilepic)

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt={`${name}'s Profile Pic`} />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{aboutme}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {city}
                    <br />
                    {state}
                    ,
                    {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span><a href="mailto:tbakerx@gmail.com">{email}</a></span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}
