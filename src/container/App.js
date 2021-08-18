import './App.css';
import Aux from '../higher-order-container/Auxilliary';
import Contact from './Contact';

function App() {
  return (
    <Aux className="Contact">
        <Contact/>
    </Aux>
  );
}

export default App;
