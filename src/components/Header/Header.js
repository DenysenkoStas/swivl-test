import {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.scss';

import logo from '../../assets/images/logo.svg';
import user from '../../assets/images/user.jpg';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__container container'>
                    <div className='header__row'>
                        <Link className='header__logo' to='/'>
                            <img src={logo} alt='logo'/>
                        </Link>
                        <div className='header-profile'>
                            <Link className='header-profile__link' to='/my-profile/'>
                                <span className='header-profile__name'>Arthur Wood</span>
                                <img className='header-profile__img' src={user} alt='user'/>
                            </Link>
                            <button className='header-profile__more-btn'>More actions</button>
                            <button className='header-profile__btn'>Notifications</button>
                            <button className='header-profile__btn share'>Share recap</button>
                            <button className='header-profile__btn medium'>Medium</button>
                        </div>
                    </div>
                    <div className='header__row'>
                        <nav className='header-nav'>
                            <NavLink className='header-nav__item' to='/'>Feed</NavLink>
                            <NavLink className='header-nav__item' to='/explore/'>Explore</NavLink>
                            <NavLink className='header-nav__item' to='/discussions/'>Discussions</NavLink>
                        </nav>
                        <div className='header__action-wrap'>
                            <button className='action-btn'>Add</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}