import React, { useEffect, useState } from 'react';
import apiClient from "../spotify";
import empty from "../assets/empty.png"
import ReactLoading from "react-loading";

export default function Playlists() {
  
  function dataStage()
  {
    document.getElementById("data").style.display = "grid";
    document.getElementById("loading").style.display = "none";
  }

  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    apiClient.get("me/playlists").then(function (response) {
      setPlaylists(response.data.items);
      setTimeout(() => {
        dataStage();
      }, 100);
    });
  }, []);

  setTimeout(() => {
    if (document.getElementById("playlistName").innerHTML === "") {
      window.localStorage.removeItem("token");
      window.location.reload();
    }
  }, 2000);

  return (
    <div className="screen-container text-white bg-primary max-w-[1400px] w-[calc(100vw-100px)] min-h-[100vh] p-[80px] m-[auto] xxs:mb-[80px] sm:mb-[25px] lg:p-[80px] xxs:p-[50px]">
      <div className="flex xxs:justify-center mm:justify-between mb-[5px]">
        <h1 className="text-2xl font-Black text-left py-[25px] xxs:text-center mm:text-justify">Your Playlists</h1><br></br>
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
        {playlists?.map((playlist) => (
          <div className="playlist-card h-[auto]">
            <img 
              className="min-w-[50px]"
              src={playlist.images.length > 0 ? playlist.images[0].url : empty}
              alt="Playlist-Icon"
            />
            <div className="playlist-info mx-2 my-5">
              <p id="playlistName" className="playlist-title font-medium text-center tracking-wide">{playlist.name}</p>
              <p className="playlist-subtitle font-book text-center text-[#aaaaaa] tracking-wider">{playlist.tracks.total} Songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}