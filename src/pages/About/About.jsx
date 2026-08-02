import AboutHero from "../../components/about/AboutHero";
import CompanyStory from "../../components/about/CompanyStory";
import MissionVision from "../../components/about/MissionVision";
import CompanyTimeline from "../../components/about/CompanyTimeline";
import Leadership from "../../components/about/Leadership";
import AboutCTA from "../../components/about/AboutCTA";

const About = () => {
  return (
    <>
     <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CompanyTimeline />
      <Leadership />
      <AboutCTA />
    </>
  );
};

export default About;