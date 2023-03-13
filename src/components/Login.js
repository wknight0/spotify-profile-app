import React from 'react';
import { loginEndpoint } from '../spotify';

const Login = () => {

  return (
    <section>

      <div className="flex flex-row p-6 min-h-screen items-center text-center justify-center w-[100vw] bg-primary">
        <div>
          <h1 className="leading-10 text-[32px] font-Black">Spotify Profile Stats</h1>

          <div className="m-7">
            <a href={loginEndpoint} className="text-[16px] text-center font-Black text-white border-0 bg-secondary rounded-[30px] py-4 px-9 tracking-widest leading-1 hover:brightness-110">LOG IN TO SPOTIFY</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;