import PasswordHide from "../Components/PasswordHide"

function Login() {
    return(
        <>
            <div className="relative flex justify-center items-center h-screen bg-gray-100">
                
                {/*Decoracion superior derecha*/}
                <div className="absolute -top-4 right-0 z-0">
                    <svg width={450} height={350} viewBox="0 0 350 250">
                        <path d="M450 0 H150 C350 80 150 180 450 250 V350 H450 Z" fill="#a9c3e2"/>
                    </svg>
                </div>
                <div className="absolute bottom-0 left-0 z-0 rotate-180">
                    <svg width={450} height={350} viewBox="0 0 350 280">
                        <path d="M450 0 H150 C350 80 150 180 450 250 V350 H450 Z" fill="#6e8199"/>
                    </svg>
                </div>

                {/*Tarjeta y Formulario*/}
                <div className="bg-white w-[400px] h-[550px] flex items-center justify-center rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.12)]">
                    <form action="/signup" method="POST" class="flex flex-col items-center gap-4">
                        <p className="font-bold text-3xl">Registro</p>
                        <p className="text-sm text-gray-500 pb-4">Ingresa tus datos para continuar</p>
                        <input type="text" name="username" placeholder="Email" className="border border-gray-300 rounded-lg p-1 text-sm w-[300px] h-[45px] bg-white-100 focus:outline-none" />
                        <PasswordHide/>
                        <button type="submit" className="border rounded-lg m-10 bg-blue-400 w-[300px] h-[50px] focus:outline-none border-none text-white justify-center items-center flex cursor-pointer">
                            Registrarte
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login