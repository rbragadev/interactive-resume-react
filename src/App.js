import './App.css';
import { BarHeader } from './components/BarHeader';
import { ContentBody } from './components/ContentBody';
import { Header } from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <BarHeader></BarHeader>
      <ContentBody></ContentBody>
    </div>
  );
}

export default App;
