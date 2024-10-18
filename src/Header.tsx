import './Header.css'; // Estilos


const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li >
            <a id="home" href="#casa">Daniel Frantz</a>
          </li>
          <li >
            <a id="about" href="#sobre">Sobre mim</a>
          </li>
          <li >
            <a id="projects" href="#tech-container">Projetos</a>
          </li>
          <li >
            <a id="contact" href="#contactos">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
