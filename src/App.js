import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayers } from 'store/players/players-actions';

import data from './mock/data.json'

function App() {
  const dispatch = useDispatch();
  const shuffledNumbers = data.sort(() => {
    return Math.random() - 0.5;
  });

  useEffect(() => {
    dispatch(addPlayers(shuffledNumbers));
  });

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
