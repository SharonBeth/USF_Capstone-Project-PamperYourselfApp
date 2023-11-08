import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, 
    Button, 
    Carousel, 
    CarouselItem, 
    CarouselControl, 
    CarouselIndicators, 
    CarouselCaption   
  } from "reactstrap";
import { render } from "react-dom";
import Video from '../search/Video';
import Example from '../Blanks/NewComponentStandard';



function CarouselView({externalAPICall, videos}) {
  console.log("CarouselViewComponent")
  console.log(videos[0].id.videoId)
  return(
  <div>
    <p>typying

    </p>

    <Video props="stuff" externalAPICall={externalAPICall} videos={videos}/>

  </div>
  )
  }

export default CarouselView;