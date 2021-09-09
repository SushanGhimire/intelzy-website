import React from "react";
import front from "../../assets/images/frontpageimg.png";

function AboutCard() {
  return (
    <div className="md:flex items-center">
      <div className="flex-1 relative py-7">
        <div
          className=" font-black text-gray-800 dark:text-gray-200"
          style={{
            lineHeight: 1.2,
            fontSize: window.innerWidth < 1024 ? "40px" : "48px",
            fontWeight: 700,
          }}
        >
          About
        </div>
        <div className="mt-2 text-gray-700 dark:text-gray-400">
          MetaMask is a global community of developers and designers dedicated
          to making the world a better place with blockchain technology. Our
          mission is to democratize access to the decentralized web, and through
          this mission, to transform the internet and world economy to one that
          empowers individuals through interactions based on consent, privacy,
          and free association.
        </div>
        <div className="mt-2 text-gray-700 dark:text-gray-400">
          We join our amazingly talented colleagues in the wider ConsenSys
          product family in working to deliver a more fair, free and
          decentralized internet-based economy for all.
        </div>
      </div>
      <div className="flex-1 mt-10 md:mt-0 z-40">
        <img src={front} alt="" className="mx-auto" />
      </div>
    </div>
  );
}

export default AboutCard;
