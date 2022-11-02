import React,{useState, useEffect} from 'react'
import styled from 'styled-components';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { colors, GlobalStyle } from '../styles';
import TaskContext from '../contexts/task-store';
import useLocalStorage from '../hooks/use-local-storage';
import { Task } from '../types';
import ListScreen from './ListScreen';
import FocusScreen from './FocusScreen';
import axios from 'axios';

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

const Body = ({cat}) => {

   const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);

   const [isList, setIsList] = useState(true);
   var data = [];

  // const fetchData = async () => {
  //    data = await axios.get(`https://git.heroku.com/to-do-logical-loop.git/api/v1/${cat}/tasks`); 
  //   console.log(data);
  // }
  
  
  // useEffect(() => {
  //   fetchData();
  // }, [])

  return (
    <>
    <TaskContext.Provider value={[tasks, setTasks]}>      
       <h1 style={{color:'lightgreen'}}>{cat}</h1>
        <Nav>
              <TabButton to="/list" onClick={() => setIsList(true)} >
                List
              </TabButton>
              <TabButton to="/focus" onClick={() => setIsList(false)}>
                Focus
              </TabButton>
        </Nav>
          {
            isList ? <ListScreen /> : <FocusScreen/>
          }        
    </TaskContext.Provider> 
    </> 
  )
}

export default Body