
import mainvanity from './mainvanity.jpg';
import './App.css';
import YouTubeApi from './YouTubeApi';
import NavBar from './nav/NavBar';
import SignUpForm from  './auth/SignUpForm.js';
import LoginForm from './auth/LoginForm.js';
import MainPageOut from './home/MainPageOut.js';
import MainPageIn from './home/MainPageIn.js';
import NewSearch from './search/NewSearch.js';
import CarouselView from './common/CarouselView.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import { CardImg, Card, CardImgOverlay } from 'reactstrap';


function App() {
  const currentUser = true;
  const login = false;
  const signup = true;
  const token = true;
  const [videos, setVideos] = useState();


  async function externalAPICall(endpoint, data, method){
    let res = await YouTubeApi.loadClient();
    
    console.log(data.category+"data.category")
    let test = await YouTubeApi.execute("", data, );
    console.log("test completed")
    console.log(test.result.items)
    console.log("testing below is one array")
    console.log(test.result.items)
    setVideos(test.result.items);
    console.log(videos)
    return {success: true};
  }
  //   try{
  //     let res = await YouTubeApi.loadClient();
  //     console.log(res);
  //     console.log(data.category+"data.category")
  //     let test = await YouTubeApi.execute("", data, );
  //     console.log(test)
  //     return {success: true};
  //   }catch(error){
  //     console.error("Testing YouTube API for running it at the start.")
  //   }
  // }

  function logout(){
    console.log("UpdateFunction:SignUpForm/logout For testing purposes only")
  }

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar currentUser={currentUser} logout={logout}/>
          <main className="mainbackground" >
            <Card inverse>
              <CardImg
                alt="Card Image Cap"
                src={mainvanity}>
              </CardImg>
              <CardImgOverlay>
                <Routes>
                  <Route path="/" element={<MainPageOut login={login} signup={signup} currentUser={currentUser}/>}/>
                  {/* <Route path="/mainpagein" element={<MainPageIn login={login} signup={signup} currentUser={currentUser}/>}/> */}
                  <Route path="/signup" element={<SignUpForm login={login} signup={signup} currentUser={currentUser}/>}/>
                  <Route path="/login" element={<LoginForm login={login} signup={signup} currentUser={currentUser}/>}/>
                  <Route path="/newsearch" element={<NewSearch login={login} signup={signup} currentUser={currentUser} externalAPICall={externalAPICall} videos={videos}/>}/>
                  {/* <Route path="/history" element={<History login={login} signup={signup} currentUser={currentUser}/>}/> */}
                  <Route path="/carousel" element={<CarouselView login={login} signup={signup} currentUser={currentUser} externalAPICAl={externalAPICall} videos={videos}/>}/>
                </Routes>
              </CardImgOverlay>
            </Card>
          </main>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

{/* <iframe maxwidth="560" maxheight="315" src="https://www.youtube.com/embed/PvpIWqVKqnU
" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
