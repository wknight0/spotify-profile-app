import React, { useState, useEffect } from 'react';
import apiClient from '../spotify';
import default_profile from "../assets/default_profile.jfif"
import ReactLoading from "react-loading";

export default function Profile() {
  function dataStage()
  {
    document.getElementById("data").style.display = "block";
    document.getElementById("loading").style.display = "none";
  }

  const [image, setImage] = useState(
    {default_profile}
  );
  const [name, setName] = useState(
    "Profile"
  );
  const [countFollowers, setCountFollowers] = useState(
    "0"
  );
  const [countFollowing, setCountFollowing] = useState(
    "0"
  );
  const [countPlaylists, setCountPlaylists] = useState(
    "0"
  );
  const [artists, setArtists] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
      setName(response.data.display_name);
      setCountFollowers(response.data.followers.total);
    });
  }, []);

  useEffect(() => {
    apiClient.get("me/following?type=artist").then((response) => {
      setCountFollowing(response.data.artists.items.length);
    });
  }, []);
  useEffect(() => {
    apiClient.get("me/playlists").then((response) => {
      setCountPlaylists(response.data.total);
    });
  }, []);
  useEffect(() => {
    apiClient.get("me/top/artists?limit=10&time_range=long_term").then((response) => {
      setArtists(response.data.items);
    });
  }, []);

  useEffect(() => {
    apiClient.get("me/top/tracks?limit=10&time_range=long_term").then((response) => {
      setTracks(response.data.items);
      setTimeout(() => {
        dataStage();
      }, 100);
    });
  }, []);

  function logout() {
    window.localStorage.removeItem("token");
  }
  
  setTimeout(() => {
    if (document.getElementById("name").innerHTML === "Profile") {
      window.localStorage.removeItem("token");
      window.location.reload();
    }
  }, 2000);

  return (

    <div id="profile" className="screen-container text-white bg-primary max-w-[1400px] w-[calc(100vw-100px)] min-h-[100vh] p-[80px] m-[auto] lg:p-[80px] md:p-[50px] xs:p-[30px] xxs:p-[20px] text-center xxs:mb-[80px] sm:mb-[50px] xxs:mt-[30px] sm:mt-[10px]">
      
      <div id="loading" className="flex justify-center my-[20%]">
          <ReactLoading
            type={"bars"}
            color={"#909090"}
            height={100}
            width={100}
          />
        </div>
        <div id="data" className="hidden library-body grid grid-cols-5 justify-items-center align-items-center grid gap-[30px]">
          <div className="profile-container flex flex-col">
            <img src={image} className="rounded-full xxs:w-[125px] xs:w-[150px] m-[auto]" alt="profile-img"></img>
            <h1 id="name" className="font-bold my-[15px] xxs:text-[35px] xs:text-[45px]">{name}</h1>
              <div className="inline-flex mx-[auto] mb-[15px] justify-items-center space-x-[30px]">
                <div className="block xxs:w-[60px] xs:w-[80px]">
                  <p className="font-bold text-secondary xxs:text-[15px] xs:text-[18px]">{countFollowers}</p>
                  <h6 className="text-xs text-[#aaaaaa] font-book tracking-widest xxs:text-[10px] xs:text-[12.5px]">FOLLOWERS</h6>
                </div>
                <div className="blockxxs:w-[60px] xs:w-[80px]">
                  <p className="font-bold text-secondary xxs:text-[15px] xs:text-[18px]">{countFollowing}</p>
                  <h6 className="text-xs text-[#aaaaaa] font-book tracking-widest xxs:text-[10px] xs:text-[12.5px]">FOLLOWING</h6>
                </div>
                <div className="block xxs:w-[60px] xs:w-[80px]">
                  <p className="font-bold text-secondary xxs:text-[15px] xs:text-[18px]">{countPlaylists}</p>
                  <h6 className="text-xs text-[#aaaaaa] font-book tracking-widest xxs:text-[10px] xs:text-[12.5px]">PLAYLISTS</h6>
                </div>
              </div>
              <form onSubmit={logout}>
                <button type="submit" className="font-medium xxs:w-[100px] xs:w-[125px] xxs:text-[10px] xs:text-[12.5px] p-[7.5px] tracking-wider rounded-full border-[1.5px] mx-auto xxs:my-3 xs:my-6">LOGOUT</button>
              </form>
            </div>

            <div className="grid xxs:grid-cols-1 sm:grid-cols-2 pt-[75px]">
              <div className="xxs:w-[95%] sm:w-[80%] m-auto">
                <div className="flex justify-center mb-[50px]">
                  <h2 className="font-bold text-[22.5px] py-[5px] underline">Top Artists of All Time</h2>
                </div>
                <ul>
                  {artists?.map((artist) => (
                    <li className="flex mb-[25px]">
                      <img className="h-[62.5px] w-[62.5px] rounded-full mr-[25px]" src={artist.images[0].url} alt="artist-img"></img>
                      <p className="w-[100%] my-auto text-left font-book font-[500]">{artist.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="xxs:w-[95%] sm:w-[80%] m-auto">
                <div className="flex justify-center mb-[50px]">
                  <h2 className="font-bold text-[22.5px] py-[5px] underline">Top Tracks of All Time</h2>
                </div>
              <ul>
                {tracks?.map((track) => (
                  <li className="mb-[25px] flex items-center">
                    <img className="h-[62.5px] w-[62.5px] mr-[25px]" src={track.album.images[0].url} alt="track-img"></img>
                    <div>
                      <p className="my-auto text-left font-book font-[500]">{track.name}</p>
                      <p className="my-auto text-left text-[#aaaaaa] text-[12px] font-book">{track.artists[0].name} - {track.album.name}</p>
                    </div>
                    <p className="text-[#aaaaaa] text-[12px] font-book ml-auto text-right">{Math.trunc(track.duration_ms / 1000 / 60)}:{((Math.trunc(track.duration_ms / 1000) - ((Math.trunc(track.duration_ms / 1000 / 60)) * 60)) / 10 <= 1) ? ("0" + (Math.trunc(track.duration_ms / 1000) - ((Math.trunc(track.duration_ms / 1000 / 60))) * 60)) : (Math.trunc(track.duration_ms / 1000) - ((Math.trunc(track.duration_ms / 1000 / 60)) * 60))}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}