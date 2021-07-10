import styled from 'styled-components'
import { auth, provider } from '../firebase';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { selectUserName, selectUserPhoto, selectLoginDetails, setUserLoginDetails, setSignOutState } from '../features/user/userSlice'


const Header = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                history.push('/home');
            }
        });
    }, [userName]);


    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider)
                .then((result) => {
                    setUser(result.user);
                })
                .catch((error) => {
                    alert(error.message);
                });
        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState())
                history.push('/');
            })
                .catch((error) => {
                    alert(error.message);
                })
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoUrl,
            })
        );
    };

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
            {
                !userName ? (
                    <Login onClick={handleAuth}>Login</Login>
                ) : (
                    <>
                        <NavMenu>
                            <a>
                                <img src="/images/home-icon.png" alt="" />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src="/images/search-icon.svg" alt="" />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src="/images/watchlist-icon.png" alt="" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src="/images/original-icon.png" alt="" />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src="/images/movie-icon.png" alt="" />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src="/images/series-icon.png" alt="" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPhoto} alt={userName} />
                            <DropDown>
                                <span onClick={handleAuth}>SignOut</span>
                            </DropDown>
                        </SignOut>
                    </>
                )}
        </Nav>
    );
};

const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
z-index:3;
letter-spacing:16px;
`;


const Logo = styled.a`
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
font-size:8;
display:inline-block;
cursor:pointer;
img{
    display:block;
    width:100%;
}
`;
const NavMenu = styled.div`
align-items:center;
display:flex;
flex-row:row nowrap;
height:100%;
justify-content:flex-end;
margin:0px;
padding:0px;
position:relative;
marging-right:auto;
margin-left:25px;
cursor:pointer;

a{
    display:flex;
    align-items:center;
    padding:0 12px;

    img {
        height:20px;
        min-width:20px;
        width:20px;
        z-index:auto;
    }
    span{
        color:rgb(249, 249, 249);
        font-size:13px;
        letter-spacing:1.42px;
        line-height:1.08;
        padding:2px 0px;
        white-space:nowrap;
        position:relative;
    
    &:before{
        background-color:rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom:-6px;
        content:"";
        height:2px;
        opacity:0;
        position:absolute;
        right:0;
        transform-origin : left center;
        transform: scaleX(0);
        transition : all 250ms cubic-bezier(0.025, 0.46, 0.45, 0.95) 0s;
        visibility:hidden;
        width:auto;
        left:0px;
    }
}

&:hover{
  span:before{
      transform: scaleX(1);
      visibility:visible;
      opacity:1 !important;
  }  
}
}
${'' /* @media(max-width:768px){
    display:none;
} */}
`;

const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding:8px 16px;
text-transform:uppercase;
letter-spacing:1.5px;
border:1px solid #f9f9f9;
border-radius:4px;
transition: all 0.2s ease 0s;
cursor:pointer;

&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}
`;

const UserImg = styled.img`
height: 100%;
letter-spacing:1px;
`;

const DropDown = styled.div`
position: absolute;
top:48px;
right:0px;
background:rgb(19,19,19);
border:1px solid rgba(151,151,151,0.34);
border-shadow:rgba(0 0 0 /50%) 0px 0px 18px 0px;
border-radius:4px;
padding:10px;
font-size:14px;
letter-spacing:3px;
width:100%;
opacity:0;
`;

const SignOut = styled.div`
position: relative;
height:48px;
width:90px;
display:flex;
cursor:pointer;
justify-content:center;
${UserImg}{
    border-radius:50%;
    width:100%;
    height:100%;
}
&:hover{
    ${DropDown}{
        opacity:1;
        transition-duration:1s;
    }
}
`;
export default Header;
