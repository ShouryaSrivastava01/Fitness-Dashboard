import React from 'react';
import DisplayUser from './DisplayUser';
import '../style/dashboard.css'
import steps from '../image/steps.svg'
import workout from '../image/workout.svg'
import nutrition from '../image/nutrition.svg'

export default function Dashboard() {

    return (
        <div className="dash">
            <div className="menu">
                <span className="detail "></span>
                <span className=" feature">
                    <img src={steps} alt="" />&nbsp;&nbsp;Steps
                </span>
                <span className="feature">
                    <img src={workout} alt="" />
                    &nbsp;&nbsp;Workout</span>
                <span className="feature">
                    <img src={nutrition} alt="" />
                    &nbsp;&nbsp;Nutrition
                </span>
            </div>
            <div className="users">
                <DisplayUser />
            </div>
        </div>
    )
}