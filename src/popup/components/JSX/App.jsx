import React, { useEffect, useState } from "react";
import icon from "/public/icons/128x128.png";
import ToggleSwitch from "./ToggleSwitch";

const App = () => {
  const [adSkip, setAdSkip] = useState(false);
  const [speedUp, setSpeedUp] = useState(false);
  const [muteAd, setMuteAd] = useState(false);



  return (
    <div className="bg-[#272625] w-64 h-80 p-4 overflow-hidden relative">
      <div className="flex justify-center items-center w-full h-1/3">
        <img
          className="w-6 object-contain mr-1"
          src={icon}
          alt="Ad Skipper Icon"
        />
        <h1 className="title text-white text-2xl font-bold">Ad Skipper</h1>
      </div>
      <div className="w-full">
        <ToggleSwitch
          name={"Skip Ads"}
          localStorageName={"skip_ads"}
          state={adSkip}
          setState={setAdSkip}
        />
        <ToggleSwitch
          name={"Speed Up Ad"}
          localStorageName={"speed_up"}
          state={speedUp}
          setState={setSpeedUp}
        />
        <ToggleSwitch
          name={"Mute Ad"}
          localStorageName={"mute_ads"}
          state={muteAd}
          setState={setMuteAd}
        />
      </div>
      
    </div>
  );
};

export default App;
