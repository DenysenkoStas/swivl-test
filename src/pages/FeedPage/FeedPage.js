import {Component} from 'react';
import UserDetails from '../../components/UserDetails/UserDetails';
import Switcher from '../../components/Switcher/Switcher';
import CardItem from '../../components/CardItem/CardItem';
import './FeedPage.scss';

export default class FeedPage extends Component {
    state = {
        cardList: [
            {id: 0, shared: false},
            {id: 1, shared: false},
            {id: 2, shared: true},
            {id: 3, shared: true, viaLink: true}
        ]
    };

    render() {
        const {cardList} = this.state;
        return (
            <main className='profile-page container'>
                <div className='profile-page__small-cell'>
                    <UserDetails/>
                </div>
                <div className='profile-page__medium-cell'>
                    <div className='profile-page__switcher'>
                        <Switcher/>
                    </div>
                    <div className='profile-page__card-list'>
                        {cardList.map(({id, shared, viaLink}) => (
                            <CardItem key={id} shared={shared} viaLink={viaLink}/>
                        ))}
                    </div>
                </div>
            </main>
        );
    }
}