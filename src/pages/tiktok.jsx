import styled from "styled-components"
import { FaArrowDown } from "react-icons/fa";
import imgTexture from "../assets/des3.png"
import logoBoneco from "../assets/logoboneco.png"
import { FaTiktok } from "react-icons/fa";
import CardFollowerBr from "../components/tiktok/cardsFollowers/CardFollowerBr";
import CardFollowerWorld from "../components/tiktok/cardsFollowers/cardFollowerWorld";
import CardLikesBr from "../components/tiktok/cardsLikes/cardLikesBr";
import CardLikesWorld from "../components/tiktok/cardsLikes/cardLikesWorld";
import CardViews from "../components/tiktok/cardViews/cardViews";

export default function TikTok() {
    return (
        <>
            <Container>
                <Header href="https://aceleragram.github.io/acelera_gram/">
                    <img src={logoBoneco}></img>
                </Header>
                <InfosPage>
                    <div>
                        <FaTiktok size={30} />
                        <h1>TikTok</h1>
                    </div>
                    <p>Escolha a melhor opção para você e ganhe visibilidade, autoridade e credibilidade</p>
                    <FaArrowDown className="arrow" />
                </InfosPage>
                <Cards>
                    <CardFollowerBr />
                    <Divider />
                    <CardFollowerWorld />
                    <Divider />
                    <CardLikesBr />
                    <Divider />
                    <CardLikesWorld />
                    <Divider />
                    <CardViews />
                </Cards>
                <Footer>
                    <p>AceleraGram © 2024 Todos os direitos reservados.</p>
                </Footer>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 30px;
background-color: #5E17EB;
background-image: url(${imgTexture});

@media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
  h1{
    font-size: 30px;
  }
  p{
    text-align: center;
  }
`

const Divider = styled.div`
height: 70px;
width: 50px;
`

const Cards = styled.div`
display: flex;
justify-content: center;
width: 700px;
flex-wrap: wrap;
@media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: auto;
  }
`
const InfosPage = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 10px 20px;
border-radius: 10px;
margin-bottom: 30px;
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

const Header = styled.a`

img{
    width: 60px;
    border-radius: 100%;
    animation: float 2s ease-in-out infinite;
    @keyframes float {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-6px);
      }
    }
}`

const Footer = styled.div`
color: white;
width: 100%;
display: flex;
justify-content: center;
margin-top: 70px;
`