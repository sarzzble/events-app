import { getEventById, getFeaturedEvents } from "../../helpers/api-util.js";
import EventSummary from "../../components/event-detail/event-summary.js";
import EventLogistics from "../../components/event-detail/event-logistics.js";
import EventContent from "../../components/event-detail/event-content.js";

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

// burada context'e ihtiyacımız var. çünkü dynamic-page'den eventId'yi almalıyız.
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30, // 30 saniyede bir güncellenmesini istiyoruz. (incremental static generation)
  };
}

// getStaticProps ile dinamik sayfa oluştururken, hangi dinamik URL’lerin build-time'da statik olarak oluşturulacağını Next.js’in bilmesi için getStaticPaths kullanmak zorundayız.
export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

// getStaticProps → her path için veri getirip sayfayı oluşturur.
// getStaticPaths → path’leri bildirir.

export default EventDetailPage;
