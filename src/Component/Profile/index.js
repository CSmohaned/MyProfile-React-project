import React, {useState,useEffect} from 'react';
import {ProfileList,Bar,BarPerc,BatTitle,ItemSpan,ProfileTitle,Parent,ParentSpan,ProfileItem,ProfileSkills,ProfileSkillsPro,STSpan,Skills,SkillsDesc} from './style';
import axios from 'axios';

function Profile() {
  let  [profiles ,setProfiles] = useState([]);
    useEffect( () => {
    axios.get('js/data.json').then( res => { 
      setProfiles(res.data.profile);
    } ) 
  } , [] );
    const profile = profiles.map((item) => {
    return(
      <Bar key={item.id}>
      <BatTitle >{item.title}</BatTitle>
      <BarPerc >{item.percentage}%</BarPerc>
      <Parent>
          <ParentSpan  first={item.percentage}></ParentSpan>
      </Parent>
  </Bar>
    )
  }); 
    return (
<ProfileSkills className="profile_skills">
            <div className="container">
                <ProfileSkillsPro className="profile">
                    <ProfileTitle className="profile-title"><STSpan>My </STSpan>Profile</ProfileTitle>
                    <ProfileList className="profile-list">
                        <ProfileItem className="profile-item">
                            <ItemSpan>Name</ItemSpan>
                            Mohaned Adel
                        </ProfileItem>
                        <ProfileItem className="profile-item">
                            <ItemSpan>Birthday</ItemSpan>
                            15/09/1996
                        </ProfileItem>
                        <ProfileItem className="profile-item">
                         <ItemSpan>Address</ItemSpan>Egypt , Giza
                        </ProfileItem>
                        <ProfileItem className="profile-item">
                            <ItemSpan>Phone</ItemSpan>
                            +21142968654
                        </ProfileItem>
                        <ProfileItem className="profile-item">
                            <ItemSpan>Email</ItemSpan>
                            mohanedadel65@gmail.com
                        </ProfileItem>
                        <ProfileItem className="profile-item">
                            <ItemSpan>Website</ItemSpan>
                            <ItemSpan className="web">www.google.com</ItemSpan>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSkillsPro>
                
                <Skills className="skills">
                    <ProfileTitle className="skills-title">Some <STSpan>skills</STSpan></ProfileTitle>
                    <SkillsDesc className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                   {profile}
                </Skills>
                
            </div>
        </ProfileSkills>  
            );
}

export default Profile;