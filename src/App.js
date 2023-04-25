import './App.css';
import { Card } from './components/Card';
import { Data } from './components/Data';

function App() {

  const renderData = (data) => {
    return (
      <Card
        key={data.id}
        id={data.id}
        emoji={data.emoji}
        meaning={data.meaning}
      />
    )
  }

  return (
    <div className='container'>
      <div className='row'>
        {Data.map(renderData)}
      </div>

    </div>
  );
}

export default App;
