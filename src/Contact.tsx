import "./Contact.css"


const Contato =()=>{
return    (
<section id="contactos">
    <h1>Meios de Contato</h1>

    <div className="contato-inteiro">
        <div className="logo">
            <a href="https://wa.me/qr/ZVNX66HXJCU3P1" target="_blank">
                <img src="WhatsApp.svg.webp" alt="Icone do WhatsApp"></img>
            </a>
        </div>
        <div className="nome">
            <p>(54)991173107</p>
        </div>
    </div>

    <div className="contato-inteiro">
        <div className="logo">
            <a href="https://www.instagram.com/danielpaimfrantz/" target="_blank">
                <img src="Instagram_logo_2016.svg.webp" alt="Icone do Instagram"></img>
            </a>
        </div>
        <div className="nome">
            <p>@danielpaimfrantz</p>
        </div>
    </div>

    <div className="contato-inteiro">
        <div className="logo">
            <a href="https://www.linkedin.com/in/daniel-paim-frantz-6719812a1/" target="_blank">
                <img src="LinkedIn_icon.svg.png" alt="Icone do LinkedIn"></img>
            </a>
        </div>
        <div className="nome">
            <p>Daniel Paim Frantz</p>
        </div>
    </div>

    <div className="contato-inteiro">
        <div className="logo">
            <a href="https://github.com/DanFrantz" target="_blank">
                <img src="/gitHub.svg" alt="Icone do GitHub"></img>
            </a>
        </div>
        <div className="nome">
            <p>@DanFrantz</p>
        </div>
    </div>
</section>)}
export default Contato;