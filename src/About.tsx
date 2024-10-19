import "./About.css"
import  { useState} from 'react'
function myTechnologies(){
    const[tech,setTech]=useState<"Java" | "JavaScript" | "CSS" | "HTML">("Java");

const techs={
    Java:{
        description: "Java é uma linguagem multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si. É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.",
        logo:"Logo-java.png"
    },
    JavaScript: {
        description: "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc",
        logo:"Logo-javaScript.webp"},
    CSS:{
        description:"CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante.",
        logo:"CSS3_logo.svg.png"},
    HTML:{
        description:"HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas.",
        logo:"Logo-html.png"
    }
}

const mudaTech = (newTech: "Java" | "JavaScript" | "CSS" | "HTML") => {
    setTech(newTech);
  };

return(<section id="sobre">
    <hr />
    <h1 id="titulo">| Tecnologias |</h1>
    
    <div id="botoes">   
                <button onClick={() => mudaTech("Java")}><img src="/Logo-java.png"></img></button>
                <button onClick={() => mudaTech("JavaScript")}><img src="/Logo-javaScript.webp"></img></button>
                <button onClick={() => mudaTech("CSS")}><img src="/CSS3_logo.svg.png"></img></button>
                <button onClick={() => mudaTech("HTML")}><img src="/Logo-html.png"></img></button>
    </div>
    <h2>{tech}</h2>
    <div id="techsAtuais">
        <div id="tech-container">
        <p>{techs[tech].description}</p>
        </div>
        
    </div>
    <hr />
</section>
);
}

export default myTechnologies;