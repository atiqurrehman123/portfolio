import React, { Component } from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import '../App.css';
import 'react-typist/dist/Typist.css';

export default class Header extends Component {
  render() {
    const { resumeData } = this.props;
    return (
      <>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="row banner">
            <div
              className="day"
            >
              <main className="App-main">
                <h1 className="intro">
                  Hi, I&apos;m&nbsp;{resumeData.name}
                </h1>
                <div className="tagline">
                  <TypistLoop>
                    {resumeData.roles.map((text) => (
                      <Typist cursor={{ blink: true }} key={text}>
                        {text}
                        <Typist.Backspace count={text.length + 1} delay={1000} />
                      </Typist>
                    ))}
                  </TypistLoop>
                </div>
                <div className="icons-social">
                  {resumeData.socialLinks && resumeData.socialLinks.map((socialLink) => (
                    <a
                      key={socialLink.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${socialLink.url}`}
                    >
                      <i className={socialLink.className} />
                    </a>
                  ))}
                </div>
              </main>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>

        </header>
      </>
    );
  }
}
