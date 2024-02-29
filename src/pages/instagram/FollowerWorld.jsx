import styled from "styled-components"
import { FaArrowDown } from "react-icons/fa";
import imgTexture from "../../assets/des3.png"
import logoBoneco from "../../assets/logoboneco.png"
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CardFollowerWorldSell from "../../components/tiktok/cardsFollowers/cardFollowerWorldSell";
export default function FollowerIgWorld() {
  const navigate = useNavigate()
  const seguidoresWorld = [{
    quantidade: 100,
    valor: "3,00"
  }, {
    quantidade: 200,
    valor: "5,00"
  },
  {
    quantidade: 400,
    valor: "10,00"
  }, {
    quantidade: 500,
    valor: "13,00"
  }, {
    quantidade: 1000,
    valor: "19,00"
  }, {
    quantidade: 2000,
    valor: "35,00"
  }, {
    quantidade: 3000,
    valor: "50,00"
  }, {
    quantidade: 4000,
    valor: "60,00"
  }, {
    quantidade: 5000,
    valor: "76,00"
  }, {
    quantidade: 10000,
    valor: "150,00"
  }]
  return (
    <>
      <Container>
        <Header>
          <img src={logoBoneco} onClick={() => navigate("/instagram")}></img>
        </Header>
        <InfosPage>
          <div onClick={() => navigate("/instagram")}>
            <FaInstagram size={35} />
            <h1>Instagram</h1>
          </div>
          <p>Escolha a melhor opção para você e ganhe visibilidade, autoridade e credibilidade</p>
          <FaArrowDown className="arrow" />
        </InfosPage>
        <Cards>
          {seguidoresWorld.map((world)=> (
            <>
            <CardFollowerWorldSell quantidade={world.quantidade} valor={world.valor}/>
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