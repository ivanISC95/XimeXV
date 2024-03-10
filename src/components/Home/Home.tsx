import { Principal } from '../Principal/Principal'
import { Invitacion } from '../Invitacion/Invitacion'
import { Presentacion } from '../Presentacion/Presentacio'
import { Cronometro } from '../Cronometro/Cronometro'
import { Place } from '../LugarYFecha/Place'

export const Home = () => {
  const ximeName = 'Danna Ximena Ugalde Ugalde'
  return (
    <section className='Home_principal'>
      <Principal name={ximeName}/>
      <Invitacion name={ximeName}/>
      <Presentacion />
      <Cronometro/>
      <Place />
    </section>
  )
}
