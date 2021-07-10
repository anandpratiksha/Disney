import styled from 'styled-components'

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FA1548A6B82C9991B1D38DF251A388FEA2483904510FBC73E150F67F7BDE38C0/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78" alt="" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black .png" alt="" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                </Controls>
            </ContentMeta>
        </Container>

    );
};

const Container = styled.div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top:72px;
padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
left: 0px;
opacity:0.8;
position:fixed;
right: 0px;
top: 0px;
z-index: -1;

img{
    width:100vw;
    height: 100vh;

    @media (max-width: 768px){
        width: initial;
    }
}
`;
const ImageTitle = styled.div`
align-items: flex-end;
display: flex;
-webkit-box-pack:start;
justify-content:flex-start;
margin:0px auto;
height: 30vw;
min-height:170px;
padding-bottom: 24px;
width:100%;
img{
    max-width:600px;
    min-width:200px;
    width:35vw;
}
`;

const ContentMeta = styled.div`
max-width: 874px;;
`;

const Controls = styled.div`
align-items: center;
display:flex;
flex-flow:row nowrap;
margin:24px 0px;
min-height: 56px;
`;

const Player = styled.button`
font-size:15px;
margin:0px 22px 0px 0px;
padding:0px 24px;
height:45px;
border-radius: 4px;
cursor:pointer;
display: flex;
align-items:center;
justify-content:center;
letter-spacing:1.8px;
text-align:center;
text-transform:uppercase;
background: rgb(249, 249, 249);
border: none;
color:rgb(0, 0, 0);
img{
    width:32px;
}
 
 &:hover{
     background: rgb(198,198,198);
 }

@media (max-width: 768px){
    height: 45px;
    padding: 0px 12px;
    font-size:12px;
    margin: 0px 10px 0px 0px;
    img{
        width: 25px;
    }
}
`;

const Trailer = styled(Player)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);

&:hover{
    color: black;
}
`;

const AddList = styled.div`
margin-right: 16px;
height: 44px;
width: 44px;
display: flex;
justify-content:center;
align-items:center;
background-color: rgba(0, 0,0, 0.6);
border-radius: 50%;
border:2px solid white;
cursor:pointer;
`;

export default Detail;
