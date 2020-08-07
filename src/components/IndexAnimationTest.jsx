// IndexAnimationTest

import React, {useState, useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import logo from './../static/img/background/logo.png'

const IndexAnimationTest = () => {

    const [shadow, setshadow] = useState([0, 0]);
    const [gardientPart, setGardient] = useState(0);
    const [cords, setCords] = useState([0, 0])

    const hoverzone = useRef(null);
    
    const hidercontrol = (event) => {
        
        if(hoverzone) {
            
            console.log('heh')
            const elemcords = hoverzone.current.getBoundingClientRect();
            const elemX = elemcords.x;
            const elemY = elemcords.y;
            const percent = (event.pageY- elemY)/14*10;
            // setshadow([ (elemY - event.pageY) * 1.5, (elemX - event.pageX + 90) * 1.5] )
            console.log(percent)
            setGardient(percent)
        }
        
        // console.log(shadow)
    }

    const dropcoord = () => {
        // setshadow([0, 0])
        setGardient(0)
    }

    // const style = {
    //     left: shadow[1],
    //     top: shadow[0],
    //     zIndex: 1,
    // }
    // const style = {zIndex: 2 ,transform: `translate(${shadow[1]* (-1)}px, ${shadow[0]* (-1)}px)` }
    const style = {zIndex: 2, 
        background: `linear-gradient(rgba(255, 255, 255, 0) , #ffff ${gardientPart*2.5}%, #ffff)`}
// {zIndex: 2 ,transform: `translate(${shadow[1]}px, ${shadow[0]}px)` }
  return (
    <div className="animtest">
        <div className="centerplacer" >
            <div className="centerWrapper">
            <div className="bg" />
        <div className="hoverzone" ref={hoverzone} onMouseMove={hidercontrol} onMouseLeave={dropcoord}/>
        <div className="hider" style={style}/>
        <div className="logo">

            <img src={logo} alt="" />
        </div>
            </div>
        
        {/* <img src={bgimg} alt="" srcset=""/> */}
        </div>
        
        <p>IndexAnimationTest</p>
    </div>
    );
};

export default IndexAnimationTest;
