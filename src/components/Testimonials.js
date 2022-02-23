import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import ReactCountryFlag from 'react-country-flag';
import LetteredAvatar from 'lettered-avatar';
import StarRatings from 'react-star-ratings';

export default class Testimonials extends Component {
  render() {
    const { resumeData } = this.props;

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="header-col">
            <h1><span>Client Testimonials</span></h1>
          </div>
          <div className="row">
            <div>
              <Carousel
                // autoplay={true}
                pauseOnHover
                getControlsContainerStyles={(key) => {
                  switch (key) {
                    case 'CenterLeft':
                      return {
                        'margin-left': '-70px'
                      };
                    case 'CenterRight':
                      // will apply all other keys
                      return {
                        'margin-right': '-70px'
                      };
                    case 'BottomCenter':
                      return {
                        display: 'None'
                      };
                    default:
                      return {
                        display: 'None'
                      };
                  }
                }}

                defaultControlsConfig={{
                  pagingDotsStyle: {
                    fill: 'white'
                  }
                }}
              >
                {
                  resumeData.testimonials && resumeData.testimonials.map((item) => (
                    <div key={item.username} className="align-center">
                      <div>
                        <LetteredAvatar
                          name={item.username}
                          imgSrc={item.user_image_url}
                          options={{
                            tooltip: true
                          }}
                        />

                      </div>
                      <cite>{item.username}</cite>
                      <div>
                        <ReactCountryFlag
                          countryCode={item.reviewer_country_code}
                          svg
                          style={{
                            width: '2em',
                            height: '2em'
                          }}
                        />
                      </div>
                      <div>
                        <blockquote>
                          <p>
                            <i className="fa fa-quote-left super" />
                            {' '}
                            {item.comment}
                            {' '}
                            <i className="fa fa-quote-right super" />
                          </p>
                        </blockquote>
                      </div>
                      <div className="bottom">
                        <StarRatings
                          rating={item.value}
                          starRatedColor="gold"
                          numberOfStars={5}
                          starDimension="20px"
                          starSpacing="5px"
                          name="rating"
                        />
                      </div>
                    </div>
                  ))
                }
              </Carousel>
            </div>
            {' '}
            {/* div.flex-container ends */}
          </div>
          {' '}
          {/* row ends */}
        </div>
        {' '}
        {/* text-container ends */}
      </section>
    );
  }
}
