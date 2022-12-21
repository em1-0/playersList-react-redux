import { useDispatch, useSelector } from 'react-redux';
/* UI */
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
/* Store */
import { selectorAllFilters } from 'store/filters/filters-selectors';
import { clearFilter, removeFilter } from '../store/filters/filters-actions';
import { addFilter } from '../store/filters/filters-actions';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const FilterList = useSelector(selectorAllFilters);

  const positionFilters = ['Carry', 'Mid', 'Offlane', 'Soft support', 'Full support'];
  const countryFilters = ['Russia', 'Ukraine'];
  const teamFilters = ['Spirit', 'BetBoom', 'HellRaisers'];

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {FilterList.length === 0 && <Badge>All players</Badge>}
          {FilterList.map((filter) => (
            <Badge key={filter} variant="clearable" onClear={() => dispatch(removeFilter(filter))}>{filter}</Badge>
          ))}
        </Stack>

        <Badge colorScheme="dark" variant="basic" onClick={() => dispatch(clearFilter)}> Clear </Badge>
      </div>

      <div className="filter-panel-wrapper">
        <Stack>
          <Badge colorScheme='dark'>Position</Badge>
          {positionFilters.map((filter) =>
            <Badge key={filter} colorScheme="light" variant="add" onClick={() => dispatch(addFilter(filter))}> {filter} </Badge>)}
        </Stack>
      </div>

      <div className="filter-panel-wrapper">
        <Stack>
          <Badge colorScheme='dark'>Country</Badge>
          {countryFilters.map((filter) =>
            <Badge key={filter} colorScheme="light" variant="add" onClick={() => dispatch(addFilter(filter))}> {filter} </Badge>)}
        </Stack>
      </div>

      <div className="filter-panel-wrapper">
        <Stack>
          <Badge colorScheme='dark'>Team</Badge>
          {teamFilters.map((filter) =>
            <Badge key={filter} colorScheme="light" variant="add" onClick={() => dispatch(addFilter(filter))}> {filter} </Badge>)}
        </Stack>
      </div>
    </Card>

  )
}

export { FilterPanel };