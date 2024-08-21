import React, { useContext } from 'react';
import { Data, Todo, UserContext } from '../Context/AppContext';
import Card from './Card'; // Import the Card component

const Cards: React.FC = () => {
  const { work } = useContext<Data>(UserContext);

  return (
    <div className='cards'>
      {work.map((info: Todo) => (
        <Card key={info.id} info={info.todo} id={info.id} />
      ))}
    </div>
  );
};

export default Cards;
