import React from 'react'
import { useState } from 'react'
import '../style/nutribarchart.css'

export default function NutriBarChart({data}) {
    // pre-calculation for bar graph in macro details of nutrients
    const [proteinStat, setProteinStat]=useState((90/data.protein['target'])*data.protein['consumed'])
    const [fatStat, setFatStat]=useState((90/data.fat['target'])*data.fat['consumed'])
    const [carbStat, setCarbStat]=useState((90/data.carb['target'])*data.carb['consumed'])
    return (
        <div className="bar-body">
            <div className="protein nutrients">
                <div className='heading'>

                    <span className="nutrient">PROTEIN</span>
                    <span className='quantity'>{data.protein['target']}g</span>
                </div>
                <div className='bar'>
                    <div className='status pink' style={{width:`${proteinStat}%`}}>.</div>
                    <div>{data.protein['consumed']}g</div>
                </div>
            </div>
            <div className="fat nutrients">
                <div className='heading'>

                    <span className="nutrient">FAT</span>
                    <span className='quantity'>{data.fat['target']}g</span>
                </div>
                <div className='bar'>
                    <div className='status blue' style={{width:`${fatStat}%`}}>.</div>
                    <div>{data.fat['consumed']}g</div>
                </div>
            </div>
            <div className="carb nutrients">
                <div className='heading'>

                    <span className="nutrient">Carb</span>
                    <span className='quantity'>{data.carb['target']}g</span>
                </div>
                <div className='bar'>
                    <div className='status yellow' style={{width:`${carbStat}%`}}>.</div>
                    <div>{data.carb['consumed']}g</div>
                </div>
            </div>
        </div>
    )
}