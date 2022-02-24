import React from 'react';
import {Creative,CreativeInfo,InfoSpan,InfoTitle,Desc,Dir,Aa} from './style';

function About() {
    return (
      <Creative>
      <div className="container">
          <CreativeInfo>
              <InfoTitle><InfoSpan>This is</InfoSpan> Me</InfoTitle>
              <Dir>Creative Director</Dir>
              <Desc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Aa href="#">explicabo</Aa> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
              </Desc>
              <Desc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
              </Desc>
          </CreativeInfo>
      </div>
  </Creative>
      );
}

export default About;