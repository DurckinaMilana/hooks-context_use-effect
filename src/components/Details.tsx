import useFetching from "../hooks/useFetching";
import Loader from "./Loader/Loader";

type DetailsProps = {
  id: number
}

const Details: React.FC<DetailsProps> = ({ id }) => {
  const URL = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`;
  const { data: user, loading, error } = useFetching(
    URL,
    id
  );
  
  return (
    <div>
      { loading && <Loader /> }
      { error && <p>{error}</p>}
      { user &&
        'details' in user && 
        <div className="user">
          <img src={user.avatar} alt="photo" />
          <span className="user__item user__name">{user.name}</span>
          <span className="user__item">City: {user.details.city}</span>
          <span className="user__item">Company: {user.details.company}</span>
          <span className="user__item">Position: {user.details.position}</span>
        </div>
      }
    </div>
  )
}

export default Details