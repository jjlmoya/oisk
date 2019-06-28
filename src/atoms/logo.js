import React from "react"
import getImage from "../services/images.service";


const Image = ({src}) => {
    console.log(src);
    console.log(getImage);
    const img = getImage(src);
    return (
        <picture class="a-text--center  a-pad-0">
            <img class="a-image og-banner-screen__image a-image--cover a-mar-auto" src={img}/>
        </picture>
    )
};
export default Image
