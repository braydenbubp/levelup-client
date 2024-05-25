import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const EventCard = ({
  description,
  date,
  time,
  organizer,
  game,
}) => (
  <Card className="text-center">
    <Card.Header>{game.title}</Card.Header>
    <Card.Body>
      <Card.Title>On {date} at {time}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Organized by: {organizer.id}</Card.Footer>
  </Card>
);

EventCard.propTypes = {
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
};

export default EventCard;
