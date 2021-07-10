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
export default Detail;
