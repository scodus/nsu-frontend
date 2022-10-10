import PreLoader from "../../components/preloader";
import HomepageLayout from "../../layouts/HomepageLayout";
import { Header } from "./styles";

const HomePage = () => {
  return (
    <div>
      <PreLoader />
      <Header></Header>
    </div>
  );
};

const HomePageWithNavbar = () => {
  return <HomepageLayout render={() => <HomePage />} />;
};

export default HomePageWithNavbar;
