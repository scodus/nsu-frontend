import {
  EventArea,
  EventButton,
  EventDescription,
  EventHeading,
  EventLeft,
  EventRight,
  EventRightBlur,
  EventRightImage,
  EventRightImage1Parent,
  EventRightImage2Parent,
  EventRightImage1ChildrenContainer,
  EventRightImageCol1,
  EventRightImageCol2,
  EventRightImageParent,
  EventRightImage2ChildrenContainer,
  EventRightRightBlur,
  EventImageOverlay,
} from "./styles";
import Event1 from "./../../assets/events/event-1-1.png";
import Event1Bg from "./../../assets/events/event-1-1-bg.png";
import Event2 from "./../../assets/events/event-2-1.png";
import Event2Bg from "./../../assets/events/event-2-1-bg.png";
import Event3 from "./../../assets/events/event-1-2.png";
import Event3Bg from "./../../assets/events/event-1-2-bg.png";
import Event4 from "./../../assets/events/event-2-2.png";
import Event4Bg from "./../../assets/events/event-2-2-bg.png";
import { Link } from "react-router-dom";

const EventSection = () => {
  return (
    <EventArea className="event-area-mobile">
      <EventLeft className="event-left-mobile">
        <EventHeading>All Our Events</EventHeading>
        <EventDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
          risus elit, amet. Risus amet, vulputate eros praesent.
        </EventDescription>
        <Link to="/events">
          <EventButton>
            see more
          </EventButton>
        </Link>
      </EventLeft>
      <EventRight>
        {/* -------------  */}
        <Link to="/robowars">
          <EventRightImage1Parent>
            <EventRightImage1ChildrenContainer>
              <EventRightImage src={Event1} />
              <EventImageOverlay>robo war</EventImageOverlay>
            </EventRightImage1ChildrenContainer>
            <EventRightBlur src={Event1Bg} />
          </EventRightImage1Parent>
        </Link>

        <Link to="/startup">
          <EventRightImage2Parent>
            <EventRightImage2ChildrenContainer>
              <EventRightImage src={Event3} />
              <EventImageOverlay>startup</EventImageOverlay>
            </EventRightImage2ChildrenContainer>
            <EventRightRightBlur src={Event3Bg} />
          </EventRightImage2Parent>
        </Link>

        <Link to="hackathon">
          <EventRightImage1Parent>
            <EventRightImage1ChildrenContainer>
              <EventRightImage src={Event2} />
              <EventImageOverlay>hackathon</EventImageOverlay>
            </EventRightImage1ChildrenContainer>
            <EventRightBlur src={Event2Bg} />
          </EventRightImage1Parent>
        </Link>

        <Link to="/exhibition">
        <EventRightImage2Parent>
          <EventRightImage2ChildrenContainer>
            <EventRightImage src={Event4} />
            <EventImageOverlay>exhibition</EventImageOverlay>
          </EventRightImage2ChildrenContainer>
          <EventRightRightBlur src={Event4Bg} />
        </EventRightImage2Parent>
        </Link>
        {/* ------------------- */}
      </EventRight>
      
    </EventArea>
  );
};

export default EventSection;
