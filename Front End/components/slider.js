import React, { Component } from "react";
// import Slider from "react-slick";
import Image from 'next/image'


export default class MySlider extends Component {
    render() {
        const imgPaths = [
            "ilham.png",
            "insanul.png",
            "iqbal.png",
            "jamal.png",
            "khusnul.png",
        ]
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                {/* <Slider {...settings}>
                    {imgPaths.map(e => <div><Image src={`/img/${e}`} height={144} width={144} /></div>)}
                </Slider> */}
                <div className="h-96 w-screen bg-mypurple-dark flex justify-center items-center">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
