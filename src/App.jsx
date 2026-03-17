import Header from './components/Header';
import Hero from './components/Hero';
import DashboardGrid from './components/DashboardGrid';
import InnovationLayer from './components/InnovationLayer';
import EmergencyButton from './components/EmergencyButton';

function App() {
  return (
    <div className="min-h-screen bg-nature-surface relative selection:bg-nature-peach selection:text-white pb-20">
      <Header />
      
      <main>
        <Hero />
        <DashboardGrid />
        <InnovationLayer />
      </main>

      <EmergencyButton />
    </div>
  );
}

export default App;
