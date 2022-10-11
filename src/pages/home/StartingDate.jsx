import {
  DateImageItem,
  DateImageOverlay,
  DateImageParent,
  DateText,
  DateTextHeading,
  DateTextItem,
} from "./styles";
import DateImage from "./../../assets/logos/date-image.png";
const StartingDate = () => {
  return (
    <DateImageParent>
      <DateImageItem src={DateImage} />
      <DateText>
        <DateTextHeading>
          Fest Starting from 9 october - 27 october
        </DateTextHeading>
        <DateTextItem>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
          risus elit, amet. Risus amet, vulputate eros praesent.
        </DateTextItem>
      </DateText>
      <DateImageOverlay></DateImageOverlay>
    </DateImageParent>
  );
};

export default StartingDate;
