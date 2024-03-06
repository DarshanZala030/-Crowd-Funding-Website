import AddRecordBtn from "./AddRecordBtn"
import BalanceCard from "./BalanceCard"
import consumerContext from "../Context/consumerContext"
import { Chart } from "react-google-charts"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if(!(localStorage.jwt)){
      navigate("/")

    }
  })

  const { records } = useContext(consumerContext)
  const [month, setMonth] = useState()
  // const [data, setData] = useState([["Date", "Income", "Expense"]])
  // const [pieDataIn, setPieDataIn] = useState([])
  // const [pieDataEx, setPieDataEx] = useState([])


  let data = [
    ["Date", "Income", "Expense"]
  ];

  let pieDataIn = []
  let pieDataEx = []


  // useEffect(() => {
  //   renderCharts()
  // }, [])

  records.map((item, index) => {
    let tempDate = item.date.substring(8, 10)
    let tempData = [tempDate, 0, 0]
    if (!(data[data.length - 1][0] === tempDate)) {
      data.push(tempData)
      // setData(p => p.push(tempData))
      // setData(p => [...p, tempData])
    }

    if (index === records.length - 1) {
      if (item.type === "Income") {
        data[data.length - 1][1] += item.amount
      }
      else {
        data[data.length - 1][2] += item.amount
      }
    }
    else {
      if (tempDate === (records[index + 1].date.substring(8, 10))) {
        if (item.type === "Income" && records[index + 1].type === "Income") {
          data[data.length - 1][1] += (item.amount + records[index + 1].amount)
        }
        else if (item.type === "Expense" && records[index + 1].type === "Expense") {
          data[data.length - 1][2] += (item.amount + records[index + 1].amount)
        }
        else if (item.type === "Income" && records[index + 1].type === "Expense") {
          data[data.length - 1][1] += item.amount
          data[data.length - 1][2] += records[index + 1].amount
        }
        else if (item.type === "Expense" && records[index + 1].type === "Income") {
          data[data.length - 1][2] += item.amount
          data[data.length - 1][1] += records[index + 1].amount
        }
      }
      else {
        if (item.type === "Income") {
          data[data.length - 1][1] += item.amount
        }
        else {
          data[data.length - 1][2] += item.amount
        }
      }
    }

    if (item.type === "Income") {
      if (pieDataIn.length === 0) {
        pieDataIn.push([item.category, item.amount])
        // setPieDataIn(p => p.push([item.category, item.amount]))
        // setPieDataIn(p => [...p, [item.category, item.amount]])
      }
      let flag = 0
      pieDataIn.map(e => {
        if (e[0] === item.category) {
          e[1] += item.amount
          flag = 1
        }
      })
      if (flag === 0) {
        pieDataIn.push([item.category, item.amount])
        // setPieDataIn(p => p.push([item.category, item.amount]))
        // setPieDataIn(p => [...p, [item.category, item.amount]])
      }
    }
    else {
      if (pieDataEx.length === 0) {
        pieDataEx.push([item.category, item.amount])
        // setPieDataEx(p => p.push([item.category, item.amount]))
        // setPieDataEx(p => [...p, [item.category, item.amount]])
      }
      let flag = 0
      pieDataEx.map(e => {
        if (e[0] === item.category) {
          e[1] += item.amount
          flag = 1
        }
      })
      if (flag === 0) {
        pieDataEx.push([item.category, item.amount])
        // setPieDataEx(p => p.push([item.category, item.amount]))
        // setPieDataEx(p => [...p, [item.category, item.amount]])
      }
    }
  })


  return (
    <>
      <BalanceCard />
      <AddRecordBtn />

      {records.length === 0 ? 
        <div className="flex justify-center items-center font-bold text-5xl h-[28rem]">No Record Available!</div> :
      <div className="chart-container flex justify-evenly">
        <Chart chartType="AreaChart" width="400px" height="400px" data={data} />
        <Chart chartType="Bar" width="400px" height="400px" data={data} />
        
      </div> }
    </>
  )
}

export default Dashboard
