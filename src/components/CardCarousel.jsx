import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";

function CardCarousel() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://images.dog.ceo/breeds/spaniel-cocker/bella4.jpg" />
      )
    }
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default CardCarousel;
