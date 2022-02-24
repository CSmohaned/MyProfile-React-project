import React from 'react';
import {DTextarea,FoIrmInput,Drop,DropTitle,DropTitleS,Form,Input3,Input4,Input5,Input6} from './style';
import Footer from '../Footer/index';

function Contact() {
  return(
    <React.Fragment>
    <Drop className="drop">
    <div className="container">
        <DropTitle className="drop-title"><DropTitleS>Drop </DropTitleS>Me A line</DropTitle>
        <Form action="">
            <FoIrmInput>
                <Input3 type="text" placeholder="Your Name"/>
                <Input4 type="email" placeholder="Your Email"/>
            </FoIrmInput>
            <Input5 type="text" className="sub" placeholder="Your Subject"/>
            <DTextarea cols="30" rows="10" placeholder="Your Message"></DTextarea>
            <Input6 type="submit" value="Send Message"/>
        </Form>
    </div>
</Drop><Footer/></React.Fragment>
  );
}

export default Contact;
