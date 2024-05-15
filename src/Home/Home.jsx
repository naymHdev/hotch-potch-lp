import Banner from "../Components/Banner";
import Company from "./Company";
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
      <div className=" pb-20"></div>
    </>
  );
};

export default Home;
