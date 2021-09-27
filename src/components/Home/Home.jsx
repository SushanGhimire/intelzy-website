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
      content: "Pioneer in Blockchain, AI and Cybersecurity",
      flex: "flex-row",
      des: "Taking on the most recent innovation advancements we are pushing the limits of how technologies can help our clients by building core blockchain solutions to provide low latency and immutability to businesses by focusing on application specific blockchain architecture development along with security audit consultancy and complete audits to evaluate cyber-related risk in the network and putting mitigating controls in place to prevent systems from attacks.We tend to use machine learning algorithms and NLP for forecasting & prediction, data management and business automation.",
      img: front2,
      aos: "fade-left",
    },
    {
      content: "Innovative and scalable solutions",
      flex: "flex-row-reverse",
      des: "First rate movement of a product with creative and versatile arrangements by the developers with correct use of tools that work faster, perform better brings out the excellent outcome.We tend to scale with today’s market graphs of innovation allowing to align technology strategy with new and emerging technological solutions. ",
      img: front,
      aos: "fade-right",
    },
    {
      content: "50+ employees with years of collaborative experience",
      flex: "flex-row",
      des: "We are a group of developers with experience and solitary concentration. We work in aiding customers assemble inventive and client confronting items at scale. We have a demonstrated history for transforming ideas into financially effective products.",
      img: front3,
      aos: "fade-left",
    },
  ];
  return (
    <div className=" flex flex-col">
      <FrontPage
        header="Something Special here"
        des=""
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
