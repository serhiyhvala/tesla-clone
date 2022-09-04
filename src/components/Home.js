import React from "react";
import styled from "styled-components";
import Section from "./Section";
import cartInfo from '../data/carInfo.json'
function Home() {
  return (
    <Container>
    {cartInfo.map((e) => (
      <Section
        key={e.id}
        title={e.title}
        desciption={e.description}
        backgroundImg={e.image}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
    ))}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
