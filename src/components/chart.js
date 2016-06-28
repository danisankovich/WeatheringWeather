import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
  if(Array.isArray(data)) {
    return _.round(_.sum(data)/data.length);
  }
  else {
    console.log('data not an array', typeof data)
  }
}

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>5 Day Average: {average(props.data)} {props.units}</div>
    </div>
  )
}
