import React, { useState, useEffect } from 'react';
import apiClient from '../spotify';
import ReactLoading from "react-loading";

export default function TopArtists() {
  function dataStage()
  {
    document.getElementById("data").style.display = "grid";
    document.getElementById("loading").style.display = "none";
  }

  var [artists1, setArtists1] = useState(null);
  var [artists2, setArtists2] = useState(null);
  var [artists3, setArtists3] = useState(null);

  useEffect(() => {
    apiClient.get("me/top/artists?limit=50&time_range=long_term").then((response) => {
      setArtists1(response.data.items);
    });
  }, []);

  useEffect(() => {
    apiClient.get("me/top/artists?limit=50&time_range=medium_term").then((response) => {
      setArtists2(response.data.items);
    });
  }, []);

  useEffect(() => {
    apiClient.get("me/top/artists?limit=50&time_range=short_term").then((response) => {
      setArtists3(response.data.items);
      setTimeout(() => {
        dataStage();
      }, 100);
    });
  }, []);

  function AllTime()
  {
    document.getElementById("allTime").style.display = "grid";
    document.getElementById("sixMonths").style.display = "none";
    document.getElementById("fourWeeks").style.display = "none";

    document.getElementById("button1").style.color = "white";
    document.getElementById("button1").style.textDecoration = "underline";
    document.getElementById("button2").style.color = "#909090";
    document.getElementById("button2").style.textDecoration = "none";
    document.getElementById("button3").style.color = "#909090";
    document.getElementById("button3").style.textDecoration = "none";
    document.getElementById("button11").style.color = "white";
    document.getElementById("button11").style.textDecoration = "underline";
    document.getElementById("button22").style.color = "#909090";
    document.getElementById("button22").style.textDecoration = "none";
    document.getElementById("button33").style.color = "#909090";
    document.getElementById("button33").style.textDecoration = "none";
    document.getElementById("heading").innerHTML = "Top Artists of All Time";
  }

  function SixMonths()
  {
    document.getElementById("allTime").style.display = "none";
    document.getElementById("sixMonths").style.display = "grid";
    document.getElementById("fourWeeks").style.display = "none";

    document.getElementById("button1").style.color = "#909090";
    document.getElementById("button1").style.textDecoration = "none";
    document.getElementById("button2").style.color = "white";
    document.getElementById("button2").style.textDecoration = "underline";
    document.getElementById("button3").style.color = "#909090";
    document.getElementById("button3").style.textDecoration = "none";
    document.getElementById("button11").style.color = "#909090";
    document.getElementById("button11").style.textDecoration = "none";
    document.getElementById("button22").style.color = "white";
    document.getElementById("button22").style.textDecoration = "underline";
    document.getElementById("button33").style.color = "#909090";
    document.getElementById("button33").style.textDecoration = "none";
    document.getElementById("heading").innerHTML = "Top Artists from the Last 6 Months";
  }

  function FourWeeks()
  {
    document.getElementById("allTime").style.display = "none";
    document.getElementById("sixMonths").style.display = "none";
    document.getElementById("fourWeeks").style.display = "grid";

    document.getElementById("button1").style.color = "#909090";
    document.getElementById("button1").style.textDecoration = "none";
    document.getElementById("button2").style.color = "#909090";
    document.getElementById("button2").style.textDecoration = "none";
    document.getElementById("button3").style.color = "white";
    document.getElementById("button3").style.textDecoration = "underline";
    document.getElementById("button11").style.color = "#909090";
    document.getElementById("button11").style.textDecoration = "none";
    document.getElementById("button22").style.color = "#909090";
    document.getElementById("button22").style.textDecoration = "none";
    document.getElementById("button33").style.color = "white";
    document.getElementById("button33").style.textDecoration = "underline";
    document.getElementById("heading").innerHTML = "Top Artists from the Last 4 Weeks";
  }

  setTimeout(() => {
    if (document.getElementById("artistName").innerHTML === "") {
      window.localStorage.removeItem("token");
      window.location.reload();
    }
  }, 2000);

  return (
    <div className="screen-container text-white bg-primary max-w-[1400px] w-[calc(100vw-100px)] min-h-[100vh] p-[80px] m-[auto] xxs:mb-[80px] sm:mb-[25px] lg:p-[80px] xxs:p-[50px]">
        <div className="block justify-between mb-[35px] md:flex xxs:hidden">
          <h1 id="heading" className="text-2xl font-Black text-left py-[25px]">Top Artists of All Time</h1><br></br>
          <div className="inline-flex gap-5 font-medium text-[#909090]">
              <button onClick={AllTime}><p className="text-white underline" id="button1">All Time</p></button>
              <button onClick={SixMonths}><p id="button2">Last 6 Months</p></button>
              <button onClick={FourWeeks}><p id="button3">Last 4 Weeks</p></button>
          </div>
        </div>

        <div className="md:hidden xxs:block">
          <div className="flex justify-center">
            <h1 id="heading" className="text-2xl font-Black text-center py-[25px]">Top Artists of All Time</h1><br></br>
          </div>

          <div className="flex justify-center mb-[50px]">
            <div className="inline-flex gap-5 font-medium text-[#909090] justify-center">
              <button onClick={AllTime}><p className="text-white underline" id="button11">All Time</p></button>
              <button onClick={SixMonths}><p id="button22">Last 6 Months</p></button>
              <button onClick={FourWeeks}><p id="button33">Last 4 Weeks</p></button>
            </div>
          </div>    
        </div>

        <div id="loading" className="flex justify-center my-[25%]">
          <ReactLoading
            type={"bars"}
            color={"#909090"}
            height={100}
            width={100}
          />
        </div>

        <div id="data" className="library-body grid grid-cols-5 justify-items-center align-items-center grid gap-[30px]"></div>
          <ul className="block" id="allTime">
            {artists1?.map((artist) => (
                <li className="flex mb-[25px]">
                  <img className="h-[62.5px] w-[62.5px] rounded-full mr-[25px]" src={artist.images[0].url} alt="artist-img"></img>
                  <p id="artistName" className="w-[100%] my-auto text-left font-book font-[500]">{artist.name}</p>
                </li>
            ))}
          </ul>

          <ul className="hidden" id="sixMonths">
            {artists2?.map((artist) => (
                <li className="flex mb-[25px]">
                  <img className="h-[62.5px] w-[62.5px] rounded-full mr-[25px]" src={artist.images[0].url} alt="artist-img"></img>
                  <p className="w-[100%] my-auto text-left font-book font-[500]">{artist.name}</p>
                </li>
            ))}
          </ul>

          <ul className="hidden" id="fourWeeks">
            {artists3?.map((artist) => (
                <li className="flex mb-[25px]">
                  <img className="h-[62.5px] w-[62.5px] rounded-full mr-[25px]" src={artist.images[0].url} alt="artist-img"></img>
                  <p className="w-[100%] my-auto text-left font-book font-[500]">{artist.name}</p>
                </li>
            ))}
          </ul>
        </div>
  )
}
