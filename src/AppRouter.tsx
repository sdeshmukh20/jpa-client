import { Route, NavLink, Switch,Redirect } from 'react-router-dom'
import Notfound from './jpa_templates/NotFound'
import JpaHome from './jpa_templates/JpaHome'
import ParentFunction from './jpa_templates/UseRefCase'
import { WelcomeDialog } from './example/WelcomeDialog'
import AppX from './example/ChildRouteExample'

export function AppRouter() {
    
    return (

        <div>
            <div>
                <Switch>
                    <Route exact path="/">
                    <Redirect to="/jpa2" />
                    </Route>
                    <Route path="/jpa2" component={JpaHome} />
                    <Route component={Notfound} />
                </Switch>
            </div>
        </div>

    )
}