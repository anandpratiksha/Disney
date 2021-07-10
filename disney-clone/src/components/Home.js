import styled from 'styled-components'
import ImgSlider from '../components/ImgSlider'
import Viewers from '../components/Viewers'
import Recommends from '../components/Recommends'
import NewDisney from '../components/NewDisney'
import Originals from '../components/Originals'
import Trending from '../components/Trending'

const Home = (props) => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
};

const Container = styled.main`
position:relative;
min-height:calc(100vh - 250px);
overflow-x:hidden;
display:block;
top:72px;
padding:0 calc(3.5vw + 5px);

&:after {
background:url('/images/home-background.png') center center / cover no-repeat fixed;
content:"";
position:absolute;
inset:0px;
opacity:1;
z-index:-1;
}
`;


// const  = styled.``;
// const  = styled.``;
// const  = styled.``;
// const  = styled.``;
// const  = styled.``;


export default Home
