import React from 'react';
import { Link  } from 'react-router-dom';
import {NavbarSection,Logo,UlList,Item,ListItem,LogoText} from './style.js';
function NavBar() {
    return (
      <NavbarSection>
            
      <div className="container">
          
          <Logo>
              <LogoText className="logo-text">Ultra Profile</LogoText>
          </Logo>
        
          <UlList className="ul-list">
              <ListItem className="list-item"><Link to="/">Home</Link></ListItem>
              <ListItem className="list-item"><Item href="#">Work</Item></ListItem>
              <ListItem className="list-item"><Item href="#">Portfolio</Item></ListItem>
              <ListItem className="list-item"><Item href="#">Resume</Item></ListItem>
              <ListItem className="list-item"><Item href="#">About</Item></ListItem>
              <ListItem className="list-item"><Link to="/contact">Contact</Link></ListItem>
          </UlList>
          
      </div>
      
  </NavbarSection>
      );
}

export default NavBar;