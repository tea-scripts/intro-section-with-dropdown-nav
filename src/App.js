import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Attribution from './components/attribution';
import { useSidebarContext } from './context/sidebar_context';

function App() {
  const { isSidebarOpen } = useSidebarContext();

  return (
    <main className={`${isSidebarOpen ? 'overlay' : null}`}>
      <Sidebar />
      <Navbar />
      <Hero />
      <Attribution />
    </main>
  );
}

export default App;
