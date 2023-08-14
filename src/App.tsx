
import List from "./components/List";
import Loader from "./components/Loader/Loader";
import useFetching from "./hooks/useFetching";

function App() {
  const { data, loading, error } = useFetching(
    'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json',
    null
  );

  return (
    <div className="app">
      { loading && <Loader /> }
      { error && <p>{error}</p>}
      {
        Array.isArray(data) &&
        data.length > 0 && 
        <List list={data} />
      }
    </div>
  )
}

export default App