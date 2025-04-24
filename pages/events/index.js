import { useRouter } from "next/router";
import Head from "next/head";

import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage(props) {
  // useRouter hook'u genelde sayfa bileşenlerinde kullanılır. Bu bileşenler sayfa yönlendirmeleri ve dinamik URL'ler için kullanılır.
  const router = useRouter();
  const { events } = props;

  // yönlendirme fonksiyonunu burada tanımlıyoruz ki kod daha temiz ve modüler olsun.
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60, // 60 saniyede bir güncellenmesini istiyoruz. (incremental static generation)
  };
}

export default AllEventsPage;
