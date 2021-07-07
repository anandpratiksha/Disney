import styled from 'styled-components'

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.png" alt="" />
                </a>
                <span>Home</span>

            </NavMenu>
        </Nav>
    )
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
`;


const Logo = styled.a`
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
font-size:8;
display:inline-block;
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
@media(max-width:768px){
    display:none;
}
`;
// const Nav = styled.nav``;
export default Header;
