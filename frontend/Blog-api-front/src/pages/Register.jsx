import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isChecked, setIsChecked] = useState(false)

  const navigate = useNavigate()

  const handleRegister = async () => {

    if (!isChecked) {
      alert("Tu dois accepter les conditions")
      return
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password
        }
      )

      console.log(res.data)

      alert("Inscription réussie ")

      navigate("/") // retour login

    } catch (error) {
      console.error(error)
      alert("Erreur lors de l'inscription")
    }
  }

  const handlog = () => {
    navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3561d0] relative text-black">

      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:40px_40px]"></div>

      <div className="relative z-10 text-center">

        <div className="bg-white rounded-md shadow-md p-6 w-[320px] text-left">

          <div className="mb-4">
            <input
              type="text"
              placeholder="nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
            />
          </div>

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

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label className="text-sm text-gray-600">
              Accepter les termes et la politique
            </label>
          </div>

          <button
            onClick={handleRegister}
            disabled={!isChecked}
            className={`w-full py-2 rounded-md text-black ${
              isChecked ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            s'inscrire
          </button>

        </div>

        <div className="mt-4 text-sm">
          <p className="text-gray-300 mt-1">
            vous avez deja un compte ?{' '}
            <span onClick={handlog} className="text-yellow-400 cursor-pointer hover:underline">
              se connecter
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;