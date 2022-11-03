import './App.css';
import { BarHeader } from './components/BarHeader';
import { ContentBody } from './components/ContentBody';
import { Header } from './components/Header';

function App() {
  return (
    <div
      style={{
        maxWidth: '700px',
        width: '100vw',
        margin: 'auto',
        position: 'relative',
      }}
    >
      <Header></Header>
      <BarHeader></BarHeader>
      <ContentBody></ContentBody>
    </div>
  );
}

export default App;
