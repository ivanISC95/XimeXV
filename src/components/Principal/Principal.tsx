import '@mantine/carousel/styles.css';

export const Principal = (props:any) => {
  console.log(props)

  return (
    <section className="principal_principal_body">
      <section className="informacionCorona">
        <div className='informacionCorona_h1'>Mis XV Años</div>
        <div className='informacionCorona_h2'>{props.name}</div>
        <div className='informacionCorona_h1'>{props.day}</div>
      </section>
    </section>
  )
}
