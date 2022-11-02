import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import TaskContext from '../contexts/task-store';
import useLocalStorage from '../hooks/use-local-storage';
import { colors, GlobalStyle } from '../styles';
import { Task } from '../types';
import '../app.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Body from '../components/Body';
import { Container, Button, Link } from 'react-floating-action-button'
import { FaPlus } from 'react-icons/fa';


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

function HomeScreen() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [cat, setCat] = useState(1);

  const [category, setCategory] = useState(1);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);

const handleMouseEnter1 = () => {
  setIsHovering1(true);
  setCategory(1);
}

const handleMouseLeave1 = () => {
  setIsHovering1(false);
}

const handleMouseEnter2 = () => {
  setIsHovering2(true);
  setCategory(2);
}

const handleMouseLeave2 = () => {
  setIsHovering2(false);
}

const handleMouseEnter3 = () => {
  setIsHovering3(true);
  setCategory(3);
}

const handleMouseLeave3 = () => {
  setIsHovering3(false);
}

const handleMouseEnter4 = () => {
  setIsHovering4(true);
  setCategory(4);
}

const handleMouseLeave4 = () => {
  setIsHovering4(false);
}

const handleMouseEnter5 = () => {
  setIsHovering5(true);
  setCategory(5);
}

const handleMouseLeave5 = () => {
  setIsHovering5(false);
}


function showCategory(category){
  switch (category) {
    case 1:
      return <Body cat='Sports'/>
    case 2:
      return <Body cat='Studies'/>
    case 3:
      return <Body cat='Shopping'/>
    case 4:
      return <Body cat='Billing'/>
    case 5:
      return <Body cat='Coding'/>
    default:
      return <Body cat='Sports'/> 
  }
}

 function handleLogout(){}

  return (
    <div>
      <GlobalStyle />
          <div>
            <div className='logo'>
                <img height={60} width={60} src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" />
                Logical Loop             
            </div>            
          </div>
          <Layout>
            <div className='layout'>    
              <div className='categories'>              
             <div className='concept'>
              <div className='category'>
                <img onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} style={{
                  border: isHovering1 ? '3px solid black' : '',
                }}  height={80} width={80} src='data:image/jpeg;base64,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' alt="" />
              </div>
              <div className='category'>
                <img onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} style={{
                  border: isHovering2 ? '3px solid black' : ''
                }}  height={80} width={80} src='https://i.pinimg.com/474x/5b/61/c5/5b61c584df554f546f9076ce166fde8d.jpg' alt="" />
              </div>
              <div className='category'>
                <img onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} style={{
                  border: isHovering3 ? '3px solid black' : ''
                }} height={80} width={80} src='https://previews.123rf.com/images/frankrohde/frankrohde1104/frankrohde110403988/9370776-beautiful-illustrated-flower-background-design-with-gradient.jpg' alt="" />
              </div>
              </div>
               <div className='concept'>
              <div className='category'>
                <img onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} style={{
                  border: isHovering4 ? '3px solid black' : ''
                }} height={80} width={80} src='https://thumbs.dreamstime.com/z/beautiful-butterfly-design-17200443.jpg' alt="" />
              </div>
              <div className='category'>
                <img onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} style={{
                  border: isHovering5 ? '3px solid black' : ''
                }} height={80} width={80} src='https://image.shutterstock.com/image-illustration/3d-picture-golden-tree-white-260nw-2158251121.jpg' alt="" />
              </div>
              </div>
              
              </div>
              {showCategory(category)}  
            </div>
          </Layout>
          <Container className='fab'>
            <Link href="#"
                tooltip="Log Out"
                icon="fa-sticky-note" 
                />
            <Link href="#"
                tooltip="Visit Profile"
                icon= "fa-plus" />
                {/* className="fab-item btn btn-link btn-lg text-white" */}
            <Button                
                tooltip="Explore your Account!"
                icon={<FaPlus color='white'/>}
                rotate={true}
                onClick={() => alert('FAB Rocks!')}
                styles={{backgroundColor:'purple', color: 'white'}}
                />
                </Container>
    </div>
  );
}

export default HomeScreen;
