import React, { useEffect } from 'react';
import { useState } from 'react'
import profile from '../image/profile.png'
import eventSchedule from '../image/event-schedule.svg'
import alert from '../image/alert.svg'
import performedDate from '../image/performedDate.svg'
import arrow from '../image/arrow.svg'
import exclam from '../image/exclamation.svg'
import '../style/user.css'


import NutriChart from './NutriChart';
import StepsChart from './StepsChart';
import NutriBarChart from './NutriBarChar';

export default function User(props) {

    const [steps, setSteps] = useState(parseInt(props.data['stepsWalked']))
    const [stepsTarget, setStepsTarget] = useState(parseInt(props.data['stepsTarget']))
    const [calorie, setCalorie] = useState(parseInt(props.data['calorieIntake']))
    const [calorieTarget, setCalorieTarget] = useState(parseInt(props.data['calorieTarget']))
    const [feedback, setFeedback] = useState(props.data['feedback'])

    // change the content of arrow button in workout section
    const [btnContent, setBtnContent] = useState(<a href={props.data['userId'] + "/workout"}><img src={arrow} alt="" /></a>)
    const [color, setColor] = useState('#101317')

    // nutritients
    const [nutri, setNutri] = useState({
        protein: {
            consumed: props.data['proteinConsumed'],
            target: props.data['proteinTarget'],
        },
        carb: {
            consumed: props.data['carbConsumed'],
            target: props.data['carbTarget'],
        },
        fat: {
            consumed: props.data['fatConsumed'],
            target: props.data['fatTarget'],
        }
    })

    // feedback entry in json handler and performed date === scheduled date
    useEffect(() => {
        if (props.data['feedback'] === true) {
            setBtnContent(<img src={exclam} alt="" />)
            setColor("red")
        }

        const d1 = new Date(props.data['performedDate'])
        const d2 = new Date(props.data['scheduledDate'])
        if (d1.valueOf() === d2.valueOf()) {
            document.getElementById(props.data['userId']).style.backgroundColor = 'red'
            setBtnContent(<img src={exclam} alt="" />)
            setColor("red")
        }

    }, [])



// event listenr on the nutrients pie chart
    const nutriDetails = document.querySelectorAll('.nutri-chart');
    nutriDetails.forEach(element => {
        element.addEventListener('mouseenter', () => {
            const box = document.querySelector(`.nutri-details[data-id="${element.dataset.key}"]`)
            box.style.display = ""
        })
        element.addEventListener('mouseleave', () => {
            const box = document.querySelector(`.nutri-details[data-id="${element.dataset.key}"]`)
            box.style.display = "none"
        })
    })


    return (

        <div className='user'>
            <div className="profile">
                <div>
                    <img src={profile} alt="" />
                </div>
                <div className='user-details'>
                    <span>{props.data['name']}</span>
                    <span>{props.data['email']}</span>
                </div>
            </div>
            <div className="steps">
                <div className="steps-chart">
                    <StepsChart steps={steps} target={stepsTarget} />
                </div>
                <div>
                    <button className='btn' onClick={() => setStepsTarget(stepsTarget + 500)}>+</button>
                    <span className="chart-data">
                        <strong>{(stepsTarget / 1000).toFixed(1)}K</strong>
                        <span>target</span>
                    </span>
                    <button className='btn' onClick={() => setStepsTarget(stepsTarget - 500)}>-</button>
                </div>

            </div>
            <div className="workout">
                <div className='outer'>
                    <div className='date-style'><img src={performedDate} alt="" style={{ height: "1rem" }} />{props.data['performedDate']}</div>
                    <div className='date-style' id={props.data['userId']}><img src={eventSchedule} alt="" />
                        {props.data['scheduledDate']}</div>
                </div>
                <button className='arrow-btn' style={{ backgroundColor: color }}>{btnContent}</button>
            </div>
            <div className="nutrition">
                <div className="nutrition-div nutri-chart" data-key={props.data['userId']}>
                    <NutriChart data={nutri} calorie={calorie} />
                </div>
                <div className='nutrition-div'>
                    <button className='btn' onClick={() => setCalorieTarget(calorieTarget + 100)}>+</button>
                    <span className='chart-data'>
                        <strong>{(calorieTarget / 1000).toFixed(1)}K</strong>
                        <span>target</span>
                    </span>
                    <button className='btn' onClick={() => setCalorieTarget(calorieTarget - 100)}>-</button>
                </div>
                <div><button className='arrow-btn'><a href={props.data['userId'] + "/nutrition"}><img src={arrow} alt="" /></a></button></div>

                <div className='nutri-details' data-id={props.data['userId']} style={{ display: 'none' }}>

                    < NutriBarChart data={nutri}/>
                </div>

            </div>
            <div className="alert">
                <button ><img src={alert} alt="" /></button>
            </div>
        </div>
    )
}