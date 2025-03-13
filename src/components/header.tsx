import { Barbell, House } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface HeaderProps {
    isInHome: boolean
}

export function Header({ isInHome }: HeaderProps) {

    return (
        <nav className="h-20">
            <div className="flex justify-around h-full">
                <div className=" flex justify-center items-center">
                    <h1 className="text-darkBlue uppercase font-extrabold text-3xl m-3">Exercises.io</h1>
                </div>
                {
                    isInHome ?
                        <ul className="flex gap-6 items-center uppercase font-medium leading-tight   ">
                            <li>Benefícios</li>
                            <li>Sobre Nós</li>
                            <li>Contate-nos</li>
                        </ul>
                        :
                        ''

                }
                <div className="flex gap-6 items-center font-medium">
                    <button className="rounded-lg border-2 border-red-500 text-center bg-redSolid p-2 font-medium text-whiteSolid lowercase flex items-center  gap-2 justify-between hover:bg-whiteSolid hover:text-zinc-900 transition-all duration-700">
                        {

                            isInHome ?
                                <Link to={'/login'} >Seja membro</Link>
                                
                                :
                                <Link to={'/'} >Voltar</Link>

                        }
                        {
                            isInHome ?
                                <Barbell
                                    size={20}
                                />
                            :
                                <House 
                                    size={20}
                                />
                            
                        }
                    </button>
                </div>
            </div>
        </nav>
    )

}