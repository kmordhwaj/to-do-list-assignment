import { shuffle } from 'lodash';
import { nanoid } from 'nanoid';
import { useContext, useEffect, useState } from 'react';
import CategoryContext from '../contexts/category-store';
import { Task } from '../types';

const useCategoryStore = () => {
  const [category, setCategory] = useContext(CategoryContext);



  

  const api = {
    category,
    setCategory
  };

  return api;
};

export default useCategoryStore;
