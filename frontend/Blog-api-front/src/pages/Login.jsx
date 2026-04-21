import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const handleLogin = async () => {
    
   
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      )

      console.log(res.data)

      // stocker le token
      localStorage.setItem("token", res.data.token)

      // redirection après succès
      navigate("/Home")

    } catch (error) {
      console.error(error)
      alert("Email ou mot de passe incorrect")
    }
   
    
  }
    const handinscrit = () => {
    navigate("/register")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2f5bcb] relative">

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:40px_40px]"></div>

      <div className="relative z-10 text-center">
        <div className="bg-white rounded-md shadow-md p-6 w-[320px] text-left">

          <div className="mb-4">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
            />
          </div>

          <div className="flex items-center mb-4 ">
            <input type="checkbox" className="mr-2" />
            <span> garder moi connecter</span>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-2 rounded-md text-white bg-blue-600 cursor-pointer"
          >
            se connecter
          </button>

        </div>
         <div className="mt-4 text-sm">
          <p className="text-gray-300 mt-1">
            vous n'avez pas compte ?{' '}
            <span  onClick={handinscrit} className="text-yellow-400 cursor-pointer hover:underline">
              s'inscrire
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login