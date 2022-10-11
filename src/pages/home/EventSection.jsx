import {
  EventArea,
  EventButton,
  EventDescription,
  EventHeading,
  EventLeft,
  EventRight,
  EventRightBlur,
  EventRightImage,
  EventRightImageCol1,
  EventRightImageCol2,
  EventRightImageParent,
} from "./styles";
import Event1 from "./../../assets/events/event-1-1.png";
import Event1Bg from "./../../assets/events/event-1-1-bg.png";
import Event2 from "./../../assets/events/event-2-1.png";
import Event2Bg from "./../../assets/events/event-2-1-bg.png";
import Event3 from "./../../assets/events/event-1-2.png";
import Event3Bg from "./../../assets/events/event-1-2-bg.png";
import Event4 from "./../../assets/events/event-2-2.png";
import Event4Bg from "./../../assets/events/event-2-2-bg.png";

const EventSection = () => {
  return (
    <EventArea>
      <EventLeft>
        <EventHeading>All Our Events</EventHeading>
        <EventDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
          risus elit, amet. Risus amet, vulputate eros praesent.
        </EventDescription>
        <EventButton>see more</EventButton>
      </EventLeft>
      <EventRight>
        {/* column 1  */}
        <EventRightImageCol1>
          <EventRightImageParent>
            <EventRightBlur src={Event1Bg} />
            <EventRightImage src={Event1} />
          </EventRightImageParent>
          <EventRightImageParent image={Event2Bg}>
            <EventRightImage src={Event2} />
          </EventRightImageParent>
        </EventRightImageCol1>
        {/* column 2 */}
        <EventRightImageCol2>
          <EventRightImageParent image={Event3Bg}>
            <EventRightImage src={Event3} />
          </EventRightImageParent>
          <EventRightImageParent image={Event4Bg}>
            <EventRightImage src={Event4} />
          </EventRightImageParent>
        </EventRightImageCol2>
        {/* column 2 end */}
      </EventRight>
    </EventArea>
  );
};

export default EventSection;
