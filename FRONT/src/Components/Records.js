import BalanceCard from "./BalanceCard"
import RecordsTable from "./RecordsTable"
import consumerContext from "../Context/consumerContext"
import { useContext, useEffect } from "react"
import AddRecordBtn from "./AddRecordBtn"
import { useNavigate } from "react-router-dom"

const Records = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if(!(localStorage.jwt)){
      navigate("/")

    }
  })

    const { records } = useContext(consumerContext)

  return (
    <>
        <AddRecordBtn />
        <RecordsTable records={records} />
    </>
  )
}

export default Records
