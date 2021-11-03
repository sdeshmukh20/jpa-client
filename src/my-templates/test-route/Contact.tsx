import React from 'react'
import { Route, Link } from 'react-router-dom'
//const Contacts = ({ match }) => <p>{match.params.id}</p>

function myContact(match:any){
    return (<p>{match.params.id}</p>)
}
class Contact extends React.Component {

    render() {
        //const { url } = this.props.match;
        return (<div>
            <h1>Welcome to contact page</h1>
            <strong>Select contact Id</strong>
            <ul>
                <li>
                    <Link to='/contact/1'>Contact 1</Link>
                </li>
                <li>
                    <Link to='/contact/2'>Contact 2</Link>
                </li>
                <li>
                    <Link to='/contact/3'>Contact 3</Link>
                </li>
                <li>
                    <Link to='/contact/4'>Contact 4</Link>
                </li>
            </ul>
            <Route path="/contact/:id" component={myContact}></Route>
        </div>);
    }
}
export default Contact;