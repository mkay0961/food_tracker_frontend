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
    layout: {
            padding: {
                bottom: 10
            }
        },
    tooltips: {
        titleFontSize: 50,
        bodyFontSize: 50,
      },
    legend: {labels: {
                fontSize: 40
            }},
    maintainAspectRatio: false ,
    scales: {
      yAxes: [{ ticks: { fontSize: 40,
                beginAtZero: true,
                precision:0 }}],
      xAxes: [{ ticks: { fontSize: 30, maxRotation:45, minRotation:45 } }]
    }

  }}

  render() {
    return (
      <div className="chartsize" >

        <Bar height={1000} options={this.options()} data={this.data()}/>

      </div>
    )
  }

}

export default Chart
