import {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.scss';

import logo from '../../assets/images/logo.svg';
import user from '../../assets/images/user.jpg';

export default class Header extends Component {
    state = {
        menuOpened: false
    };

    toggleMenu = () => {
        this.setState(({menuOpened}) => ({
            menuOpened: !menuOpened
        }));
    };

    render() {
        const {menuOpened} = this.state;
        return (
            <header className='header'>
                <div className='header-mob'>
                    <Link className='header-mob__logo header__logo' to='/swivl-test/'>
                        <img src={logo} alt='logo'/>
                    </Link>
                    <button className={`header-mob__btn${menuOpened ? ' opened' : ''}`}
                            onClick={this.toggleMenu}>
                        <span>Open menu</span>
                    </button>
                </div>

                <div className={`header__container container${menuOpened ? ' opened' : ''}`}>
                    <div className='header__row'>
                        <Link className='header__logo' to='/swivl-test/'>
                            <img src={logo} alt='logo'/>
                        </Link>
                        <div className='header-profile'>
                            <div className='header-profile__inner'>
                                <Link className='header-profile__link' to='/swivl-test/my-profile/'>
                                    <span className='header-profile__name'>Arthur Wood</span>
                                    <img className='header-profile__img' src={user} alt='user'/>
                                </Link>
                                <button className='header-profile__more-btn'>More actions</button>
                            </div>

                            <div className='header-profile__inner'>
                                <button className='header-profile__btn'>Notifications</button>
                                <button className='header-profile__btn share'>Share recap</button>
                                <button className='header-profile__btn medium'>Medium</button>
                            </div>
                        </div>
                    </div>
                    <div className='header__row'>
                        <nav className='header-nav'>
                            <NavLink className='header-nav__item' to='/swivl-test/' exact>Feed</NavLink>
                            <NavLink className='header-nav__item' to='/swivl-test/explore/' exact>Explore</NavLink>
                            <NavLink className='header-nav__item' to='/swivl-test/discussions/' exact>Discussions</NavLink>
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