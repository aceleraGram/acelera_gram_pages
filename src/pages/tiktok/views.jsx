import styled from "styled-components"
import { FaArrowDown } from "react-icons/fa";
import imgTexture from "../../assets/des3.png"
import logoBoneco from "../../assets/logoboneco.png"
import { FaTiktok } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CardViewsSell from "../../components/tiktok/cardViews/cardViewsSell";

export default function Views() {
  const navigate = useNavigate()
  const viewsIg = [{
    quantidade: 100,
    valor: "1,00"
  }, {
    quantidade: 300,
    valor: "2,00"
  },
  {
    quantidade: 500,
    valor: "3,00"
  }, {
    quantidade: 1000,
    valor: "6,00"
  }, {
    quantidade: 1500,
    valor: "9,00"
  }, {
    quantidade: 3000,
    valor: "16,00"
  }, {
    quantidade: 5000,
    valor: "25,00"
  }, {
    quantidade: 10000,
    valor: "50,00"
  },{
    quantidade: 20000,
    valor: "90,00"
  },{
    quantidade: 30000,
    valor: "130,00"
  },{
    quantidade: 50000,
    valor: "200,00"
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
          {viewsIg.map((vw)=> (
            <>
            <CardViewsSell quantidade={vw.quantidade} valor={vw.valor}/>
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