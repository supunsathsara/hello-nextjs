import { useState } from 'react';
import { useRouter } from 'next/router';

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      'http://localhost:4000/events?category=sports'
    );
    const data = await response.json();
    setEvents(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };

  const fetchEvent = async (event) => {
    if (!event) {
      const response = await fetch(`http://localhost:4000/events`);
      const data = await response.json();
      setEvents(data);
      router.push(`/events`, undefined, { shallow: true });
    } else {
      const response = await fetch(
        `http://localhost:4000/events?category=${event}`
      );
      const data = await response.json();
      setEvents(data);
      router.push(`/events?category=${event}`, undefined, { shallow: true });
    }
  };

  return (
    <>
      <h1>Events</h1>
      <button onClick={() => fetchEvent('')}>All</button>
      <button onClick={fetchSportsEvents}>Sports</button>
      <button onClick={() => fetchEvent('food')}>Food</button>
      <button onClick={() => fetchEvent('tech')}>Tech</button>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} <b>{event.title} </b> {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `?category=${category}` : '';
  //const queryString = category ? `?category=sports` : '';
  const response = await fetch(`http://localhost:4000/events${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
