import PropTypes from 'prop-types';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const JobPosition = ({
  id,
  nickname,
  avatar,
  new: isNew,
  tiwinner,
  position,
  contract,
  location,
  tags,
  handleAddFilter,
}) => {
  const badges = [].concat(position, contract, location, ...tags);

  const team = {
    "Spirit": "./images/teamspirit.png",
    "BetBoom": "./images/betboom.png",
    "HellRaisers": "./images/hellraisers.webp"
  };

  return (
    <Card isFeatured={tiwinner}>
      <div className='job-position'>

        <div className='job-position-info'>
          <img
            className='job-position-avatar'
            src={avatar}
            alt={nickname}
          />
          <img
            className='job-postion-teamlogo'
            src={team[contract]}
            alt={nickname}
          />
          <div className='job-position-body'>
            <div className='job-postion-company'>
              <h3>{nickname}</h3>
              {(isNew || tiwinner) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="light">
                      NEW!
                    </Badge>
                  )}
                  {tiwinner && (
                    <Badge variant="rounded" colorScheme="dark" onClick={() => handleAddFilter('TI Champ')}>
                      ★
                    </Badge>
                  )}
                </Stack>
              )}
            </div>

            <h2 className='job-position-title'>
              {contract}
            </h2>
            <Stack>
              <div className='job-position-meta'>
                {position}
              </div>
              <div className='job-position-meta'>
                {location}
              </div>
            </Stack>
          </div>
        </div>

        <Stack pos={'end'}>
          {badges.map(item => (
            <Badge onClick={() => handleAddFilter(item)} key={id}>{item}</Badge>
          ))}
        </Stack>
      </div>
    </Card>
  )
}

export { JobPosition };

JobPosition.propTypes = {
  id: PropTypes.number,
  nickname: PropTypes.string,
  avatar: PropTypes.string,
  new: PropTypes.bool,
  tiwinner: PropTypes.bool,
  position: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  location: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};