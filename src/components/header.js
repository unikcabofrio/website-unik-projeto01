import React,{useEffect} from "react"


export default function Header() {

    useEffect(()=>{},[])

    function scrolldiv(e) {
      document.getElementById(e).scrollIntoView({ block: "start", behavior: "smooth" });
    }

    return (
      <>
        <header>
          <nav>
            <div className="nav-wrapper">
              <a href={'/'} className="brand-logo">LOGO</a>
              <ul>
                <li><a onClick={()=>{scrolldiv("home")}}><i className="fi fi-sr-house-chimney"></i>Home</a></li>
                <li><a onClick={()=>{scrolldiv("service")}}><i className="fi fi-sr-heart"></i>Serviços</a></li>
                <li><a onClick={()=>{scrolldiv("photos")}}><i className="fi fi-sr-building"></i>Nossa Estrutura</a></li>
                <li><a onClick={()=>{scrolldiv("infor")}}><i className="fi fi-sr-comment-info"></i>Informação</a></li>
                <li><a onClick={()=>{scrolldiv("price")}}><i className="fi fi-sr-badge-dollar"></i>Preço</a></li>
                <li><a onClick={()=>{scrolldiv("footer")}}><i className="fi fi-sr-phone-call"></i>Contato</a></li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    )
  }