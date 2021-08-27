import React from "react";

function BlobAnimation() {
  return (
    <>
      <div className="absolute top-8 left-4 w-68 h-68 bg-indigo-300 rounded-full mix-blend-multiply filter  opacity-70  animation-delay-3000 animate-blob blur-xl"></div>
      <div className="absolute top-8 right-12 w-68 h-68 bg-yellow-300 rounded-full mix-blend-multiply filter  opacity-70 animation-delay-4000 animate-blob blur-xl"></div>
      <div className="absolute bottom-5 left-24 w-68 h-68 bg-pink-300 rounded-full mix-blend-multiply filter opacity-70  animation-delay-2000 animate-blob blur-xl"></div>
    </>
  );
}

export default BlobAnimation;
