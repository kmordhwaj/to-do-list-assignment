import { createContext } from 'react';
import { Category } from '../types';

const TaskContext = createContext<
  [Category[], React.Dispatch<React.SetStateAction<Category[]>>]
>([[], () => {}]);

export default TaskContext;