
export const VestimentaRegalos = () => {
  return (
    <section className="vestimentaRegalo_principal_body">
      <section className="principal_content">
        <section className="principal_dresscode">
          <h1 className="principal_dresscode_h1">Dress Code</h1>
          <p className="principal_dresscode_p">Formal</p>
          <div className="principal_images">
            <img src="../src/assets/dresscodemen.png" alt="dressmen" />
            <img src="../src/assets/dresscodegirl.png" alt="dressgirl" />
          </div>
          <br />
          <h1 className="principal_dresscode_h1">Restricciones</h1>
          <p className="principal_dresscode_p">Favor de no usar ropa con ningun tono color 🔵</p>
        </section>
        <section className="principal_regalo">
          <h1 className="principal_regalo_h1">Regalos</h1>
          <p className="principal_regalo_p">
            El regalo es opcional, pero si 
            quieres tener un detalle conmigo me podrias dar un apoyo en efectivo dentro de un sobre cerrado.
          </p>
          
          <img src="../src/assets/sobre.png" alt="SobreX"  className='regalo_img'/>
        </section>
      </section>
    </section>
  )
}
