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
      setContador(`${dias} Días ${horas} horas y ${minutos} minutos con ${segundos} segundos`);
      // setContador(`Días ${dias} Horas ${horas} y ${minutos} Minutos ${segundos} `);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);  return (
    <section className="cronometro_principal_body">
      <section className="cronometro_principal_content">
        <section className="cronometro_principal_mensaje">Celebra conmigo el día</section>
        <section className="cronometro_principal_img_calendario">
          <section className="cronometro_principal_img">
            <div className="cronometro_principal_mensaje">21-Abril-2024</div>
            {/* <div className="cronometro_principal_calendario"></div> */}
          </section>
          <section className="cronometro_principal_calendario"></section>
        </section>
        <section className="cronometro_principal_cronometro">
          <div className="cronometro_principal_faltan">Faltan</div>          
          <div className="cronometro_principal_faltan">{contador}</div>
          <div className="cronometro_principal_faltan">Para mis Quince Años</div>
          {/* <div className="cronometro_principoal_contador">{contadorDias}&nbsp; &nbsp; &nbsp; &nbsp; {contadorHoras} &nbsp; &nbsp; &nbsp; &nbsp; {contadorMinutos}&nbsp; &nbsp; &nbsp; </div> */}
        </section>
      </section>
    </section>
  )
}
