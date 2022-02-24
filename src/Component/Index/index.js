import Home from '../Home';
import About from '../About';
import SocialMedia from '../SocialMedia';
import Profile from '..//Profile';
import Portfolio from '..//Portfolio';
import Footer from '..//Footer';
import Work from '..//Work';

function Index() {
  return (
    <div className="App">
      <Home/>
      <Work/>
      <Portfolio/>
      <Profile/>
      <About/>
      <SocialMedia/>
      <Footer/>
    </div>
  );
}

export default Index;
