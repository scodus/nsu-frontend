import { SponsorImage, SponsorParent } from "./styles";
import logo1 from "./../../assets/logos/logo-1.png";
import logo2 from "./../../assets/logos/logo-2.png";
import logo3 from "./../../assets/logos/logo-3.png";
import logo4 from "./../../assets/logos/logo-4.png";
import logo5 from "./../../assets/logos/logo-5.png";

const SponsorSection = () => {
  return (
    <SponsorParent>
      <SponsorImage src={logo1} />
      <SponsorImage src={logo2} />
      <SponsorImage src={logo3} />
      <SponsorImage src={logo4} />
      <SponsorImage src={logo5} />
    </SponsorParent>
  );
};

export default SponsorSection;
