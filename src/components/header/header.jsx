import styled from "styled-components"
import logoBoneco from "../../assets/logoboneco.png"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()
    return (
        <>
            <Container onClick={()=> navigate("/")}>
                <img src={logoBoneco}></img>
            </Container>
        </>
    )
}

const Container = styled.header`
width: 100%;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
background-color: #5E17EB;
img{
    width: 60px;
    margin-top: 30px;
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
}
`