import Image from "next/image"

export default function Home({id}) {
    return (
      <div className="Home" id={id}>
        <div >
          <div>
            <h1>Procurando</h1>
            <h1>Hospedagem</h1>
            <h1>para o seu pet?</h1>
            <div className="listHome" onClick={()=>{location.reload()}}>
              <div>
                <i className="fi fi-sr-dog"></i>
                Hospedar meu Cão
              </div>
              <div>
                <i className="fi fi-sr-cat"></i>
                Hospedar meu Gato
              </div>
            </div>
          </div>
          <Image
            src={'/assets/cachorro-e-gato-home.png'}
            width={0}
            height={0}
            sizes="100vw"
            alt={"foto_da_galeria"}
          />
        </div>
      </div>
    )
  }