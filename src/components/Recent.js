import React, { useState, useEffect } from 'react';
import apiClient from '../spotify';
import ReactLoading from "react-loading";

export default function Recent() {
  function dataStage()
  {
    document.getElementById("data").style.display = "block";
    document.getElementById("loading").style.display = "none";
  }

  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    apiClient.get("me/player/recently-played?limit=50").then((response) => {
      setTracks(response.data.items);
      setTimeout(() => {
        dataStage();
      }, 100);
    });
  }, []);

  setTimeout(() => {
    if (document.getElementById("recentName").innerHTML === "") {
      window.localStorage.removeItem("token");
      window.location.reload();
    }
  }, 2000);
  
  return (

    <div className="screen-container text-white bg-primary max-w-[1400px] w-[calc(100vw-100px)] min-h-[100vh] p-[80px] m-[auto] xxs:mb-[80px] sm:mb-[25px] lg:p-[80px] xxs:p-[50px]">

        <div className="flex xxs:justify-center mm:justify-between mb-[35px]">
          <h1 className="text-2xl font-Black text-left py-[25px] xxs:text-center mm:text-justify">Recently Played Tracks</h1><br></br>
        </div>

        <div id="loading" className="flex justify-center my-[25%]">
          <ReactLoading
            type={"bars"}
            color={"#909090"}
            height={100}
            width={100}
          />
        </div>

        <div id="data" className="hidden library-body grid grid-cols-5 justify-items-center align-items-center grid gap-[30px]">
          <ul>
            {tracks?.map((track) => (
                <li className="mb-[25px] flex items-center">
                  <img className="h-[62.5px] w-[62.5px] mr-[25px]" src={track.track.album.images[0].url} alt="track-img"></img>
                  <div>
                    <p id="recentName" className="my-auto text-left font-book font-[500]">{track.track.name}</p>
                    <p className="my-auto text-left text-[#aaaaaa] text-[12px] font-book">{track.track.artists[0].name} - {track.track.album.name}</p>
                  </div>
                  <p className="text-[#aaaaaa] text-[12px] font-book ml-auto text-right">{Math.trunc(track.track.duration_ms / 1000 / 60)}:{((Math.trunc(track.track.duration_ms / 1000) - ((Math.trunc(track.track.duration_ms / 1000 / 60)) * 60)) / 10 <= 1) ? ("0" + (Math.trunc(track.track.duration_ms / 1000) - ((Math.trunc(track.track.duration_ms / 1000 / 60))) * 60)) : (Math.trunc(track.track.duration_ms / 1000) - ((Math.trunc(track.track.duration_ms / 1000 / 60)) * 60))}</p>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
}