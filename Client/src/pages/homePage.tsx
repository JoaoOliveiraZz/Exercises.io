import { Barbell } from 'phosphor-react'
import { Header } from '../components/header'
import ioga from '../assets/ioga.jpg'
import { Link } from 'react-router-dom'


export function HomePage() {

  return (
    <div className="h-screen w-screen bg-whiteSolid bg-no-repeat bg-cover bg-right-top ">

      <Header isInHome = {true} />

      <div className='h-[89vh] w-full flex items-center'>
        <div className='m-20 w-1/2 flex flex-col items-center'>
          <h1 className='font-extrabold text-center text-darkBlue text-7xl'>
            Exercises<span className='text-redSolid'>.io</span>
          </h1>
          <p className='text-center m-2 w-1/2'>Pratique exercícios, ganhe recompensas e mais saúde e disposição no dia a dia</p>
          <button className="rounded-lg border-2 border-red-500 text-center bg-redSolid p-2 font-medium text-whiteSolid lowercase flex items-center  gap-2 justify-between hover:bg-whiteSolid hover:text-zinc-900 transition-all duration-700">
            <Link to = {'/login'} >Seja membro</Link>
            <Barbell
              size={20}
            />
          </button>
        </div>
        <div className='w-full flex justify-center '>
          <img src={ioga} alt="" className='w-8/12 rounded-fancy shadow-lg shadow-zinc-600' />
        </div>
      </div>

    </div>
  )
}

