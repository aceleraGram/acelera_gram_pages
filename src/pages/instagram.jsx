import styled from "styled-components"
import CardFollowerBr from "../components/cardsFollowers/cardFollowerBr"
import CardFollowerWorld from "../components/cardsFollowers/cardFollowerWorld"
import { FaArrowDown } from "react-icons/fa";

export default function Instagram() {
    return (
        <>
            <Container>
                <InfosPage>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" className="instalogo"></img>
                        <h1>Instagram</h1>
                    </div>
                    <p>Escolha a melhor opção para você e ganhe visibilidade, autoridade e credibilidade</p>
                    <FaArrowDown className="arrow"/>
                </InfosPage>
                <Cards>
                    <CardFollowerBr />
                    <Divider />
                    <CardFollowerWorld />
                </Cards>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 50px;
-webkit-box-shadow: 0px 13px 9px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 13px 9px 0px rgba(0,0,0,0.75);
box-shadow: 0px 13px 9px 0px rgba(0,0,0,0.75);
background-color: #5E17EB;
border-radius: 0 0 50% 50%;
@media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  h1{
    font-size: 30px;
  }
`

const Divider = styled.div`
height: 70px;
width: 50px;
`

const Cards = styled.div`
display: flex;
@media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`
const InfosPage = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 10px 20px;
border-radius: 10px;
margin-bottom: 50px;
color: white;
p{
    margin-bottom: 20px;
}
div{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.instalogo{
    width: 40px;
    margin-right: 15px;
  }
  .arrow{
    animation: float 0.9s ease-in-out infinite;
    @keyframes float {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-6px);
      }
    }
  }
`