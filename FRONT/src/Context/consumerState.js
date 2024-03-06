import { useEffect, useReducer, useState } from "react"
import consumerContext from "./consumerContext"

const reducer = (state, action) => {
    if(action.type === "RECORDS_DATA"){
        return {...state,  records: action.payload.data}
    }
    if(action.type === "RECORDS_AMOUNT"){
        const tempIncome = state.records.filter((item) => item.type === "Income")
        const tempExpense = state.records.filter((item) => item.type === "Expense")

        let totalIncome = 0
        let totalExpense = 0
        tempIncome.map((item) => totalIncome += item.amount)
        tempExpense.map((item) => totalExpense += item.amount)

        return {
            ...state,
            expense: totalExpense,
            income: totalIncome,
            balance: totalIncome - totalExpense
        }
    }

    return {...state}
}

const initialState = {
    expense: 0,
    balance: 0,
    income: 0,
    records: []
}

const ConsumerState = (props) => {
    
    const fetchDetails = async () => {
        console.log("dwad")
        const records = await fetch(`${host}/api/v1/record`, {
            method: "GET"
        })
        const result = await records.json()
        dispatch({ type: "RECORDS_DATA", payload: result })
        dispatch({ type: "RECORDS_AMOUNT", payload: state.records })
    }
    
    const host = "http://localhost:4000"
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleDelete = async (id) => {
        await fetch(`${host}/api/v1/record/${id}`, {
            method: "DELETE"
        })
    }
    
    useEffect(() => {
        fetchDetails()
        // expenseAndIncome()
        // eslint-disable-next-line
    }, [state.records])
    
    return(
        <consumerContext.Provider value={{ ...state, fetchDetails, handleDelete }}>
            {props.children}
        </consumerContext.Provider>
    )
}

export default ConsumerState