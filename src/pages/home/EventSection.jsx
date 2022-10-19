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
        <EventHeading className="event-heading-div"><h1 className="font-family-gravedigger event-headings">All Our Events </h1></EventHeading>
        <EventDescription>
          Tech Fest has a lot of Events including Hackathon, Robo Wars, Start Up and many more.
        </EventDescription>
        <Link to="/events">
          <EventButton className="event-button-mobile">
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
              <EventImageOverlay><h1 className="font-size-25">robo war</h1></EventImageOverlay>
            </EventRightImage1ChildrenContainer>
            <EventRightBlur src={Event1Bg} />
          </EventRightImage1Parent>
        </Link>

        <Link to="/startup">
          <EventRightImage2Parent>
            <EventRightImage2ChildrenContainer>
              <EventRightImage src={Event3} />
              <EventImageOverlay><h1 className="font-size-25">startup </h1></EventImageOverlay>
            </EventRightImage2ChildrenContainer>
            <EventRightRightBlur src={Event3Bg} />
          </EventRightImage2Parent>
        </Link>

        <Link to="hackathon">
          <EventRightImage1Parent>
            <EventRightImage1ChildrenContainer>
              <EventRightImage src={Event2} />
              <EventImageOverlay><h1 className="font-size-25">hackathon </h1></EventImageOverlay>
            </EventRightImage1ChildrenContainer>
            <EventRightBlur src={Event2Bg} />
          </EventRightImage1Parent>
        </Link>

        <Link to="/exhibition">
        <EventRightImage2Parent>
          <EventRightImage2ChildrenContainer>
            <EventRightImage src={Event4} />
            <EventImageOverlay><h1 className="font-size-25">exhibition </h1></EventImageOverlay>
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
