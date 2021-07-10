import styled from 'styled-components'
import ImgSlider from '../components/ImgSlider'
import Viewers from '../components/Viewers'
import Recommends from '../components/Recommends'
import NewDisney from '../components/NewDisney'
import Originals from '../components/Originals'
import Trending from '../components/Trending'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommends.push({ id: doc.id, ...doc.data() })
                        break;

                    case 'new':
                        newDisneys.push({ id: doc.id, ...doc.data() })
                        break;

                    case 'original':
                        originals.push({ id: doc.id, ...doc.data() })
                        break;

                    case 'trending':
                        trending.push({ id: doc.id, ...doc.data() })
                        break;
                }
            });
        });
        dispatch(
            setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending,
            })
        );
    });

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
