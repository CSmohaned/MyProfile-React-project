import React from 'react';
import {HomeMain,HomeButton,HomeDesc,HomeInfo,HomeInformation,HomeSpan,HomeTitle} from'./style';

function Home() {
    return (
      <HomeMain className="home">
      <div className="container">
          <HomeInformation className="home-information">
              <HomeTitle className="home-title margin-bottom">Mohaned Adel</HomeTitle>
              <HomeInfo className="home-info">Front End Developer</HomeInfo>
              <HomeDesc className="home-desc">
                  Iam a professional <HomeSpan>Front End Developer</HomeSpan>creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDesc>
              <HomeButton className="home-btn">Let's Begin</HomeButton>
          </HomeInformation>
      </div>
  </HomeMain>
      );
}

export default Home;