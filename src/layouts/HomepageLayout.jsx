import Navbar from "../components/navbar";

const HomepageLayout = ({ render }) => {
  return (
    <div>
      <Navbar />
      {render()}
    </div>
  );
};

export default HomepageLayout;
