import SwitchModal from "../Components/Auth"
import PasswordHide from "../Components/PasswordHide"
import RegisterForm from "./RegisterForm"

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
                <div>
                    <SwitchModal/>
                </div>
            </div>

        </>
    )
}

export default Login