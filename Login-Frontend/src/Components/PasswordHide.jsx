import { useState } from "react";


function PasswordHide(){

    const[showPassword, setShowPassword] = useState(false);


    return(
        <div className="relative">
            <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                placeholder="Password" 
                className="border border-gray-300 rounded-lg p-1 text-sm w-[300px] h-[45px] bg-white-100 pr-10 focus:outline-none" 
            />

            <button type="button" className="cursor-pointer absolute right-3 top-1/5" onClick={() => setShowPassword(!showPassword)}>
                ver
            </button>
        </div>
    )
}

export default PasswordHide;