// import React from 'react'
// import "./index.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import './index.css'
import { useState } from 'react'
import { auth } from '../fireBase.config'

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = async function (e) {
    e.preventDefault()
    try {
      setIsLoading(true)
      if (isLogin) {
        const response = await signInWithEmailAndPassword(auth, email, password)
        alert(JSON.stringify(response))

      } else {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        alert(JSON.stringify(response))
        alert("User created successfully")
      }
    } catch (error) {
      alert(error.message.split(":")[1] ?? error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Login to Your Account
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        // onClick={()=>!isLogin?"Login":"Sign-Up"}
        >
          {
            isLoading ? "Loading" : isLogin ? "Login" : "Sign-Up"
          }
        </button>

        <button
          type="button"
          className="w-full text-blue-600 border border-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          onClick={() => setIsLogin(!isLogin)}
        >
          {
            !isLogin ? "Need an account ? Sign Up" : "Have an Acccount? Sign in now"
          }
        </button>
      </form>
    </div>
  </div>
  );
}

export default LoginPage