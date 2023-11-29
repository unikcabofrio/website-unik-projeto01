import Image from "next/image"
import React,{useState} from "react"
import Title from "@/utils/title"

export default function Photos() {

  const [GPhotosSelect,setGPhotosSelect] = useState(0)
  const [GPhotos] = useState([
    {id:Math.random(), Row:0, Column:1, src:`/assets/galeria/${0}.png`},
    {id:Math.random(), Row:0, Column:1, src:`/assets/galeria/${1}.png`},
    {id:Math.random(), Row:2, Column:1, src:`/assets/galeria/${2}.png`},
    {id:Math.random(), Row:0, Column:1, src:`/assets/galeria/${3}.png`},
    {id:Math.random(), Row:1, Column:2, src:`/assets/galeria/${4}.png`},
    {id:Math.random(), Row:1, Column:2, src:`/assets/galeria/${5}.png`},
    {id:Math.random(), Row:1, Column:2, src:`/assets/galeria/${6}.png`},
    {id:Math.random(), Row:2, Column:1, src:`/assets/galeria/${7}.png`},
    {id:Math.random(), Row:1, Column:2, src:`/assets/galeria/${8}.png`},
    {id:Math.random(), Row:1, Column:2, src:`/assets/galeria/${9}.png`},
    {id:Math.random(), Row:0, Column:1, src:`/assets/galeria/${10}.png`}
  ])

  function ShowHidePhone(e){
    setGPhotosSelect(e)

    const itemMaxWindow = document.getElementById("itemMaxWindow")

    if(itemMaxWindow.style.display == "flex"){
      itemMaxWindow.style.display = "none"
      document.body.style.overflow = "auto"
    } else {
      itemMaxWindow.style.display = "flex"
    }
    
  }

    return (
      <>
        <Title title={"Nossa Estrutura"} subtitle={"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI"}/>
        <div id={"itemMaxWindow"}>
          <div className="buttonExit" onClick={()=>{ShowHidePhone(GPhotosSelect)}}>X</div>
          <Image
            src={GPhotos[GPhotosSelect].src}
            width={0}
            height={0}
            sizes="100vw"
            alt={"foto_da_galeria"}
          />
        </div>
        <section className="grid">
          {GPhotos.map((index,key)=>{
            return(
              <div key={key} className="item" style={{gridRow:'span '+index.Row,gridColumn:'span '+index.Column}}>
                <Image
                  style={{
                    width:"100% !important",
                    height:"100% !important",
                    objectFit:"cover"
                  }}
                  onClick={()=>{ShowHidePhone(key)}}
                  src={index.src}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={"foto_da_galeria"}
                />
              </div>
            )
          })}
        </section>
      </>
    )
  }