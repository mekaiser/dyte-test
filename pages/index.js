import Meeting from "../components/Meeting";

export default function Home({roomName, authToken}) {
  return (
    <div>
      <Meeting roomName={roomName} authToken={authToken} />
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      roomName: process.env.DYTE_ROOM_NAME,
      authToken: process.env.DYTE_AUTH_TOKEN,
    },
  };
}