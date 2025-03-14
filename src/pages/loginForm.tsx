import { User, Eye } from 'phosphor-react'
import FacebookLogo from '../assets/Facebook_Logo_Primary.png'
import AppleLogo from '../assets/apple_logo.svg'

export function LoginForm() {

   

    return (

        

            <div className="bg-white h-screen w-screen flex flex-col items-center justify-between">
                
               <div className='h-1/4 w-full flex flex-col items-center justify-center py-3 px-5 bg-sky-600 bg-gradient-to-r rounded-b-3xl'>
                    <h1 className='text-xl text-white font-bold '>Como é bom te ver de volta!</h1>
                    <span className='text-center text-gray-200 font-semibold text-sm mt-5'>Não tem uma conta?</span>

                    <button className='border-2 px-5 py-1 rounded-lg border-gray-100 text-base text-gray-200 mt-1 '>Registre-se</button>
               </div>

               <div className='flex flex-1 flex-col items-center justify-start mt-20 w-full px-10 gap-5'>
                   <h2 className='font-semibold text-3xl '>Login</h2>
                   <form action="" className='flex flex-col gap-4 w-full'>
                        <div className='flex bg-gray-200 items-center px-2 rounded-md py-2 w-full justify-between'>
                            <input type="email" placeholder='Email' className='bg-gray-200 outline-none' />
                            <User />
                        </div>
                        <div className='flex bg-gray-200 items-center px-2 rounded-md py-2 w-full justify-between'>
                            <input type="password" placeholder='Senha' className='bg-gray-200 outline-none ' />
                            <Eye />
                        </div>
                   </form>
                   <span className='text-sm underline text-black/60'>Esqueceu a senha?</span>
                   <button className='bg-sky-400 w-full h-12 rounded-lg text-white font-semibold text-lg'>Entrar</button>

                   <div className='flex w-full items-center'>
                       <div className='h-px flex-1 bg-gray-200' />
                       <span className='text-xs mx-3 text-black/60'>Entre com suas redes</span>
                       <div className='h-px flex-1 bg-gray-200' />
                   </div>

                   <div className='flex w-full justify-between gap-3'>
                        <div className='bg-gray-200 flex flex-1 items-center justify-center rounded-lg py-3'>
                            <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Login com Google" className='h-10 w-10' />
                        </div>
                        <div className='bg-gray-200 flex flex-1 items-center justify-center rounded-lg py-3'>
                            <img src={FacebookLogo} alt="Login com Google" className='h-10 w-10' />
                        </div>
                        <div className='bg-gray-200 flex flex-1 items-center justify-center rounded-lg py-3'>
                            <img src={AppleLogo} alt="Login com Google" className='h-10' />
                        </div>
                   </div>
               </div>

            </div>


    )

}