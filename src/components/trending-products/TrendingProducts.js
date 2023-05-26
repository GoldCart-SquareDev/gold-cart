import React from "react";
import { TrendingParent,ImageContainer, ImgContainer } from "./trending.products.styles";
import earpiece from "../../assets/earpiece.png";
import product from "../../assets/product.png";



const TrendingPost = () => {

    return(

   <TrendingParent>
    <h1>Trending Products</h1>
<ImageContainer>
<img src={earpiece} alt="earpiece"/>
<img src={product} alt="product"/>
<img src={product} alt="product"/>
<img src={product} alt="product"/>
<img src={product} alt="product"/>
<img src={earpiece} alt="earpiece"/>
</ImageContainer>
<ImgContainer>
<img src={product} alt="product"/>
<img src={product} alt="product"/>
<img src={earpiece} alt="earpiece"/>
<img src={product} alt="product"/>
<img src={earpiece} alt="earpiece"/>
<img src={product} alt="product"/>
</ImgContainer>




</TrendingParent>


)
}

export default TrendingPost;