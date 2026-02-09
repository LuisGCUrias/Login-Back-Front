function Login() {
    return(
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-blue-500 w-[400px] h-[550px] flex items-center justify-center rounded-lg">
                    <form action="/signup" method="POST" class="flex flex-col items-center gap-4">
                        <input type="text" name="username" placeholder="Usuario" className="border rounded-lg p-1 text-sm w-[300px] bg-gray-100" />
                        <input type="password" name="password" placeholder="Password" className="border rounded-lg p-1 text-sm w-[300px] bg-gray-100" />
                        <button type="submit" className="border p-1 rounded-lg m-10 bg-gray-300 w-[120px]">
                            Registrarte
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login