import {Component} from 'react';
import {Link} from 'react-router-dom';
import './CardItem.scss';

import avatar from '../../assets/images/avatar.jpg';

export default class CardItem extends Component {
    state = {
        menuOpened: false,
        followers: [
            {id: 0, num: 45, title: 'synths'},
            {id: 1, num: 110, title: 'followers'},
            {id: 2, num: 322, title: 'following'}
        ]
    };

    toggleMenu = () => {
        this.setState(({menuOpened}) => ({
            menuOpened: !menuOpened
        }));
    };

    handleMenu = () => this.setState({menuOpened: false});

    render() {
        const {id, img, shared, viaLink} = this.props;
        return (
            <div key={id} className='card-item'>
                <div className='card-item__info'>
                    {shared && (
                        <>
                            <span className={viaLink ? 'with-link-icon' : null}>
                                {viaLink ? 'Shared via weblink' : 'Shared to'}</span>
                            {!viaLink && <Link className='tag-item' to='/tags/'>#discussionaboutanimgttdds…</Link>}
                        </>
                    )}
                </div>
                <h2 className='card-item__title'>New air routes that promise cheap flights in</h2>
                <div className='card-item__wrap'>
                    <div className='card-item__author'>
                        <div className='card-item__img'>
                            {img && <img className='card-item__img' src={avatar} alt='avatar'/>}
                        </div>
                        <span className='card-item__name'>Gregory Watkins</span>
                    </div>
                    <div className='card-item__actions'>
                        {shared ? (
                            <>
                                <Link className='btn-with-num' to='/view/'>
                                    View <span>88</span>
                                </Link>
                                <button className='btn-with-num btn-with-num--like'>
                                    Like <span>24</span>
                                </button>
                            </>
                        ) : (
                            <button className='text-btn'>Share</button>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}