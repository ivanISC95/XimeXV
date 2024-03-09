import React from 'react'

export const Cronometro = () => {
  return (
    <section className="cronometro_principal_body">
      <section className="cronometro_principal_content">
        <section className="cronometro_principal_mensaje">Celebra conmigo el día</section>
        <section className="cronometro_principal_img_calendario">
          <section className="cronometro_principal_img">
            21-Abril-2024
            {/* <div className="cronometro_principal_calendario"></div> */}
          </section>
          <section className="cronometro_principal_calendario"></section>
        </section>
        <section className="cronometro_principal_cronometro"></section>
      </section>
    </section>
  )
}
