import { useContext } from "react"
import consumerContext from "../Context/consumerContext"

const BalanceCard = () => {
    const { balance, income, expense } = useContext(consumerContext)
    // console.log(balance)

    return (
        <>
            <div className="m-auto flex">
                <div className="stats bg-primary text-primary-content m-auto">

                    <div className="stat text-xl font-bold">
                        <div className="stat-title">Fund Available</div>
                        <div className="stat-value">₹{balance}</div>
                    </div>

                    <div className="stat text-xl font-bold">
                        <div className="stat-title">Fund raised</div>
                        <div className="stat-value">₹{income}</div>
                    </div>
                    <div className="stat text-xl font-bold">
                        <div className="stat-title">Fund released</div>
                        <div className="stat-value">₹{expense}</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BalanceCard
