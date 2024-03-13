import React from 'react'

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
        </section>
        <section className="principal_regalo"></section>
      </section>
    </section>
  )
}
