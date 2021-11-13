
import {AppRouter} from './AppRouter'
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import RecursiveExample from './example/my-templates/test-route/RecursiveRouter';
export default function App() {
  return (
   <div>
      <Router>
        
       <AppRouter/>
      </Router>
      </div>
  );
}
