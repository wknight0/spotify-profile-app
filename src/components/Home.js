import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Sidebar, Profile, TopArtists, TopTracks, Recent, Playlists } from '../components';
import { setClientToken } from '../spotify';

export default function Home() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash="";
    if ((!token && hash)) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    }

    setToken(token);
    setClientToken(token);
  }, [])

  return (window.localStorage.getItem("token") ?
    <Router>
      <div className="width-[100vw] height-[100vh] bg-primary flex align-items-center">
        <Sidebar />
        <Routes>
            <Route path="/" element={<Profile />}/>
            <Route path="top-artists" element={<TopArtists />}/>
            <Route path="top-tracks" element={<TopTracks />}/>
            <Route path="recent" element={<Recent />}/>
            <Route path="playlists" element={<Playlists />}/>
        </Routes>
      </div>
    </Router> :
    <Login />
  );
}
