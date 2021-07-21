import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef()
    useEffect(()=>{
        init(textRef.current, {
            showCursor: false,
            strings: ["Frontend Developer", "Backend Developer", "Full-Stack Developer"]
        })
    },[])
    return (
        <div className="intro" id="intro"> 
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/afeezdev.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Afeez Abdulyekeen</h1>
                    <h3>Freelance <span ref={textRef}>Front Developer</span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
