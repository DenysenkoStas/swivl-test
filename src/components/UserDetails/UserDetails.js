import {Component} from 'react';
import {Link} from 'react-router-dom';
import ClickAwayListener from 'react-click-away-listener';
import './UserDetails.scss';

import avatar from '../../assets/images/avatar.jpg';

export default class UserDetails extends Component {
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
        const {menuOpened, followers} = this.state;
        return (
            <article className='user'>
                <div className='user__wrap'>
                    <img className='user__img' src={avatar} alt='avatar'/>
                    <div className='user__aside'>
                        <div className='user__title-wrap'>
                            <h1 className='user__title'>Benjamin Clementine</h1>
                            <div className='dots-wrap'>
                                <button className='dots-wrap__btn' onClick={this.toggleMenu}>More actions</button>
                                {menuOpened && (
                                    <ClickAwayListener onClickAway={this.handleMenu}>
                                        <div className='dots-wrap__menu'>
                                            <button className='dots-wrap__action'>Report User</button>
                                            <button className='dots-wrap__action block'>Block User</button>
                                        </div>
                                    </ClickAwayListener>
                                )}
                            </div>
                        </div>
                        <span className='user__nick'>@benclementine</span>
                        <Link className='user__edit' to='/profile-edit/'>Edit Profile</Link>
                    </div>
                </div>
                <ul className='user__list'>
                    {followers.map(({id, num, title}) => (
                        <li key={id} className='user__list-item'>
                            <p>{num}</p>
                            <h4>{title}</h4>
                        </li>
                    ))}
                </ul>
                <p className='user__desc'>Cryptocurrencies including Ethereum, Ripple, and Litecoin have all plunged
                    between 20 to 30 percent each, according to CoinMarketCap. Here is the latest Ripple price news and
                    live updates on XRP, bitcoin and Ethereum.</p>
            </article>
        );
    }
}