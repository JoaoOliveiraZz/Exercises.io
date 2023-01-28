import { useState, FormEvent } from "react";
import { Header } from "../components/header";

interface FormInputs {
    username : string;
    email: string;
    senha : string
}

export function LoginForm(){

    const [values, setValues] = useState<FormInputs>({
        username : "",
        email : "",
        senha : ""
    }
    );

    const handleChangeValues = (name : string, value : string) => {
        console.log(name)
        if(name == 'email'){

            setValues(
                {
                    ...values,
                    email : value
                }
            )
        }else if (name == 'senha'){
            setValues(
                {
                    ...values,
                    senha : value
                }
            )
        }else{
            setValues(
                {
                    ...values,
                    username : value
                }
            )
        }
        console.log(values)
    }

   async function createNewAccount(event : FormEvent){
        event.preventDefault();

        console.log(values)
   }

    return (

        <div className="w-full h-screen bg-whiteSolid overflow-y-hidden">
            <Header isInHome = {false} />

            <div className="h-full flex flex-col items-center bg-whiteSolid"> 
                <form action="" onSubmit={createNewAccount}>
                    <input type="text" name="username" id="UserName" placeholder="Nome" onChange={(event) => {handleChangeValues(event.target.name, event.target.value)}} />
                    <input type="email" name="email" id="Email" placeholder="Email" onChange={(event) => {handleChangeValues(event.target.name, event.target.value)}} />
                    <input type="password" name="senha" id="Senha" placeholder="Senha" onChange={(event) => {handleChangeValues(event.target.name, event.target.value)}} />
                    <button type="submit">Envia</button>
                </form>
            </div>
            
        </div>


    )

}