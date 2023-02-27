import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/config";
import { useLocation } from "wouter"

import './styles/Inputs.scss'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [, navigate] = useLocation();

  
    const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate('/')
        })
        .catch((error) => {
          throw new Error (error.message)
        });
    };


   return (
    <form className="form-container" onSubmit={signIn}>
        <div className="input-box">
          <label className="input-label">Email</label>
          <input placeholder="user@mail.com" className="input" name="email" type="email" required onChange={e => setEmail(e.target.value)} value={email} />
          <span className="input-helper">enter a valid email</span>
        </div>
        <div className="input-box">
          <label className="input-label">Password:</label>
          <input placeholder="your password" className="input" name="password" type="password" required onChange={e => setPassword(e.target.value)} value={password} />
          <span className="input-helper">enter a valid password</span>
        </div>
        <button className='btn'>Login</button>
      </form>
  )
}
