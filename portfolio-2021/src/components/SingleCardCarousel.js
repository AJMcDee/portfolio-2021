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
        style={{ color: "white", fontSize: "1rem" }}
        onClick={handlePrev}
      />
      <Card>
        <a href={currentItem.item.url} target="_blank" rel="noreferrer">
          <CardImg
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
        style={{ color: "white", fontSize: "1rem" }}
        onClick={handleNext}
      />
    </CarouselContainer>
  );
}

const Card = styled.div`
  background-color: "black";
  margin: 1rem;
`;

const CardImg = styled.img`
  max-height: 120px;
  max-width: 200px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
    height: 230px;
    max-height: unset;
    max-width: unset;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;
  width: 320px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 700px;
  }
`;

export default SingleCardCarousel;
