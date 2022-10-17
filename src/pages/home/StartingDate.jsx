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
    <DateImageParent className="date-parent-mobile">
      <DateImageItem src={DateImage} className="date-image-mobile"/>
      <DateText className="starting-date-text-mobile">
        <DateTextHeading className="date-h1-mobile">
          Fest Starting from 1- November - 12 November
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
