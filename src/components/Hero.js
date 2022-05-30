import heroMobile from '../images/image-hero-mobile.png';
import heroDesktop from '../images/image-hero-desktop.png';
import { Audiophile, Databiz, Maker, Meet } from '../images';

const Hero = () => {
  const windowWidth = window.innerWidth > 890;
  return (
    <section className="hero">
      <div className="img-container">
        <img src={windowWidth ? heroDesktop : heroMobile} alt="hero" />
      </div>
      <div className="content">
        <div className="hero-text">
          <h1>
            Make <span>remote work</span>
          </h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="hero-btn">Learn more</button>
        </div>
        <div className="icons-container">
          <Databiz className="icon" />
          <Audiophile className="icon" />
          <Meet className="icon" />
          <Maker className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
