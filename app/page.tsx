import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";
const Home = () => {
  return (
    <Container className="bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nesciunt
        consequatur explicabo nam culpa, at qui, doloribus optio alias voluptas
        natus vero laboriosam perspiciatis facere ipsam inventore, error dicta
        repudiandae ut dolorem consequuntur libero corporis ea quia? Quisquam,
        eos deserunt? Laudantium, amet ea rem odit vero deserunt labore magnam
        praesentium?
      </p>
      <Button size="lg">Check out</Button>
    </Container>
  );
};

export default Home;
