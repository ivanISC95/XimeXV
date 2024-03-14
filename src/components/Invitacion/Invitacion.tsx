
export const Invitacion = (props:any) => {
  return (
    <section className="invitacion_principal_body">
      <section className="invitacion_texto">
        <section className="invitacion_texto_contenido">
          <div className="invitacion_texto_contenido_h1">Queridos amigos y familiares</div>
          <div className="invitacion_texto_contenido_h2">
            Estoy emocionada de celebrar mis xv años ! 
            te invito a celebrar el inicio de una nueva etapa en mi
             vida, llena de sueños, metas y grandes logros</div>                    
          <div className="invitacion_texto_contenido_h3">
            {props.name}
          </div>
        </section>
      </section>
      <section className="invitacion_foto"></section>
    </section>
  )
}
