import { useState } from "react"
import Image from "next/image"
import styled from "styled-components"

export default function DocumentClints({id}) {

    const [clints] = useState([
        {title:"Easy to use",name:"Anna Jenkins",descript:"I've used all of the personal finance apps on the market, and found that most have a hard time syncing my various bank accounts and cards real-time, leaving me guessing sometimes for days. Blick was a pleasant surprise! The team has really worked hard to ensure instant syncronization with most of the mainstream banks and lenders. Impressed!"},
        {title:"Amazed by great results!",name:"Danny Lores",descript:"I rely on my budgeting spreadsheet since it helps me organize my spending data into meaningful charts and tables. That's why I've been comprehensive about switching to a personal finance app, as I found that the data presentation was usually lacking at best. Lo and behold, Blick was the only app that made the cut!"}
    ])

    return (
        <DivContainer id={id}>
            <h3>REVIEWS</h3>
            <h1>What do they say?</h1>
            <div>
                {clints.map((index,key)=>{
                    return(
                        <div key={key}>
                                <Image 
                                    src={`/${index.name}.png`}
                                    alt={"Carregando Imagem"}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                />
                                <div>
                                    <h2>{index.title}</h2>
                                    <p>{index.descript}</p>
                                    <p className="italic">- {index.name}</p>
                                </div>
                        </div>
                    )
                })}
            </div>
            
        </DivContainer>
    )
}

const DivContainer = styled.div`
    width:100%;
    padding:1rem 5rem;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    background-color:${({theme})=>{return theme.colors[1]}};
    color:${({theme})=>{return theme.colors[0]}};
    font-size:1rem;
    text-align:center;

    h3{
        color:${({theme})=>{return theme.colors[3]}};
    }

    h1{
        font-size:4rem;
    }

    div{
        margin-top:1rem;
        display:grid;
        grid-template-columns:repeat(2, auto);

        div {
            display:flex;
            margin-right:1rem;
            align-items: center;

            img{
                width: 40%;
                height: 60%;
                border-radius:.5rem;
                margin-right:1rem;
                object-fit: cover;
            }

            div{
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                text-align:left;

                p{
                    margin-top:1rem;
                }

                .italic{
                    font-weight:300;
                    font-style: italic;
                }
            }

        }
    }
`


