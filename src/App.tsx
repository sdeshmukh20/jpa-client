
import {AppRouter} from './AppRouter'
import {BrowserRouter as Router,Switch} from 'react-router-dom'
export default function App() {
  return (
   <div>
      <Router>
       <AppRouter/>
      </Router>
      </div>
  );
}
