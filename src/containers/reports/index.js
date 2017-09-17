import React from 'react'
import Button from '../../components/Button/button'
import { fire, pushData } from '../../utilities/utilities'
import {BarChart, Bar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

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
    this.state={data:[], position: 5};
    }

    componentWillMount(){
        /* Create reference to messages in Firebase Database */
        let ordersRef = fire.database().ref('graph').orderByKey().limitToLast(100);
        ordersRef.on('value', snapshot => {
        /* Update React state when message is added at Firebase Database */
        let order = { text: snapshot.val(), id: snapshot.key };
        console.log(order);
        this.setState({ data: order.text });
        })
    }

    render() {
        const data = [
            {name: 'Page A', uv: 4000, female: 2400, male: 2400},
            {name: 'Page B', uv: 3000, female: 1398, male: 2210},
            {name: 'Page C', uv: 2000, female: 9800, male: 2290},
            {name: 'Page D', uv: 2780, female: 3908, male: 2000},
            {name: 'Page E', uv: 1890, female: 4800, male: 2181},
            {name: 'Page F', uv: 2390, female: 3800, male: 2500},
            {name: 'Page G', uv: 3490, female: 4300, male: 2100},
        ];
    return(
        <div>
            <LineChart width={600} height={300} data={this.state.data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
            <BarChart width={600} height={300} data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="female" stackId="a" fill="#8884d8" />
       <Bar dataKey="male" stackId="a" fill="#82ca9d" />
       <Bar dataKey="uv" fill="#ffc658"/>
      </BarChart>
        </div>
    );
    }
}

export default About
