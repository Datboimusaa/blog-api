import React from 'react'

const Login = () => {
    return (<div className="min-h-screen flex items-center justify-center bg-[#2f5bcb] relative">

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:40px_40px]"></div>

        <div className="relative z-10 text-center">

            <div className="flex items-center justify-center gap-2 mb-6">

                <div className="w-5 h-5 bg-white"></div>

            </div>


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
                    <input type="checkbox" className="mr-2" />
                </div>
                <button
                    className="w-full py-2 rounded-md text-black "  >
                    se connecter

                </button>
            </div>
        </div>
    </div>

    );


}

export default Login