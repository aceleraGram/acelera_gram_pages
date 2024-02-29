import styled from "styled-components"
import brasilLogo from "../../../assets/Brazil_flag_300.png"
import { useNavigate } from "react-router-dom"
export default function CardFollowerBr() {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <Header>
                    <img src={brasilLogo}></img>
                </Header>
                <Body>
                    <p className="title">Seguidores Brasileiros</p>
                    <p>Seguidores brasileiros, ideal para quem busca crescer seu perfil</p>
                <Button onClick={()=> navigate("/instagram/seguidoresBr")}>
                    Saiba mais
                </Button>
                </Body>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
-webkit-box-shadow: 0px 0px 76px 0px rgba(16,23,40,1);
-moz-box-shadow: 0px 0px 76px 0px rgba(16,23,40,1);
box-shadow: 0px 0px 76px 0px rgba(16,23,40,1);
border-radius: 20px;
width: 200px;
background-color: #101728;
.button{
    margin-bottom: 30px;
    margin-top: 30px;
}
`

const Header = styled.div`
background-color: white;
width: 100%;
display: flex;
height: 90px;
border-radius: 15px 15px 0 0 ;
justify-content: center;
align-items: center;
padding: 5px;
img{
    width: 80px;
    border-radius: 20px;
    cursor: pointer;
}
`

const Body = styled.div`
color: white;
display: flex;
align-items: center;
padding: 5px;
justify-content: center;
flex-direction: column;
height: 200px;
.title{
    font-size: 25px;
    margin-bottom: 20px;
}
p{
    text-align: center;
    font-size: 15px;
}
`

const Button = styled.div`
background-color: #5E17EB;
padding: 15px;
margin-top: 20px;
border-radius: 10px;
cursor: pointer;
`