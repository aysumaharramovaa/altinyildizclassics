"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 3px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const StyledImage = styled.img`
  width: 100%;     
  height: auto;
  object-fit: contain;
  display: block;

  @media (min-width: 768px) {
    width: 50%;   
  }
`;

const StyledImageLeft1 = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 25%;
  }
`;
const StyledImageRight1 = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 75%;
  }
`;
const StyledImageLeft2 = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 100%;
  }
`;
const StyledImageLeft3 = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 85%;
  }
`;
const StyledImageRight2 = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;

  @media (min-width: 768px) {
    width: 75%;
  }
`;
export default function PhotoCard() {
  return (
    <Wrapper>
      <Container>
        <StyledImage src="/photocard/photo-card2.jpg" alt="Photo Card 1" />
        <StyledImage src="/photocard/photo-card1.jpg" alt="Photo Card 2" />
      </Container>

      <Container>
        <StyledImageLeft1 src="/photocard/photo-card3.jpg" alt="Photo Card 3" />
        <StyledImageRight1
          src="/photocard/photo-card4.jpg"
          alt="Photo Card 4"
        />
      </Container>

      <StyledImageLeft2 src="/photocard/photo-card5.jpg" alt="Photo Card 5" />

      <Container>
        <StyledImageLeft3 src="/photocard/photo-card6.jpg" alt="Photo Card 6" />
        <StyledImageRight2
          src="/photocard/photo-card7.jpg"
          alt="Photo Card 7"
        />
        <StyledImageLeft3 src="/photocard/photo-card8.jpg" alt="Photo Card 8" />
      </Container>
    </Wrapper>
  );
}
