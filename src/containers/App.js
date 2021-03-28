import {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header/Header';
import FeedPage from '../pages/FeedPage/FeedPage';
import NotFound from '../components/NotFound/NotFound';
import '../assets/styles/main.scss';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='app-container'>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={FeedPage}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}