import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  let navigate = useNavigate()

  const handleCreateAccount = async () => {
    const response = await fetch("http://localhost:4000/api/v1/users/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ name, email, password, confirmPassword: passwordConfirm })
    })
    const json = await response.json()
    if (json.status === "success") {
      localStorage.setItem("jwt", json.token)
      navigate("/dashboard")
    }

  }

  const handleLogin = async () => {
    const response = await fetch("http://localhost:4000/api/v1/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (json.status === "success") {
      localStorage.setItem("jwt", json.token)
      navigate("/dashboard")
    }
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="./dev-data/login_hero.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Login Now</h1>
              <p className="py-6">Welcome to our Crowd Funding Website . Here You can Raise Money & record the statements for the incomes & exprenses . </p>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="Email" className="input input-bordered" name='email' onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="Password" className="input input-bordered" name='password' onChange={e => setPassword(e.target.value)} />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover" onClick={() => document.getElementById('newUser').showModal()}>New User?</a>
              </label>
              <dialog id="newUser" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box sm:max-w-4xl">
                  <h3 className="font-bold text-lg">Create Account</h3>
                  <div className="py-4">
                    <form className="form-control my-1">
                      <p className='my-2'>Name:</p>
                      <input type="text" placeholder="John Doe" className={`input input-bordered w-full`} name='name' onChange={e => setName(e.target.value)} />
                      <p className='my-2'>Email:</p>
                      <input type="text" placeholder="abc@abc.com" className={`input input-bordered w-full`} name='email' onChange={e => setEmail(e.target.value)} />
                      <p className='my-2'>Password:</p>
                      <input type="text" placeholder="Enter your Password Here" className={`input input-bordered w-full`} name='password' onChange={e => setPassword(e.target.value)} />
                      <p className='my-2'>Confirm Password:</p>
                      <input type="text" placeholder="Confirm Your Password Here" className={`input input-bordered w-full`} name='confirmPassword' onChange={e => setPasswordConfirm(e.target.value)} />
                    </form>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-neutral mx-4" onClick={handleCreateAccount}>Create Account</button>
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
