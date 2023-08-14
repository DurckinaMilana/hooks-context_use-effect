import { useEffect, useState } from 'react'
import { Users } from '../interfaces/Users';
import { UserDetails } from '../interfaces/UserDetails';
import { FetchingReturn } from '../interfaces/FetchingReturn';

const useFetching = ( url: string, dependence: null | number ): FetchingReturn => {
  const [ data, setData ] = useState<null | Users[] | UserDetails>(null);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    const fethData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error fetching');
        const result = await response.json();
        setData(() => result)
        
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fethData();

    return () => {
      setData(null);
      setError('');
    };
  }, [dependence, url]);

  return { data, loading, error }
}

export default useFetching