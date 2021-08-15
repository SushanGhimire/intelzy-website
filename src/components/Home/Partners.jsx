import React from "react";
import p1 from "../../assets/images/partners/g1.png";
import p2 from "../../assets/images/partners/g2.png";
import p3 from "../../assets/images/partners/g3.png";
import p4 from "../../assets/images/partners/g4.png";
import p5 from "../../assets/images/partners/g5.png";
import p6 from "../../assets/images/partners/g6.png";
import p7 from "../../assets/images/partners/g7.png";
import p8 from "../../assets/images/partners/g8.png";
function Partners() {
  const logos = [p1, p2, p3, p4, p5, p6, p7, p8];
  return (
    <div className="flex flex-col width-padding justify-center mt-20">
      <div className="mx-auto title-text">
        Your key to blockchain applications
      </div>
      <div className="text-center text-gray-700 mt-2">
        MetaMask provides an essential utility for blockchain newcomers, token
        traders, crypto gamers, and developers. Over a million downloads and
        counting!
      </div>
      {/* grid part  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5 px-2.5 place-content-center">
        {logos.map((logo, index) => {
          return (
            <div className="col-span-1" key={index}>
              <img src={logo} className="mx-auto" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Partners;
