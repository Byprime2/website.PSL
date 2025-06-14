import React from "react";

const HeroInfo = () => {
  return (
    <div className="sm:absolute sm:text-white bottom-0 left-0 sm:bg-zinc-500/75 grid sm:grid-cols-4 w-full text-center h-50 sm:items-center sm:mt-0 mt-10 text-blue-900 sm:gap-0 gap-7 grid-cols-2">
      <div>
        <p className="text-4xl font-bold">80+</p>
        <h2 className="mt-2 text-3xl">Perdagangan</h2>
      </div>
      <div>
        <p className="text-4xl font-bold">10+</p>
        <h2 className="mt-2 text-3xl">Ekspedisi</h2>
      </div>
      <div>
        <p className="text-4xl font-bold">100+</p>
        <h2 className="mt-2 text-3xl">Transportasi</h2>
      </div>
      <div>
        <p className="text-4xl font-bold">10+</p>
        <h2 className="mt-2 text-3xl">Penyewaan</h2>
      </div>
    </div>
  );
};

export default HeroInfo;
