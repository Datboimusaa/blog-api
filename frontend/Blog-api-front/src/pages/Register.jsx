
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';


const Register = () => {

    
const [isChecked, setIsChecked] = useState(false);
const navigate = useNavigate()
const handlog = () =>{
   
    navigate("/")
}
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#3561d0] relative">

            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:40px_40px]"></div>

            <div className="relative z-10 text-center">

               
                <div className="bg-white rounded-md shadow-md p-6 w-[320px] text-left">

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="nom"
                            className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="E-mail"

                            className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Mot de passe"

                            className="w-full border-b border-gray-300 focus:outline-none py-2 text-sm"
                        />
                    </div>

                    <div className="flex items-center mb-4">
                        <input type="checkbox" className="mr-2"
                            onChange={(e) => setIsChecked(e.target.checked)} />
                        <label className="text-sm text-gray-600">
                            Accepter les termes et la politique
                        </label>
                    </div>

                    <button

                        className={`w-full py-2 rounded-md texte-black bg-blue-400 "
                            `}
                    >
                     sinscrire</button>
                </div>

                {/* Links */}
                <div className="mt-4 text-sm">

                    <p className="text-gray-300 mt-1">
                        vous avez deja un compte ?{' '}
                        <span  onClick={handlog} className="text-yellow-400 cursor-pointer hover:underline">
                            se connecter
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}



export default Register