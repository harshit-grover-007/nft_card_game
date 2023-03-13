import React from "react";
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  FollowerTab,
  AudioLive,
  Slider,
  Brand,
} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Audio Collection"
        paragraph="Discover new collection of NFTs in all topics of life."
      />
      <AudioLive />
      <FollowerTab />
      {/* <Title
        heading="New Collection"
        paragraph="Discover new collection of NFTs in all topics of life."
      /> */}
      {/* <Title
        heading="Explore NFTs Video"
        paragraph="Click on play icon and enjoy NFTs video"
      /> */}
      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard />

      <Title
        heading="Browse By Category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />

      <Subscribe />
      <Brand />
    </div>
  );
};

export default Home;
