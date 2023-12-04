import { useState } from "react"
import Image from "next/image"
import styled from "styled-components"

import Img1 from '@/assets/mockup_2-mp8N3033Rphb7DNZ.png'
import Img2 from '@/assets/mockup_3-YbN5DP0oORc6bR3x.png'
import Img3 from '@/assets/mockup_4-AQE98M88kgFWl5ey.png'

export default function ServiceApp({id}) {
    return (
        <DivContainer id={id}>
            <div>
                <Image 
                    src={Img1}
                    alt={"Carregando Imagem"}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <div>
                    <div className="title">Your finances in <p className="color">one place</p></div>
                    <p>
                        From checking accounts to savings, credit cards, and more, 
                        personal finances can be tricky. Blicks mission is to make 
                        it simple to manage everything from one place.
                    </p>
                </div>
            </div>
            <div className="reverse">
                <Image 
                    src={Img2}
                    alt={"Carregando Imagem"}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <div>
                    <div className="title">Your finances in <p className="color">one place</p></div>
                    <p>
                        From checking accounts to savings, credit cards, and more, 
                        personal finances can be tricky. Blicks mission is to make 
                        it simple to manage everything from one place.
                    </p>
                </div>
            </div>
            <div>
                <Image 
                    src={Img3}
                    alt={"Carregando Imagem"}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <div>
                    <div className="title">Your finances in <p className="color">one place</p></div>
                    <p>
                        From checking accounts to savings, credit cards, and more, 
                        personal finances can be tricky. Blicks mission is to make 
                        it simple to manage everything from one place.
                    </p>
                </div>
            </div>
            
        </DivContainer>
    )
}

const DivContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    background-color:${({theme})=>{return theme.colors[0]}};
    color:${({theme})=>{return theme.colors[1]}};
    font-size:1rem;
    text-align:center;

    .reverse{
        flex-direction: row-reverse;
        padding:1rem 5rem;
        background-color:${({theme})=>{return theme.colors[5]}};
    }

    div {
        width:100%;
        display:flex;
        padding:1rem 5rem;
        align-items: center;
        margin-bottom: 1rem;

        img{
            width: 45%;
            height: 60%;
            border-radius:.5rem;
            margin-right:3rem;
            object-fit: cover;
        }

        div{
            padding:0;
            width:100%;
            display:flex;
            flex-direction:column;
            align-items:flex-start;
            text-align:left;

            .title{
                padding:0;
                font-weight:600;
                line-height: 2.5rem; 
                font-size:4rem;

                .color{
                    color:${({theme})=>{return theme.colors[2]}};
                }
            }

            p{
                width:80%;
                margin-top:1rem;
            }

        }
    }

`

