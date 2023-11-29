import Image from "next/image"

import Price from "@/components/main/price"
import Infor from "@/components/main/infor"
import Photos from "@/components/main/photos"
import Service from "@/components/main/service"
import Home from "@/components/main/home" 

export default function Index() {
    return (
      <>
        <Home/>
        <Service/>
        <Photos/>
        <Infor/>
        <Price/>
        <div className="otherpet">
          <div className="otherpet_text">
            <h3>Possui mais de um pet?</h3>
            <p>Some as diárias de todos os hóspedes e contrate um pacote promocional.</p>
          </div>
          <div>
            <Image
              src={"/assets/pet-news.png"}
              width={535}
              height={224}
              alt={"pet-news"}
            />
          </div>
          <div className="otherpet_bone">
            <i className="fi fi-ss-bone"></i>
            <p> Mais vantagens para você!</p>
          </div>
        </div>
      </>
    )
  }