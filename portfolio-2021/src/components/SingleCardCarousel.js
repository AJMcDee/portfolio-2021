import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function SingleCardCarousel({ currentItem, handlePrev, handleNext }) {
  return (
    <CarouselContainer>
      <FontAwesomeIcon
        title="Previous Post"
        icon={faChevronLeft}
        style={{ color: "white", fontSize: "2rem" }}
        onClick={handlePrev}
      />
      <Card style={{ backgroundColor: "black", margin: "1rem" }}>
        <a href={currentItem.item.url} target="_blank" rel="noreferrer">
          <Card.Img
            variant="top"
            alt={currentItem.item.title}
            src={currentItem.item.social_image}
            style={{ cursor: "pointer" }}
            width="258px"
            height="136px"
          />
        </a>
      </Card>
      <FontAwesomeIcon
        title="Next Post"
        icon={faChevronRight}
        style={{ color: "white", fontSize: "2rem" }}
        onClick={handleNext}
      />
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;
  width: 320px;
`;

export default SingleCardCarousel;
