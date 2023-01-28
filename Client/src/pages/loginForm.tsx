import { useState, FormEvent } from "react";
import { Header } from "../components/header";

interface FormInputs {
    username: string;
    email: string;
    senha: string
}

export function LoginForm() {

    const [values, setValues] = useState<FormInputs>({
        username: "",
        email: "",
        senha: ""
    }
    );

    const handleChangeValues = (name: string, value: string) => {
        console.log(name)
        if (name == 'email') {

            setValues(
                {
                    ...values,
                    email: value
                }
            )
        } else if (name == 'senha') {
            setValues(
                {
                    ...values,
                    senha: value
                }
            )
        } else {
            setValues(
                {
                    ...values,
                    username: value
                }
            )
        }
        console.log(values)
    }

    async function createNewAccount(event: FormEvent) {
        event.preventDefault();

        console.log(values)
    }

    return (

        <div className="w-full h-screen bg-whiteSolid overflow-y-hidden">
            <Header isInHome={false} />

            <div className="h-[90%] flex flex-col items-center justify-center bg-whiteSolid">
                <form
                    onSubmit={createNewAccount}
                    className='w-1/3 h-[70%] flex flex-col items-center justify-evenly rounded-lg border border-zinc-600 shadow-lg shadow-zinc-500'
                >
                    <div className="m-3 flex flex-col items-center">
                        <h1 className="font-extrabold uppercase text-2xl text-redSolid">Torne-se um <span className="font-extrabold text-darkBlue">membro</span></h1>
                        <p className="text-base leading-tight">Comece a se exercitar!</p>
                    </div>

                    <div className="m-0 flex flex-col gap-4">
                        <input type="text" name="username" id="UserName" placeholder="Nome" onChange={(event) => { handleChangeValues(event.target.name, event.target.value) }} className ='focus:outline-none placeholder:text-zinc-600 placeholder:text-base placeholder:leading-tight  rounded-lg px-7 py-3 bg-test border-zinc-600' />
                        <input type="email" name="email" id="Email" placeholder="Email" onChange={(event) => { handleChangeValues(event.target.name, event.target.value) }} className ='focus:outline-none placeholder:text-zinc-600 placeholder:text-base placeholder:leading-tight  rounded-lg px-7 py-3 bg-test border-zinc-600' />
                        <input type="password" name="senha" id="Senha" placeholder="Senha" onChange={(event) => { handleChangeValues(event.target.name, event.target.value) }} className ='focus:outline-none placeholder:text-zinc-600 placeholder:text-base placeholder:leading-tight  rounded-lg px-7 py-3 bg-test border-zinc-600' />
                    </div>

                    <button type="submit" className="border-2 font-medium border-redSolid px-8 py-2 rounded-lg text-zinc-900 hover:bg-redSolid hover:text-whiteSolid transition-all duration-700">Cadastro</button>
                </form>
            </div>

        </div>


    )

}