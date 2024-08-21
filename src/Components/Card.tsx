import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { Todo, UserContext } from '../Context/AppContext';

interface Prop {
  info: string;
  id: number;
}

const Card: React.FC<Prop> = ({ info, id }) => {
  const {setWork } = useContext(UserContext);

  const handleDelete = (id: number) => {
    setWork(prevWork => prevWork.filter((data: Todo) => data.id !== id));
  };

  return (
    <div className='card'>
      <p>{info}</p>
      <button className='delete-btn' onClick={() => handleDelete(id)}><MdDelete className='md-delete'/></button>
    </div>
  );
};

export default Card;
