import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage() {
  // useRouter hook'u genelde sayfa bileşenlerinde kullanılır. Bu bileşenler sayfa yönlendirmeleri ve dinamik URL'ler için kullanılır.
  const router = useRouter();
  const events = getAllEvents();

  // yönlendirme fonksiyonunu burada tanımlıyoruz ki kod daha temiz ve modüler olsun.
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
