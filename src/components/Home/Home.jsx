import React from "react";
import FlexCard from "../common/FlexCard";
import FrontPage from "../common/FrontPage";
import front from "../../assets/images/front.svg";
import front2 from "../../assets/images/front2.svg";
import front3 from "../../assets/images/front3.svg";
import ThreeJsPart from "./ThreeJsPart";
import Partners from "./Partners";
import Newslatters from "./Newslatters";
function Home() {
  let flexCard = [
    {
      content: "Buy, store, send and swap tokens",
      flex: "flex-row",
      des: "Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, token wallet, and token exchange—everything you need to manage your digital assets.",
      img: front2,
      aos: "fade-left",
    },
    {
      content: "Explore blockchain apps",
      flex: "flex-row-reverse",
      des: "MetaMask provides the simplest yet most secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web.",
      img: front,
      aos: "fade-right",
    },
    {
      content: "Own your data",
      flex: "flex-row",
      des: "MetaMask generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.",
      img: front3,
      aos: "fade-left",
    },
  ];
  return (
    <div className=" flex flex-col">
      <FrontPage
        header="crypto wallet & gateway to blockchain apps"
        des="Start exploring blockchain applications in seconds. Trusted by over 1 million users worldwide."
        start="true"
        scroll="scroll"
      />
      {flexCard.map((card, index) => {
        const { content, flex, des, img, aos } = card;
        return (
          <FlexCard
            content={content}
            flex={flex}
            des={des}
            img={img}
            key={index}
            aos={aos}
          />
        );
      })}
      <ThreeJsPart />
      <Partners />
      <Newslatters />
    </div>
  );
}

export default Home;
