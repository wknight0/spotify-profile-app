import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

    return (
      <div className="sidebar-screen">
        <ul className="sidebar-container1 items-center text-center justify-center bg-tertiary w-[100%] h-[70px] grid grid-cols-5 font-medium top-[calc(100%-70px)] xs:grid mm:hidden fixed">
          <div>
            <NavLink to="/" className={({ isActive }) => 
            isActive ? "activeNav" : undefined}>
              <li id="profile" className="card py-3 brightness-75 border-t-4 border-tertiary hover:brightness-100 hover:bg-primary hover:border-secondary">
                <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11217)"> <path d="M4 18C4 15.7908 5.79086 14 8 14H16C18.2091 14 20 15.7908 20 18V18C20 19.1045 19.1046 20 18 20H6C4.89543 20 4 19.1045 4 18V18Z" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round"></path> <circle cx="12" cy="6.99997" r="3" stroke="#ffffff" strokeWidth="2.5"></circle> </g> <defs> <clipPath id="clip0_429_11217"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                <p className="text-[11px] leading-none mt-1">Profile</p>
              </li>
            </NavLink>
          </div>
                
          <NavLink to="top-artists" className={({ isActive }) => 
          isActive ? "activeNav" : undefined}>
            <li id="top-artists" className="card py-3 brightness-75 border-t-4 border-tertiary hover:brightness-100 hover:bg-primary hover:border-secondary">
              <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11111)"> <circle cx="12" cy="7" r="3" stroke="#ffffff" strokeWidth="2.5"></circle> <circle cx="18" cy="18" r="2" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></circle> <path d="M12.3414 20H6C4.89543 20 4 19.1046 4 18C4 15.7909 5.79086 14 8 14H13.5278" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M20 18V11L22 13" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11111"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
              <p className="text-[11px] leading-none mt-1">Top Artists</p>
            </li>
          </NavLink>
          <NavLink to="top-tracks" className={({ isActive }) => 
          isActive ? "activeNav" : undefined}>
            <li id="top-tracks" className="card py-3 brightness-75 border-t-4 border-tertiary hover:brightness-100 hover:bg-primary active:brightness-100 hover:border-secondary">
              <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11134)"> <circle cx="6" cy="18" r="3" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></circle> <path d="M9 18V5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 3L9 5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"></path> <path d="M21 7L9 9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"></path> <circle cx="18" cy="16" r="3" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></circle> <path d="M21 16V3" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11134"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
              <p className="text-[11px] leading-none mt-1">Top Tracks</p>
            </li>
          </NavLink>
          <NavLink to="recent" className={({ isActive }) => 
          isActive ? "activeNav" : undefined}>
            <li id="recent" className="card py-3 brightness-75 border-t-4 border-tertiary hover:brightness-100 hover:bg-primary active:brightness-100 hover:border-secondary">
              <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11075)"> <path d="M5.63606 18.3639C9.15077 21.8786 14.8493 21.8786 18.364 18.3639C21.8787 14.8492 21.8787 9.1507 18.364 5.63598C14.8493 2.12126 9.15077 2.12126 5.63606 5.63598C3.87757 7.39447 2.99889 9.6996 3.00002 12.0044L3 13.9999" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M1 11.9999L3 13.9999L5 11.9999" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 7.99994L11 12.9999L16 12.9999" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11075"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
              <p className="text-[11px] leading-none mt-1">Recent</p>
            </li>
          </NavLink>
          <NavLink to="playlists" className={({ isActive }) => 
          isActive ? "activeNav" : undefined}>
            <li id="playlists" className="card py-3 brightness-75 border-t-4 border-tertiary hover:brightness-100 hover:bg-primary active:brightness-100 hover:border-secondary">
              <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11182)"> <path d="M6 6L3 7.73205L3 4.26795L6 6Z" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round"></path> <path d="M3 12L21 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M10 6L21 6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 18L21 18" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11182"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
              <p className="text-[11px] leading-none mt-1">Playlists</p>
            </li>
          </NavLink>
        </ul>

        <div className="sidebar-container2 w-[100px] h-[100%] xxs:hidden mm:block">
          <div className="fixed xxs:hidden mm:block">
            <div className="flex flex-col py-6 min-h-screen items-center text-center justify-between bg-tertiary w-[100px] h-[100vh]">
              <div className="order-1 my-6">
                <a id="svg1" href="https://open.spotify.com/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" version="1.1" viewBox="0 0 168 168">
                    <path fill="#1ED760" d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"/>
                  </svg>
                </a>
              </div>
              
              <div className="order-2 font-medium text-[12px] w-full ">
                <ul>
                  <NavLink to="/" className={({ isActive }) => 
                  isActive ? "activeNav" : undefined}>
                    <li id="profile" className="card py-3 brightness-75 border-l-4 border-tertiary hover:brightness-100 hover:bg-primary hover:border-secondary">
                      <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11217)"> <path d="M4 18C4 15.7908 5.79086 14 8 14H16C18.2091 14 20 15.7908 20 18V18C20 19.1045 19.1046 20 18 20H6C4.89543 20 4 19.1045 4 18V18Z" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round"></path> <circle cx="12" cy="6.99997" r="3" stroke="#ffffff" strokeWidth="2.5"></circle> </g> <defs> <clipPath id="clip0_429_11217"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                      <p className="mt-1">Profile</p>
                    </li>
                  </NavLink>
                  <NavLink to="top-artists" className={({ isActive }) => 
                  isActive ? "activeNav" : undefined}>
                    <li id="top-artists" className="card py-3 brightness-75 border-l-4 border-tertiary hover:brightness-100 hover:bg-primary hover:border-secondary">
                      <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11111)"> <circle cx="12" cy="7" r="3" stroke="#ffffff" strokeWidth="2.5"></circle> <circle cx="18" cy="18" r="2" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></circle> <path d="M12.3414 20H6C4.89543 20 4 19.1046 4 18C4 15.7909 5.79086 14 8 14H13.5278" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M20 18V11L22 13" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11111"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                      <p className="mt-1">Top Artists</p>
                    </li>
                  </NavLink>
                  <NavLink to="top-tracks" className={({ isActive }) => 
                  isActive ? "activeNav" : undefined}>
                    <li id="top-tracks" className="card py-3 brightness-75 border-l-4 border-tertiary hover:brightness-100 hover:bg-primary active:brightness-100 hover:border-secondary">
                      <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11134)"> <circle cx="6" cy="18" r="3" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></circle> <path d="M9 18V5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 3L9 5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"></path> <path d="M21 7L9 9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"></path> <circle cx="18" cy="16" r="3" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></circle> <path d="M21 16V3" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11134"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                      <p className="mt-1">Top Tracks</p>
                    </li>
                  </NavLink>
                  <NavLink to="recent" className={({ isActive }) => 
                  isActive ? "activeNav" : undefined}>
                    <li id="recent" className="card py-3 brightness-75 border-l-4 border-tertiary hover:brightness-100 hover:bg-primary active:brightness-100 hover:border-secondary">
                      <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11075)"> <path d="M5.63606 18.3639C9.15077 21.8786 14.8493 21.8786 18.364 18.3639C21.8787 14.8492 21.8787 9.1507 18.364 5.63598C14.8493 2.12126 9.15077 2.12126 5.63606 5.63598C3.87757 7.39447 2.99889 9.6996 3.00002 12.0044L3 13.9999" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M1 11.9999L3 13.9999L5 11.9999" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 7.99994L11 12.9999L16 12.9999" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11075"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                      <p className="mt-1">Recent</p>
                    </li>
                  </NavLink>
                  <NavLink to="playlists" className={({ isActive }) => 
                  isActive ? "activeNav" : undefined}>
                    <li id="playlists" className="card py-3 brightness-75 border-l-4 border-tertiary hover:brightness-100 hover:bg-primary active:brightness-100 hover:border-secondary">
                      <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11182)"> <path d="M6 6L3 7.73205L3 4.26795L6 6Z" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round"></path> <path d="M3 12L21 12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M10 6L21 6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 18L21 18" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11182"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
                      <p className="mt-1">Playlists</p>
                    </li>
                  </NavLink>
                </ul>
              </div>
      
              <div className="github order-3 w-11 mb-6 brightness-75">
                <a id="svg2" href="https://github.com/wknight0" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g  strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" fillRule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clipRule="evenodd"></path></g></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }