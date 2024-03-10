import { useEffect, useState } from 'react'

export const Cronometro = () => {
  const [contador, setContador] = useState<string>('');
  const [contadorDias, setContadorDias] = useState<Number>();
  const [contadorHoras, setContadorHoras] = useState<Number>();
  const [contadorMinutos, setContadorMinutos] = useState<Number>();
  useEffect(() => {
    const intervalo = setInterval(() => {
      const fechaObjetivo = new Date('2024-04-21T00:00:00');
      const fechaActual = new Date();
      const diferenciaTiempo = fechaObjetivo.getTime() - fechaActual.getTime();

      const dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenciaTiempo % (1000 * 60)) / 1000);
      setContadorDias(dias)
      setContadorHoras(horas)
      setContadorMinutos(minutos)
      setContador(`${dias} / ${horas} / ${minutos} / ${segundos} `);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);  return (
    <section className="cronometro_principal_body">
      <section className="cronometro_principal_content">
        <section className="cronometro_principal_mensaje">Celebra conmigo el día</section>
        <section className="cronometro_principal_img_calendario">
          <section className="cronometro_principal_img">
            <div className="cronometro_principal_fecha">21-Abril-2024</div>
            {/* <div className="cronometro_principal_calendario"></div> */}
          </section>
          <section className="cronometro_principal_calendario"></section>
        </section>
        <section className="cronometro_principal_cronometro">
         <div className="cronometro_principoal_contador">Días / Horas / Minutos / Segundos</div>
         <div className="cronometro_principoal_contador">{contador}</div>
         {/* <div className="cronometro_principoal_contador">{contadorDias}&nbsp; &nbsp; &nbsp; &nbsp; {contadorHoras} &nbsp; &nbsp; &nbsp; &nbsp; {contadorMinutos}&nbsp; &nbsp; &nbsp; </div> */}
        </section>
      </section>
    </section>
  )
}
