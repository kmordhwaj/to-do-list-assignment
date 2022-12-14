import React, { ChangeEvent, KeyboardEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import Checkbox from '../components/Checkbox';
import IconButton from '../components/IconButton';
import Spacer from '../components/Spacer';
import TextButton from '../components/TextButton';
import useTaskStore from '../hooks/use-task-store';
import DeleteIcon from '../icons/DeleteIcon';
import { Task } from '../types';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 460px;
  width:100%
`;

const List = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 45px 24px;
`;

const ListItem = styled.label`
  align-items: center;
  display: flex;
  font-size: 18px;
  padding: 4px 4px;
  cursor:pointer;

  :hover {
  background:rgba(255, 255, 255, 0.1);
}
`;

const DeleteButton = styled(IconButton)`
  visibility: hidden;

  ${ListItem}:hover & {
    visibility: visible;
  }
`;

const Input = styled.input`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 15px;
  color: #fff;
  padding: 20px 24px;
`;

type Props = {};

const ListScreen: React.FC<Props> = () => {
  const { addTask, tasks, setTasks, updateTaskCompletion } = useTaskStore();
  const [newTaskLabel, setNewTaskLabel] = useState('');

  // const fetchData =  () => {
  //   axios.get('https://git.heroku.com/to-do-logical-loop.git/api/v1/tasks').then(res => {
  //     ({ tasks: res.data });
  // })
  // .catch(function (error) {
  //     console.log(error);
  // })
  // }
  
  // useEffect(() => {
  //   fetchData();
  // }, [])

  const handleNewTaskLabelChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTaskLabel(e.target.value);

  const handleNewTaskKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      addTask({ label: newTaskLabel });
 
    //  // promise instead of async await
    //   axios.post('/api/v1/tasks', {name:newTaskLabel})
    //   .then((res) => {
    //       console.log(res.data)
    //   }).catch((error) => {
    //       console.log(error)
    //   });

      setNewTaskLabel('');
    }
  };

  const handleTaskCompleteChange =
    (task: Task) => (e: ChangeEvent<HTMLInputElement>) => {
      updateTaskCompletion(task.id, e.target.checked);
    };

  const handleTaskDeleteClick = (handledTask: Task) => () => {
    setTasks((tasks) => tasks.filter((task) => {
     
    return (task.id !== handledTask.id);

    //   axios.delete(`https://git.heroku.com/to-do-logical-loop.git/api/v1/tasks/${task.id}`)
    //   .then((res) => {
    //       console.log(res.data)
    //   }).catch((error) => {
    //       console.log(error)
    //   });
   
  }))};

  const handleClearClick = () =>
    setTasks((tasks) => tasks.filter((task) => !task.isComplete));

  console.log(tasks);

  return (
    <>
    <Container>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <Checkbox
              checked={task.isComplete}
              onChange={handleTaskCompleteChange(task)}
            />
            <Spacer width={24} />
            {task.label}
            <Spacer flex={1} />
            <DeleteButton onClick={handleTaskDeleteClick(task)}>
              <DeleteIcon />
            </DeleteButton>
          </ListItem>
        ))}
      </List>
      <Spacer height={30} />
      <Input
      style={{cursor:'pointer'}}
        placeholder="Add a task"
        value={newTaskLabel}
        onChange={handleNewTaskLabelChange}
        onKeyPress={handleNewTaskKeyPress}
      />
      <Spacer height={45} />
      <TextButton onClick={handleClearClick} style={{ alignSelf: 'center', cursor:'pointer'}}>
        clear completed
      </TextButton>
    </Container>
    </>
  );
};

export default ListScreen;
