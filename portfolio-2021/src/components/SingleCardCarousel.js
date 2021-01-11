import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

function SingleCardCarousel({ currentItem, handleClick, animationDisplay }) {
  return (
    <CarouselContainer>
      <FontAwesomeIcon
        title="Previous"
        icon={faChevronLeft}
        style={{ color: "white", fontSize: "1rem", cursor: "pointer" }}
        onClick={handleClick}
      />
      <Card>
        <a href={currentItem.item.url} target="_blank" rel="noreferrer">
          <CardImg
            alt={currentItem.item.title}
            src={currentItem.item.social_image}
            style={{ cursor: "pointer" }}
            width="258px"
            height="136px"
            className={animationDisplay}
          />
        </a>
      </Card>
      <FontAwesomeIcon
        title="Next"
        icon={faChevronRight}
        style={{ color: "white", fontSize: "1rem", cursor: "pointer" }}
        onClick={handleClick}
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
  &.blink {
    animation: blink 2s linear;
  }
  &.blink2 {
    animation: blink2 2s linear;
  }
  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes blink2 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
