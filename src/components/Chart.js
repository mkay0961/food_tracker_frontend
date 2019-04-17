import React, {Component} from 'react'
import { Bar } from 'react-chartjs-2'


class Chart extends Component {


  data = () => {
    return {
        labels:  Object.keys(this.props.data[0]),
        datasets: this.getDataSet()
      }
  }

  getDataSet = () => {
    let rtnArray = []
    this.props.data.forEach((item, i)=>{
      let obj = {
        label: (i === 0? "Wasted" : "All Food"),
        backgroundColor: (i === 0? 'brown' : "grey"),
        data: []
      }
      Object.keys(item).forEach((key)=>{
          obj["data"].push(item[key])
      })
      rtnArray.push(obj)
    })
    return (rtnArray)
  }

  options = () => {return {

    tooltips: {
        titleFontSize: 100,
        bodyFontSize: 100,
      },
    legend: {labels: {
                fontSize: 50
            }},
    maintainAspectRatio: false ,
    scales: {
      yAxes: [{ ticks: { fontSize: 40,
                beginAtZero: true,
                precision:0 }}],
      xAxes: [{ ticks: { fontSize: 40 } }]
    }

  }}

  render() {
    return (
      <div>
        <Bar height={700} options={this.options()} data={this.data()}/>
      </div>
    )
  }

}

export default Chart
