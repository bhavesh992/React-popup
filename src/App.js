import { useCallback, useState } from 'react';
import './App.css';
import Popup from './Popup';

function App() {

  const [showPopup, setPopup] = useState(false)

  const openPopup = useCallback(() => {
    setPopup(true);
  }, [])

  const handleHoveredPopup = useCallback(() => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 3000)
  })

  return (
    <div className='main'>
      <h1>React Popup</h1>
      <button onClick={openPopup} onMouseEnter={handleHoveredPopup}>Open Popup</button>
      <Popup trigger={showPopup} setTrigger={setPopup}>
        <h3>Popup Content</h3>
      </Popup>
    </div>
  );
}

export default App;
