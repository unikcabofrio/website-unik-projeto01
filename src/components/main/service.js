import Title from "@/utils/title"
import React,{useState} from "react"
import Image from "next/image"

export default function Service({id}) {

  const [listServico] = useState([
    {title:"Hospedagem individual",src:"/assets/hospedagem-individual-234x234.png",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"},
    {title:"Hospedagem Coletiva",src:"/assets/hospedagem-coletiva-234x234.png",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"},
    {title:"Ambiente Climatizado",src:"/assets/ambiente-climatizado-234x234.png",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"},
    {title:"Suítes Azulejadas",src:"/assets/suites-azulejadas-234x234.png",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"},
    {title:"Hospedagem por Porte",src:"/assets/hospedagem-por-porte-234x234.png",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"},
    {title:"Piscinas de Bolinhas",src:"/assets/piscina-bolinhas-234x234.png",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"}
  ])

    return (
      <div id={id}>
        <Title title={"O que temos à sua disposição?"} subtitle={"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"}/>
        <div className="ListServiços">
          {listServico.map((index,key)=>{
            return(
              <div key={key} className={`boxItemServiços`}>
                <Image
                  src={index.src}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={index.title}
                />
                <div>
                  <h2>{index.title}</h2>
                  <p>{index.info}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }