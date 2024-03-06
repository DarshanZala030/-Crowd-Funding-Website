import { useState } from "react"
import AddRecordModal from "./AddRecordModal"

const AddRecordBtn = () => {
    const [record, setRecord] = useState({ 
        type: "Income"
     })

    const handleChange = (e, field) => {
        setRecord({
            ...record,
            [field]: e.target.value
        })
    }

    const handleSubmit = async () => {
        // console.log(record)
        const recordItem = await fetch("http://localhost:4000/api/v1/record", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(record)
        })
        // setRecLen(p => p += 1)
        console.log(recordItem)
    }

    return (
        <div className="flex bg-base-100 justify-between py-3 md:flex-row flex-col-reverse">
            <div className="md:ml-[8rem] m-auto">
                <select className="select select-bordered max-w-xs">
                    <option defaultChecked>September 23</option>
                </select>
            </div>
            <div className="md:mr-[8rem] m-auto">
                <button className="btn btn-success" onClick={() => document.getElementById('my_modal_5').showModal()}>Add Record</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box sm:max-w-4xl">
                        <h3 className="font-bold text-lg">Add Record</h3>
                        <div className="py-4"><AddRecordModal handleChange={handleChange} record={record}/></div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-neutral mx-4" onClick={handleSubmit}>Add Fund</button>
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}

export default AddRecordBtn
