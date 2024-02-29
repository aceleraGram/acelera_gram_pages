import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function CardFollowerWorld() {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <Header>
                    <img src="https://static.vecteezy.com/system/resources/previews/018/887/528/original/earth-globe-icon-png.png"></img>
                </Header>
                <Body>
                    <p className="title">Seguidores Mundiais</p>
                    <p>Seguidores mundiais, ideal para quem busca valores mais acessíveis</p>
                <Button onClick={()=> navigate("/tiktok/seguidoresMd")}>
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