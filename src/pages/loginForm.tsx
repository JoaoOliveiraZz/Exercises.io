import { User, Eye } from 'phosphor-react'
import FacebookLogo from '../assets/Facebook_Logo_Primary.png'
import AppleLogo from '../assets/apple_logo.svg'
import Workout from '../assets/undraw_workout_wqgp.svg'

export function LoginForm() {

   

    return (

        

            <div className="bg-white h-screen w-screen flex flex-col items-center justify-between lg:flex-row lg:items-start lg:justify-start">
                
               <div className='h-1/4 w-full flex flex-col items-center justify-center py-3 px-5 bg-sky-500 bg-gradient-to-r rounded-b-3xl lg:w-1/2 lg:h-screen lg:rounded-tr-3xl lg:rounded-bl-none'>

                    <h1 className='text-xl text-white font-bold '>Como é bom te ver de volta!</h1>
                    <p
                     className='hidden text-gray-200 text-base leading-tight lg:block text-center'
                     >
                        Seus treinos organizados, seu desempenho maximizado! Faça login e continue evoluindo.
                    </p>
                    <img className='hidden lg:block lg:h-1/2 lg:mt-3' src={Workout} alt="" />


                    <div className='flex flex-col lg:flex lg:flex-col lg:mt-10 gap-2'>
                        <span className='text-center text-gray-200 font-semibold text-sm mt-5'>Não tem uma conta?</span>
                        <button className='border-2 px-5 py-1 rounded-lg text-base text-black font-semibold bg-gray-200 hover:bg-sky-500 hover:border-white hover:text-white delay-75 transition-all'>Registre-se</button>
                    </div>

               </div>

               <div className='flex flex-1 flex-col items-center justify-start mt-20 w-full px-10 gap-5 lg:h-full lg:mt-0 lg:justify-center'> 
                   <h2 className='font-semibold text-3xl '>Login</h2>
                   <form action="" className='flex flex-col gap-4 w-full lg:w-1/2'>
                        <div className='flex bg-gray-100 items-center px-2 rounded-md py-2 w-full justify-between'>
                            <input type="email" placeholder='Email' className='bg-gray-100 w-full outline-none' />
                            <User />
                        </div>
                        <div className='flex bg-gray-100 items-center px-2 rounded-md py-2 w-full justify-between'>
                            <input type="password" placeholder='Senha' className='bg-gray-100 w-full outline-none ' />
                            <Eye />
                        </div>
                        <span className='text-sm underline text-center text-black/60'>Esqueceu a senha?</span>
                        <button className=' w-full h-12 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-sky-400 to-sky-500 shadow-sm'>Entrar</button>
                   </form>

                   <div className='flex w-full items-center lg:w-1/2'>
                       <div className='h-px flex-1 bg-gray-200' />
                       <span className='text-xs mx-3 text-black/60'>Entre com suas redes</span>
                       <div className='h-px flex-1 bg-gray-200' />
                   </div>

                   <div className='flex w-full justify-between gap-4 lg:w-1/2'>
                        <div className='bg-gray-100 flex flex-1 items-center justify-center rounded-lg py-3 hover:shadow-md delay-75 transition-all hover:cursor-pointer'>
                            <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Login com Google" className='h-10 w-10' />
                        </div>
                        <div className='bg-gray-100 flex flex-1 items-center justify-center rounded-lg py-3 hover:shadow-md delay-75 transition-all hover:cursor-pointer'>
                            <img src={FacebookLogo} alt="Login com Google" className='h-10 w-10' />
                        </div>
                        <div className='bg-gray-100 flex flex-1 items-center justify-center rounded-lg py-3 hover:shadow-md delay-75 transition-all hover:cursor-pointer'>
                            <img src={AppleLogo} alt="Login com Google" className='h-10' />
                        </div>
                   </div>
               </div>

            </div>


    )

}