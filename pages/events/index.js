import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getEvents } from '../../utils/data/eventData';
import EventCard from '../../components/event/EventCard';
import { useAuth } from '../../utils/context/authContext';

function EventPage() {
  const [events, setEvents] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  const getAllEvents = () => {
    getEvents(user.uid).then((data) => setEvents(data));
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <>
      <article className="events">
        <h1>Events</h1>
        {events.map((event) => (
          <section key={`event--${event.id}`} className="event">
            <EventCard description={event.description} date={event.date} time={event.time} organizer={event.organizer} game={event.game} id={event.id} joined={event.joined} onUpdate={getAllEvents} />
          </section>
        ))}
      </article>
      <>
        <Button onClick={() => { router.push('/events/new'); }}>
          Register New Event
        </Button>
      </>
    </>
  );
}

export default EventPage;
