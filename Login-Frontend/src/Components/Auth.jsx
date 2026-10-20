import RegisterForm from "../Pages/RegisterForm"
import LoginForm from "../Pages/LoginForm"
import { useState } from "react"


function SwitchModal(){

    const[switchmode, setSwitchMode] = useState(false); 

    return(
        <div>
            {switchmode ? (
                <RegisterForm
                    onSwitch={() => setSwitchMode(false)}/>) : (<LoginForm onSwitch={() => setSwitchMode(true)}/>)
                }
        </div>
    )
}

export default SwitchModal;