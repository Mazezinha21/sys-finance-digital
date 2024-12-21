import { useState } from "react"
import imagem from "../../assets/mobile-encryption-animate.svg"

export default function LoginPage() {
    const [user, setUser] = useState("")
    const [senha, setSenha] = useState("")


    function clickLogin() {
        console.log(user)
        console.log(senha)
    }
    return (
        <div className="w-full h-screen bg-[#1e1e1e] text-white flex">
            <div className="w-[50%] h-full flex items-center justify-center flex-col">
                <div className="w-full h-[20%] flex justify-center items-center">
                    <h1 className="text-[35px] font-bold text-[#61ee74]">
                        Faça Login<br />
                        E entre para o nosso time
                    </h1>
                </div>
                <div className="w-full h-[80%] flex items-center justify-center">
                    <img src={imagem} alt="" width={450} />
                </div>
            </div>
            <div className="w-[50%] h-full flex items-center justify-center ">
                <div className="bg-[#292929] w-[60%] h-[60%] rounded-xl">
                    <div className="w-full h-[20%] flex items-center justify-center">
                        <h1 className="text-[#61ee74] font-bold text-[30px]">LOGIN</h1>
                    </div>
                    <div className="w-full h-[60%] flex items-center flex-col gap-3">
                        <div className="w-[80%] flex flex-col">
                            <label htmlFor="" className="text-[12px]">Usuário</label>
                            <input
                                onChange={
                                    (event) => setUser(event.target.value)
                                }
                                type="text"
                                placeholder="Usuário"
                                className="rounded-lg border-none w-full h-[35px] bg-[#434343] pl-2 outline-none" />
                        </div>
                        <div className="w-[80%] flex flex-col">
                            <label htmlFor="" className="text-[12px]">Senha</label>
                            <input
                                onChange={
                                    (event) => setSenha(event.target.value)
                                }
                                type="password"
                                placeholder="Senha"
                                className="rounded-lg border-none w-full h-[35px] bg-[#434343] pl-2 outline-none" />
                        </div>
                        <div className="w-full flex items-center justify-center leading-[0]">
                            <a href="" className="text-[10px] hover:underline hover:decoration-1">Recupere sua senha</a>
                        </div>
                    </div>
                    <div className="w-full h-[20%] flex justify-center">
                        <button
                            onClick={clickLogin}
                            className="w-[80%] h-[35px] rounded-lg bg-[#61ee74] text-[#1e1e1e] font-bold">LOGIN</button>
                    </div>
                </div>

            </div>
        </div>
    )
}