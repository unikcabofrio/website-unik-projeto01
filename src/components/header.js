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
                <li><a onClick={()=>{scrolldiv("home")}}>Home</a></li>
                <li><a onClick={()=>{scrolldiv("service")}}>Serviços</a></li>
                <li><a onClick={()=>{scrolldiv("photos")}}>Nossa Estrutura</a></li>
                <li><a onClick={()=>{scrolldiv("infor")}}>Informação</a></li>
                <li><a onClick={()=>{scrolldiv("price")}}>Preço</a></li>
                <li><a onClick={()=>{scrolldiv("footer")}}>Contato</a></li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    )
  }