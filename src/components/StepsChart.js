import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


import 'react-circular-progressbar/dist/styles.css';

export default function StepsChart(props) {
    const percentage = (props.steps / props.target) * 100;
    return (
        <CircularProgressbar value={percentage} strokeWidth={10} text={<tspan >{props.steps}</tspan>} styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '25px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(127, 209,140, ${percentage / 100})`,
            textColor: '#efefef',
            trailColor: '#d6d6d6',
            backgroundColor: '#0cfd7c',
        })} />
    )
}