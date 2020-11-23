import React , { useRef , useEffect } from 'react';

import sound from './sound/airplane-fly-by-01a.mp3'
import useWebAnimations from "@wellyshen/use-web-animations";

function Content() {

    const { ref , playState } = useWebAnimations({
        
        keyframes: [
            { transform: 'translate(0, 0)' },
            { transform: 'translate(1000px , -200px)' },
            
         ],
          timing: {
            iterations: Infinity,
            duration: 10000,
          }
    });
    
    console.log("pl" , playState)

   const correctSound = useRef()
        useEffect(()=>{
            if (correctSound.current !== null) {
                correctSound.current.play()
              }
        },[])
    return (
        <div>
            <button onClick = {() => correctSound.current.play()}>Play</button>
            <audio ref={correctSound} src={sound}></audio>
            <div className="sky">
               
                
                <div className='trees'>
                    <img src='images/dsfsdf.jpg' alt='trees' />
                </div>
                <div className='road' >
                    <img src='http://hmcaranimation.surge.sh/Imagesandsound/track.png' alt='road' />
                </div>
                <div className='car' ref={ref}>
                    <img
                        alt='road'
                        src='images/plane.gif'
                       
                    />
                </div>
                

            </div>


        </div >
    )
}

export default Content;