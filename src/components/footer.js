import Link from "next/link"
import Image from 'next/image'
import React, { useEffect } from "react";
export default function Footer({Year}) {


  useEffect(()=>{

    // Seleciona a div que será arrastada
    var dragElement = document.getElementById('dragElement');
    // Variáveis para armazenar a posição inicial do mouse e da div
    var offsetX, dragActive = false;

    // Adiciona evento de mouse pressionado (click)
    dragElement.addEventListener('click', function(e) {
      if (dragActive) {
        dragActive = false;
        dragElement.style.cursor = 'grab';
      } else {
        dragActive = true;
        // Calcula a posição inicial do mouse em relação à div
        offsetX = e.clientX - dragElement.getBoundingClientRect().left;
        // Altera o cursor durante o arraste
        dragElement.style.cursor = 'grabbing';
      }
      
    });

    // Adiciona evento de movimento do mouse (mousemove)
    document.addEventListener('mousemove', function(e) {
      if (dragActive) {
        // Calcula a nova posição da div com base na posição do mouse
        var posX = e.clientX - offsetX;
        // Limitador de tela para a esquerda
        posX = Math.max(posX, 0);
        // Limitador de tela para a direita
        posX = Math.min(posX, window.innerWidth - dragElement.offsetWidth - 20);

        dragElement.style.left = posX + 'px';
      }
    });

  },[])

  return (
    <>
      <footer>
        <Image
          style={{
            transition:"all .0s",
            marginTop:"-103px",
            marginLeft:"80px",
            webkitFilter: "drop-shadow(0px 0px 20px rgba(0 0 0 / 90%))", 
            filter:" drop-shadow(0px 2px 5px rgba(0 0 0 / 60%))"
          }}
          id="dragElement"
          src="/assets/caes-hemovet-banco-de-sangue-vet.png"
          width={350}
          height={120}
          alt="caes-hemovet-banco-de-sangue-vet"
        />
        <div className="f_1">
          <div className="f_1SocialLink">
            <Link href={"/"}><i className="fi fi-brands-instagram"></i></Link>
            <Link href={"/"}><i className="fi fi-brands-facebook"></i></Link>
            <Link href={"/"}><i className="fi fi-brands-whatsapp"></i></Link>
            <Link href={"/"}><i className="fi fi-brands-youtube"></i></Link>
          </div>
          <div className="f_1middleinfor">
            <div className="f_1contato">
              <h2>Informações</h2>
              <Link href={"/"} style={{cursor:"default"}}><i className="fi fi-sr-clock-three"></i> 8:00h às 18:00h</Link>
              <Link href={"/"}><i className="fi fi-sr-phone-call"></i> +55 (00) 9 0000-0000</Link>
              <Link href={"/"}><i className="fi fi-sr-phone-call"></i> +55 (00) 9 0000-0000</Link>
              <Link href={"/"} style={{cursor:"default"}}><i className="fi fi-sr-envelope"></i> mailprofissional@mail.com</Link>
              <Link href={"/"}><i className="fi fi-ss-map-marker"></i> Solicite direções para o GPS</Link>
            </div>
            <div className="f_1informativo">
              <h2>Acesso Rápido</h2>
              <Link href={"/"}><i className="fi fi-sr-heart"></i>Hospedagem para Cães</Link>
              <Link href={"/"}><i className="fi fi-sr-heart"></i>Hospedagem para Gatos</Link>
              <Link href={"/"}><i className="fi fi-sr-heart"></i>Blog</Link>
            </div>
          </div>
          <Link href={"/"} onClick={()=>{location.reload()}}>
            <Image
              src="/assets/sua-logo-aqui.png"
              width={100}
              height={100}
              alt="sualogoaqui"
            />
          </Link>
        </div>
        <div className="f_2">
          <p>Copyright &copy; Unik CaboFrio {Year}</p>
          <p>Criado por: <Link href={"/"}>Unik CaboFrio</Link></p>
        </div>
      </footer>
    </>
  )
}