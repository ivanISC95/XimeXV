

export const Place = () => {
  const redirectToGoogleMaps = () => {
    window.location.href = 'https://www.google.com/maps/dir//20.426229,-100.026606/@20.42631,-100.1088735,12z?entry=ttu';
  };
  return (
    <section className="place_principal_body">
      <section className="place_principal_content">
        <section className="principal_title">
          <h1 className="place_title">Dónde y Cuándo</h1>
        </section>
        <section className="principal_title_content">
          <section className="principal_img"></section>
          <section className="principal_info">
            <div className="principal_info_texto">
              <h1 className="principal_info_texto_h1">Viñedo Tres Sarmientos</h1>
              <h1 className="principal_info_texto_h2">Santa Matilde</h1>
              <h1 className="principal_info_texto_h3">3PM</h1>
              <button onClick={redirectToGoogleMaps} className='principal_info_button'>Ver Mapa</button>
            </div>            
          </section>
        </section>
      </section>
    </section>
  )
}
