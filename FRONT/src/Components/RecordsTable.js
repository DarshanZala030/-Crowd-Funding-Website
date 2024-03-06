import { FaTrash } from "react-icons/fa"
import consumerContext from "../Context/consumerContext"
import { useContext } from "react"

const RecordsTable = ({ records }) => {
    // const { name, type, amount, category, paymentStatus, date } = record
    const { handleDelete } = useContext(consumerContext)
                                
    if (records.length === 0) {
        return (
            <>
                <div className="flex justify-center items-center font-bold text-5xl h-[34rem]">No Record Available!</div>
            </>
        )
    }
    return (
        <div className="overflow-x-auto w-[90%] m-auto mt-4 rounded-xl mb-5 min-h-[32rem]">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-lg bg-zinc-400 text-gray-200">
                        <th></th>
                        <th>Payee/Payer</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Payment Status</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {records.map((item, index) => {
                        return (
                            <tr className={item.type === "Income" ? "bg-green-300" : "bg-red-300"} key={records._id}>
                                <th>{index +1}</th>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>{item.type}</td>
                                <td>{item.category}</td>
                                <td>{item.paymentStatus}</td>
                                <td>{item.date.substring(0, 10)}</td>
                                <td className="btn btn-sm mt-1" onClick={()=>handleDelete(item._id)}><FaTrash /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default RecordsTable
