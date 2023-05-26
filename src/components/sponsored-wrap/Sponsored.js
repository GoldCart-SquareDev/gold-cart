import React from "react";
import { SponsoredParent, ImageWrapper, SponsoredCompanies } from "./sponsored.styles";
import sponsoredcard from "../../assets/sponsoredcard.png";
import oraimocard from "../../assets/oraimocard.png";
import apple from "../../assets/apple.png";
import hp from "../../assets/hp.png";
import samsung from "../../assets/samsung.png";
import mi from "../../assets/mi.png";
import lenovo from "../../assets/lenovo.png";
import oraimo from "../../assets/oraimo.png";


const Sponsored = () => {
    return(

        <SponsoredParent>
  <h1>Sponsored Products</h1>
  <ImageWrapper>
<img src={sponsoredcard} alt="sponsoredcard" />
<img src={oraimocard} alt="oraimocard" />
<img src={sponsoredcard} alt="sponsoredcard" />
<img src={oraimocard} alt="oraimocard" />


  </ImageWrapper>
  <h1> Shop your favorite brand</h1>
  <SponsoredCompanies>
    
<img src= {apple} alt= "apple"/>
<img src={mi} alt="mi"/>
<img src={samsung} alt="samsung"/>
<img src={oraimo} alt="oraimo"/>
<img src={hp} alt="hp"/>
<img src={lenovo} alt="lenovo"/>

  </SponsoredCompanies>
        </SponsoredParent>
    )




}

export default Sponsored;