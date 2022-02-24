import React ,{Component} from 'react';
import axios from 'axios';

import {WorkMain,WorkPart,WorkPartDesc,WorkPartIcon,WorkPartLine,WorkPartTitle,WorkTitle,TitleSpan} from './style';
class Work extends Component {
  state = {
    works:[]
  }
  componentDidMount() {
    axios.get('js/data.json').then( res=> {
      this.setState({works:res.data.works})
    } ) 
  }
  render() {
    const works = this.state.works;
    const workList = works.map( (item) => {
      return(
        <WorkPart first={item.id} className="part first" key={item.id}>
        <WorkPartIcon className={item.icon_name}></WorkPartIcon>
        <WorkPartTitle className="part-title">{item.title}</WorkPartTitle>
        <WorkPartLine className="WorkPartLine"/>
        <WorkPartDesc className="part-desc">
            {item.body}
        </WorkPartDesc>
    </WorkPart>
      )
    })
    return (
      <WorkMain className="work">
      <div className="container">
          <WorkTitle className="work-title"><TitleSpan>My</TitleSpan> Work</WorkTitle>
            {workList}    
      </div>
  </WorkMain>
      );
  }
   
}

export default Work;