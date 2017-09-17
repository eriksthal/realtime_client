import React from 'react'
import Button from '../../components/Button/button'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
      {name: 'Page A', pv: 2400, amt: 2400},
      {name: 'Page B', pv: 1398, amt: 2210},
      {name: 'Page C', pv: 9800, amt: 2290},
      {name: 'Page D', pv: 3908, amt: 2000},
      {name: 'Page E', pv: 4800, amt: 2181},
      {name: 'Page F', pv: 3800, amt: 2500},
      {name: 'Page G', pv: 4300, amt: 2100},
];

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state={data:[
          {name: 'Page A', pv: 2400, amt: 2400},
          {name: 'Page B', pv: 1398, amt: 2210},
          {name: 'Page C', pv: 9800, amt: 2290},
          {name: 'Page D', pv: 3908, amt: 2000},
          {name: 'Page E', pv: 4800, amt: 2181},
          {name: 'Page F', pv: 3800, amt: 2500},
          {name: 'Page G', pv: 4300, amt: 2100}
    ]};
  }

  addInfo(){
    this.setState({data:
    [
          {name: 'Page A', pv: 2400, amt: 2400},
          {name: 'Page B', pv: 1398, amt: 2210},
          {name: 'Page C', pv: 9800, amt: 2290},
          {name: 'Page D', pv: 3908, amt: 2000},
          {name: 'Page E', pv: 4800, amt: 2181},
          {name: 'Page F', pv: 3800, amt: 2500},
          {name: 'Page G', pv: 4300, amt: 2100},
          {name: 'Page K', pv: 4100, amt: 2600}
    ]});
    console.log(this.state.data);
  }
  render() {
    return(
      <div>
        <button onClick={this.addInfo.bind(this)}>Crank</button>
        <LineChart width={600} height={300} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
          </LineChart>
      </div>
    );
  }
} 

export default About
