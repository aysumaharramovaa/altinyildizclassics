"use client";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCloud } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 3 / 4;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
const StyledImageLeft = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  margin-top: 0.1rem;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
const StyledImageRight2 = styled(StyledImage)`
  @media (min-width: 768px) {
    width: 33.33%;
  }
`;
const StyledImageLeft3 = styled(StyledImage)`
  @media (min-width: 768px) {
    width: 33.33%;
  }
`;

export default function SuitCards() {
  return (
    <Wrapper>
      <Container>
        <StyledImage src="/suitcard/takım1.jpeg" alt="Suit Card 1" />
        <StyledImage src="/suitcard/takim2.jpeg" alt="Suit Card 2" />
      </Container>

      <StyledImageLeft src="stiliniyansit.jpg" />
      <StyledImageLeft src="/suitcard/takım3.jpg" alt="Suit Card 3" />

      <Container>
        <StyledImageRight2 src="/suitcard/aksesuar.jpg" alt="Aksessuar" />
        <StyledImageLeft3 src="/suitcard/ayakkabi.jpg" alt="Ayakkabi" />
        <StyledImageRight2 src="/suitcard/icgiyim.jpg" alt="Ic giyim" />
      </Container>
      <StyledImageLeft src="/suitcard/onlineexclusive.jpg" />
      <StyledImageLeft src="/suitcard/hemenindir.jpeg" />
      <h2 className="text-center text-lg font-medium flex flex-wrap justify-center gap-4">
        <span className="flex items-center mr-5 min-w-[200px]">
          <FontAwesomeIcon icon={faHouse} className="mr-2" />
          Mağazalarımızdan Değişim
        </span>
        <span className="flex items-center mx-5 min-w-[200px]">
          <FontAwesomeIcon icon={faCloud} className="mr-2" />
          Havale ile Ödeme
        </span>
        <span className="flex items-center mx-5 min-w-[200px]">
          <FontAwesomeIcon icon={faHouse} className="mr-2" />
          Ücretsiz Terzi Hizmeti
        </span>
        <span className="flex items-center mx-5 min-w-[200px]">
          <FontAwesomeIcon icon={faCloud} className="mr-2" />
          Kapıda Ödeme
        </span>
      </h2>
    </Wrapper>
  );
}
