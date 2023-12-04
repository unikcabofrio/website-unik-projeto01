import styled from "styled-components"
import Footer from "./Footer"

export default function Layout({children}) {
    return (
      <DivContainer>
        <main>{children}</main>
        <Footer/>
      </DivContainer>
    )
}

const DivContainer = styled.div``