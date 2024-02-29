import styled from "styled-components"
import { FaArrowDown } from "react-icons/fa";
import imgTexture from "../../assets/des3.png"
import logoBoneco from "../../assets/logoboneco.png"
import { FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CardFollowerBr from "../../components/tiktok/cardsFollowers/cardFollowerBrSell";

export default function FollowerBr() {
  const navigate = useNavigate()
  const seguidoresBr = [{
    quantidade: 100,
    valor: "10,20"
  }, {
    quantidade: 200,
    valor: "20,40"
  },
  {
    quantidade: 400,
    valor: "40,80"
  }, {
    quantidade: 800,
    valor: "81,60"
  }, {
    quantidade: 1000,
    valor: "102,00"
  }, {
    quantidade: 2000,
    valor: "204,00"
  }, {
    quantidade: 4000,
    valor: "408,00"
  }, {
    quantidade: 6000,
    valor: "612,00"
  }, {
    quantidade: 8000,
    valor: "816,00"
  }, {
    quantidade: 10000,
    valor: "1020,00"
  }]
  return (
    <>
      <Container>
        <Header>
          <img src={logoBoneco} onClick={() => navigate("/tiktok")}></img>
        </Header>
        <InfosPage>
          <div onClick={() => navigate("/tiktok")}>
            <FaTiktok size={30} />
            <h1>TikTok</h1>
          </div>
          <p>Escolha a melhor opção para você e ganhe visibilidade, autoridade e credibilidade</p>
          <FaArrowDown className="arrow" />
        </InfosPage>
        <Cards>
          {seguidoresBr.map((br)=> (
            <>
            <CardFollowerBr quantidade={br.quantidade} valor={br.valor}/>
            <Divider />
            </>
          ))}
          
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
.title{
    font-size: 20px;
}

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
width: 1000px;
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
    cursor: pointer;
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

const Header = styled.div`

img{
    width: 60px;
    border-radius: 100%;
    animation: float 2s ease-in-out infinite;
    cursor: pointer;
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