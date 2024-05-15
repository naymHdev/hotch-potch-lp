import Banner from "../Components/Banner";
import Company from "./Company";
import CustomerFeedback from "./CustomerFeedback";
import MixLand from "./MixLand";
import Pricing from "./Pricing";
import ResultSecond from "./ResultSecond";
import Results from "./Results";
import WritingTools from "./WritingTools";

const Home = () => {
  return (
    <>
      <Banner />
      <Company />
      <Results />
      <ResultSecond />
      <WritingTools />
      <MixLand />
      <CustomerFeedback />
      <Pricing />
      <div className=" pb-20"></div>
    </>
  );
};

export default Home;
