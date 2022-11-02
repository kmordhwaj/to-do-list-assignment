import { colors, GlobalStyle } from '../styles';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

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

const LogInScreen = () => {
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
        <LoginForm/>
          </div>
        </Layout>
  </>
  );
};

export default LogInScreen;