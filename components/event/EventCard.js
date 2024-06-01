import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { deleteEvent } from '../../utils/data/eventData';

const EventCard = ({
  id,
  description,
  date,
  time,
  organizer,
  game,
  onUpdate,
}) => {
  const router = useRouter();

  const handleUpdate = () => {
    router.push(`/events/edit/${id}`);
  };

  const deleteThisEvent = () => {
    if (window.confirm(`Delete ${game.title}?`)) {
      deleteEvent(id).then(() => onUpdate());
    }
  };

  return (
    <Card className="text-center">
      <Card.Header>{game.title}</Card.Header>
      <Card.Body>
        <Card.Title>On {date} at {time}</Card.Title>
        <Card.Text>Whats happening: {description}</Card.Text>
        <Button onClick={handleUpdate} style={{ width: '100px' }}>Edit</Button>
        <Button onClick={deleteThisEvent} style={{ width: '100px' }}>Delete</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Organized by: {organizer.id}</Card.Footer>
    </Card>
  );
};

EventCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EventCard;
