import { Principal } from '../Principal/Principal'
import { Invitacion } from '../Invitacion/Invitacion'
import { Presentacion } from '../Presentacion/Presentacio'
import { Cronometro } from '../Cronometro/Cronometro'

export const Home = () => {
  return (
    <section className='Home_principal'>
      <Principal />
      <Invitacion />
      <Presentacion />
      <Cronometro/>
    </section>
  )
}
