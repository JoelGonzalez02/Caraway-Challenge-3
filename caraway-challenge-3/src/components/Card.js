import React from "react";
import styled from "@emotion/styled";

const Container = styled.div(() => ({}));

const StyledCard = styled.div(() => ({
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "space-between",
  cursor: "pointer",
  transition: "transform 200ms ease-in",
  width: "300px",
  height: "470px",
  backgroundColor: "white",
  ":hover": {
    transform: "scale(1.05)",
  },
}));

const ImageContainer = styled.div(() => ({
  width: "100%",
}));

const BackgroundImage = styled.img(() => ({
  width: "100%",
  backgroundColor: "#f1f0ef",
}));

function Card({ imageSrc, title }) {
  return (
    <Container>
      <StyledCard>
        <ImageContainer>
          <BackgroundImage src={imageSrc}></BackgroundImage>
          <p>{title}</p>
        </ImageContainer>
      </StyledCard>
    </Container>
  );
}

export default Card;
