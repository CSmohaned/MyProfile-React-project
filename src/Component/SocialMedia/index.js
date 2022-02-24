import React, { Component } from 'react';
import {Social,SocialMediaa,Icon,PP,Span1,Span2} from './style';
import axios from 'axios';

class  SocialMedia extends Component{
  state = {
    socials: []
  }
  componentDidMount() {
    axios.get('js/data.json').then( res=> {
      this.setState({socials : res.data.social})
    } ) 
  }
  render() {
    const socials = this.state.socials;
    const socialsList = socials.map( (item) => {
    return (
      <Social first={item.body} key={item.id} >
      <Icon  className={item.icon}></Icon>
      <PP>
          <Span1 >{item.title}</Span1>
          <Span2>{item.body}</Span2>
      </PP>
  </Social>
    )
    })
    return(
        <SocialMediaa >
            {socialsList}
         </SocialMediaa>
    );
      
  }
}

export default SocialMedia;