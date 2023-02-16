import Map from '../components/Map/MapWrapper';
import LoginModal from '../components/Modal/Login';
import Navbar from '../components/Navbar/TopNav';

export default function Home() {
  return (
    <>
      <article>
        <Navbar />
        <Map>
          <LoginModal />
        </Map>
      </article>
    </>
  );
}
