import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 style={{ marginTop: "15px", textAlign: "center" }}>Apie mus</h2>
            <hr />
            <p>
              Pagrindinis projekto tikslas - leisti naudotojam užsiregistruoti,
              gavus leidimą laikyti savo sandėlį, jį kontroliuoti. Pridėti
              prekes, pridėti zonas, kategorijas, suskirstyti prekes, ištrinti
              ir pnš.
            </p>
            <br />
            <p>
              Kiekvienas užsiregistravęs naudotojas galės kontroliuoti savo
              sandėlį. Sandėlį prideda <u>administratorius</u>. Vadovą priskiria{" "}
              <u>administratorius</u>. Kontaktai yra matomi dešinėje
              <br /> <br />{" "}
            </p>
            <br />

            <p>
              Kiekvienas naudotojas, kuris turės savo sandėlį, galės valdyti.
              Galės priskirti prekes prie kategorijų taip pat kategorijas prie
              zonų, įdomu tai, jog kategorijos gali priklausyti daugiau nei
              vienai zonai. Tai reiškia jei sandėlys turi tarkim 5 zonas, tai
              kategerija kažkokių produktų gali priklausyti visom zonom arba tik
              vienai, viskas priklauso nuo sandėlio savininko. Vadovas gali
              pridėti prekes į sandėlį (ir jas surušiuoti).
            </p>
          </div>
          <div
            className="d-flex"
            style={{ margin: "auto", height: "400px", width: "25px" }}
          >
            <div className="vr"></div>
          </div>
          <div className="col-3 text-center">
            <h2 style={{ marginTop: "15px", textAlign: "center" }}>
              Kontaktai
            </h2>
            <hr />
            <p>Adresas: Kaunas</p>
            <p>Telefonas: 86xxxxxxx</p>
            <p>
              El pašto adresas: <b>pagalba@manosandelys.lt</b>
            </p>
            <p>
              El pašto adresas (sandėlio kūrimo prašymui):{" "}
              <b>kurti@manosandelys.lt</b>
            </p>
            <a className="btn btn-primary " href="Login" role="button">
              Prisijungti
            </a>
            <hr style={{ visibility: "hidden" }} />
            <a className="btn btn-primary" href="Login" role="button">
              Registruotis
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
