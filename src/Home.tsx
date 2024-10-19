import "./Home.css";

const Home = () => {
    return (
        <section id="casa">
            <div className="content-container">
                <div className="text-content">
                    <h1>Daniel Frantz</h1>
                    <p>
                        Sou estudante de Engenharia de Software, com interesse em resolver problemas e forte
                        afinidade com matemática. Criei este portfólio para demonstrar meus conhecimentos e
                        habilidades, além de apresentá-lo como um projeto por si só.
                    </p>
                </div>
                <div className="image-container">
                    <img
                        src="/MinhaFoto.jpeg"
                        alt="Uma foto minha"
                        className="minha-Foto"
                    />
                </div>
            </div>
            
        </section>
    );
};

export default Home;
