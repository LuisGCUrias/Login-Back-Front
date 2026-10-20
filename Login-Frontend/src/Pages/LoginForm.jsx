import PasswordHide from "../Components/PasswordHide";
import SwitchModal from "../Components/Auth";

function LoginForm({onSwitch}) {
    return(
        <div className="bg-white w-[400px] h-[550px] flex items-center justify-center rounded-3xl shadow-[0_0_15px_rgba(0,0,0,0.12)]">
            <form action="/signup" method="POST" class="flex flex-col items-center gap-4">
                <p className="font-bold text-3xl">Iniciar Sesion</p>
                <p className="text-sm text-gray-500 pb-4">Ingresa tus datos para continuar</p>
                <input type="text" name="username" placeholder="Email" className="border border-gray-300 rounded-lg p-1 text-sm w-[300px] h-[45px] bg-white-100 focus:outline-none" />
                <PasswordHide/>
                <button type="submit" className="border rounded-lg m-10 bg-blue-400 w-[300px] h-[50px] focus:outline-none border-none text-white justify-center items-center flex cursor-pointer">
                    Iniciar Sesion
                </button>
                <p>No tienes cuenta?</p>
                <button type="button" onClick={onSwitch}>Registrate</button>
            </form>
        </div>
    )
}

export default LoginForm;