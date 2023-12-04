import styled from "styled-components"
import Image from "next/image"

import { ButtonSmall } from "@/utils/Button"
import PhotoCell from '@/assets/mockup_5-YrDBLMo533Cg2KkG.png'

export default function AppDownload({id}) {
    return (
        <DivContainer id={id}>
            <Image 
                src={PhotoCell}
                alt={"Carregando Imagem"}
                width={0}
                height={0}
                sizes="100vw"
            />
            <div>
                <h2>What are you waiting for?</h2>
                <p>
                    Theres no better time to take control of your finances. 
                    With Blicks powerful categorization and visualization tools 
                    youll actually stick to your budget.
                </p>
                <div>
                    <ButtonSmall text="Google Play" BgColor={'#7634bf'} color={"#FFFFFF"}/>
                    <ButtonSmall text="App Store" BgColor={'#e03584'} color={"#FFFFFF"}/>
                </div>
            </div>
        </DivContainer>
    )
}

const DivContainer = styled.div`
    width:100%;
    padding:5rem 5rem 10rem 5rem;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    background: rgb(0,0,0);
    background: linear-gradient(140deg, rgba(0,0,0,1) 0%, rgba(118,52,191,1) 100%);

    img{
        width:40%;
        height:auto;
    }

    div {
        width:100%;
        color:${({theme})=>{return theme.colors[0]}};

        h2{
            font-size:5rem;
            color:${({theme})=>{return theme.colors[3]}};
        }

        p{
            font-size:1.2rem;
            font-weight:300;
            margin:1rem 0;
            width:80%;

        }

        div{
            button{
                margin-right:2rem;
            }
        }
    }
`


