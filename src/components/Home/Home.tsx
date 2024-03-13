import { Principal } from '../Principal/Principal'
import { Invitacion } from '../Invitacion/Invitacion'
import { Presentacion } from '../Presentacion/Presentacio'
import { Cronometro } from '../Cronometro/Cronometro'
import { Place } from '../LugarYFecha/Place'
import { VestimentaRegalos } from '../CodigoVestimentaRegalos/VestimentaRegalos'

export const Home = () => {
  const ximeName = 'Danna Ximena Ugalde Ugalde'
  const ximeDay = '27 | Abril | 2024'
  return (
    <section className='Home_principal'>
      <Principal name={ximeName} day={ximeDay}/> 
      <Invitacion name={ximeName}/> 
      <Presentacion /> 
      <Cronometro day={ximeDay}/> 
      <Place /> 
      <VestimentaRegalos />
    </section>
  )
}
