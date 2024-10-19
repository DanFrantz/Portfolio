
import "./Projects.css"

const Projects=()=>{
    return(
        <section id="projetos">
                <h1>|Projetos|</h1>
            <div id="container">
                <div className="cont-sec">
            <div className="texto">
                <p>Esta calculadora foi feita através de puro JavaScript, CSS e HTML, em um periodo de 2 semanas.</p>
            </div>
            <div className="foto">
                <a href="https://github.com/DanFrantz/Calculadora-Web" target="_blank"><img src="/Calculadora.png" alt="Foto da calculadora que programei"></img></a>
            </div>
            </div>
            <div className="cont-sec">
            <div className="texto">
                <p>Este site foi feito usando puro HTML, CSS e JavaScript, uma API foi usada para conseguir as previsões do tempo e outra pra conseguir o nome dos lugares.</p>
            </div>
            <div className="foto">
                <a href="https://github.com/DanFrantz/ClimaSemTempo/tree/feijaocomarroz" target="_blank"><img src="/Clima-sem tempo.png" alt="Foto de um site de previsão do tempo"></img></a>
            </div>
            </div>
            </div>
            <hr></hr>
        </section>
    );
};
export default Projects;
