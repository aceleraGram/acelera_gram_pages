import styled from "styled-components"
import { FaRegEye } from "react-icons/fa6";

export default function CardViews() {
    return (
        <>
            <Container>
                <Header>
                    <FaRegEye size={90} color="#5E17EB"/>
                </Header>
                <Body>
                    <p className="title">Visualizações</p>
                    <p>Ideal para quem quer milhares de visualizações por um valor acessível</p>
                <Button>
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