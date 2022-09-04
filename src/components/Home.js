import React from "react";
import Section from "./Section";
import cartInfo from '../data/carInfo.json'
import Container from "../styles/HomeStyles"
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


