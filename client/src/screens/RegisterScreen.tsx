import { colors, GlobalStyle } from '../styles';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 25px;
`;

const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

const TabButton = styled(NavLink)`
  align-items: center;
  background: #000;
  color: #fff;
  display: flex;
  height: 62px;
  justify-content: center;
  text-decoration: none;
  width: 120px;

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &.active {
    background: ${colors.primary};
    color: #000;
  }
`;

const RegisterScreen = () => {


    
  return (
    <>
    <GlobalStyle />       
        <Layout>
          <div className='layout'>
             <div>
               <div className='logo'>
               <img height={60} width={60} src="logo.png" alt="logo" />
               Logical Loop
               </div>     
            </div>          
            <div className="rightBody">
             <form action="">
               <div className="form">
               <input
              type="email"
              placeholder="Enter Your Email"
              className="textInput"
                />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="textInput"
            />
          </div>
          <button className="navButto">Login</button>
        </form>
        <div className="login">
          <span className="already">Don't have an account?</span>
          <nav>
            <Link to="/register" className="loginaccount">
              Register
            </Link>
          </nav>
        </div>
      </div>
          </div>
        </Layout>
    </>
  );
};

export default RegisterScreen;