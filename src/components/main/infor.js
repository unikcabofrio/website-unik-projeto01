import Title from "@/utils/title"
import React,{useState} from "react"

export default function Infor({id}) {

  const [listInfo] = useState([
    {title:"Titulo 01",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"},
    {title:"Titulo 01",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"},
    {title:"Titulo 01",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"},
    {title:"Titulo 01",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"},
    {title:"Titulo 01",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"},
    {title:"Titulo 01",info:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"}
  ])

    return (
      <div id={id}>
        <Title title={"Tudo que você precisa saber"} subtitle={"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"}/>
        <div className="ListInformation">
          {listInfo.map((index,key)=>{
            return(
              <div key={key} className="boxItems">
                <i className="fi fi-sr-seal-exclamation"></i>
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