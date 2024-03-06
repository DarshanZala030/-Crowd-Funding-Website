const AddRecordModal = ({ handleChange, record }) => {

    const { type } = record 

    return (
        <>
            <div className="join">
                <input className="join-item btn" defaultChecked type="radio" name="options" aria-label="Income" value="Income" onClick={e => handleChange(e, "type")} />
                <input className="join-item btn" type="radio" name="options" aria-label="Expense" value="Expense" onClick={e => handleChange(e, "type")} />
            </div>
            <form className="form-control my-5">
                <div className="flex">
                    <div className="basis-1/2">
                        <p>Amount:</p>
                        <input type="number" placeholder="Type here" className={`input input-bordered ${type === "Income" ? "input-success" : "input-error"} w-full max-w-xs`} onChange={(e) => handleChange(e, "amount")}/>
                        <div className="mt-4">
                            <p>Category:</p>
                            <select className={`select ${type === "Income" ? "select-success" : "select-error"} w-full max-w-xs`} onChange={(e) => handleChange(e, "category")}>
                                <option selected disabled hidden>--Select--</option>
                                <option value="food">Food distribution</option>
                                <option value="ngo">NGO</option>
                                <option value="startup">Startup</option>
                               
                                <option value="investment">Investment</option>
                                
                                
                                <option value="scholarship">Scholarship And Fellowship</option>
                                
                            </select>
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="basis-1/2">
                        <p>{type === "Income" ? "Payer" : "Payee"}:</p>
                        <input type="text" placeholder="Type here" className={`input input-bordered ${type === "Income" ? "input-success" : "input-error"} w-full max-w-xs`} onChange={(e) => handleChange(e, "name")}/>
                        <p className="mt-4">Note:</p>
                        <textarea className={`textarea ${type === "Income" ? "textarea-success" : "textarea-error"} w-[20rem] max-w-xs`} onChange={(e) => handleChange(e, "note")}></textarea>
                        <div className="mt-4">
                            <p>Payment Status:</p>
                            <select className={`select ${type === "Income" ? "select-success" : "select-error"} w-full max-w-xs`} onChange={(e) => handleChange(e, "paymentStatus")}>
                                {/* <option defaultValue={} hidden value="Cleared">Cleared</option> */}
                                <option selected disabled hidden>--Select--</option>
                                <option value="Cleared">Cleared</option>
                                <option value="Uncleared">Uncleared</option>
                            </select>
                        </div>
                        <p className="mt-4">Date:</p>
                        <input type="date" placeholder="Type here" className={`input input-bordered ${type === "Income" ? "input-success" : "input-error"} w-full max-w-xs`} onChange={(e) => handleChange(e, "date")}/>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddRecordModal
