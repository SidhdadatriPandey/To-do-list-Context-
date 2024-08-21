import React, { useContext, ChangeEvent, useState, FormEvent } from 'react';
import { Data, Todo, UserContext } from '../Context/AppContext';

const Input: React.FC = () => {
  const { work, setWork } = useContext<Data>(UserContext);
  const [inp, setInp] = useState<Todo>({ todo: '', id: 0 });

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (inp.todo.trim()) {  
      setWork(prevWork => [...prevWork, inp]);
      setInp({ todo: '', id: 0 });  
      console.log([...work, inp]);
    }
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setInp({
      todo: ev.target.value,
      id: Date.now(),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inp.todo}
          className="input"
          onChange={handleChange}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}

export default Input;
