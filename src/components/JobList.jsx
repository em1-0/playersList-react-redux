import { useSelector, useDispatch } from 'react-redux';
/* Comps */
import { JobPosition } from './JobPosition';
/* Store */
import { selectorVisiblePlayers } from 'store/players/players-selectors';
import { selectorAllFilters } from '../store/filters/filters-selectors';
import { addFilter } from 'store/filters/filters-actions';

const JobList = () => {
  const filters = useSelector((item) => selectorAllFilters(item));
  const players = useSelector((state) => selectorVisiblePlayers(state, filters));

  const dispatch = useDispatch();
  const handleAddFilter = (filter) => dispatch(addFilter(filter));

  return (
    <div className='job-list'>
      {players.map(item => (
        <JobPosition handleAddFilter={handleAddFilter} key={item.id} {...item} />
      ))
      }
    </div>
  )
}

export { JobList };