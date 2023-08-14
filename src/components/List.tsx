import { useState } from 'react';
import { Users } from '../interfaces/Users';
import Details from './Details';

type ListProps = {
  list: Users[]
}

const List: React.FC<ListProps> = ({ list }) => {
  const [getUser, setGetUser] = useState(false);
  const [id, setId] = useState(0);

  const handlerClick = (itemId: number) => {
    setId(itemId)
    setGetUser(itemId === id ? false : true);
  }

  return (
    <>
    <ul className='list'>
      {
        list.map(item => 
          <li
            className='item'
            key={item.id}
            onClick={() => handlerClick(item.id)}
          >{item.name}</li>
        )
      }
    </ul>
    {
      getUser &&
      <Details id={id} />
    }
    </>
  )
}

export default List