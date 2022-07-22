import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';


export default function NutriChart({ data, calorie }) {
  const dataMock = [
    { title: 'Two', value: parseInt(data.fat['consumed']), color: '#03C7FC' }, //fat
    { title: 'Three', value: parseInt(data.carb['consumed']), color: '#F5C90F' }, //carb
    { title: 'One', value: parseInt(data.protein['consumed']), color: '#F45C84' }, //protein
  ];

  return (

    <PieChart data={dataMock} lineWidth={20} label={() => calorie}
      labelStyle={{
        fontSize: '25px',
        fill: '#FFFFFF',
      }}
      labelPosition={0} />
  )



}


