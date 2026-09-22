import fotoPerfil from "../assets/foto-perfil.png";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="photo">
        <img
          src={fotoPerfil}
          alt="Foto de perfil de Maria Jose Ospina Rojas"
        />
      </div>

      <section className="contact">
        <h2>Contacto</h2>

        <p>322 422 8633</p>
        <p>maospinarojas25@gmail.com</p>
        <p>Pereira, Risaralda</p>
        <p>Anserma, Caldas</p>
        <p>(Lugar de trabajo)</p>
      </section>

      <section className="skills">
        <h2>Habilidades</h2>

        <ul>
          <li>GitHub</li>
          <li>Visual Studio</li>
          <li>Google Colab</li>
          <li>Microsoft Excel</li>
          <li>Microsoft Word</li>
        </ul>
      </section>

      <section className="languages">
        <h2>Idiomas</h2>

        <ul>
          <li>Español - Nativo</li>
          <li>Inglés - A2</li>
        </ul>
      </section>

      <section className="hobbies">
        <h2>Hobbies</h2>

        <ul>
          <li>Deportista</li>
          <li>Jugadora gamer</li>
        </ul>
      </section>

    </aside>
  );
}

export default Sidebar;