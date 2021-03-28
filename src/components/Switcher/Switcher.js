import {Component} from 'react';
import './Switcher.scss';

export default class Switcher extends Component {
    state = {
        isPrivate: true
    };

    toggleSwitch = () => {
        this.setState(({isPrivate}) => ({
            isPrivate: !isPrivate
        }));
    };

    handlePublic = () => this.setState({isPrivate: false});
    handlePrivate = () => this.setState({isPrivate: true});

    render() {
        const {isPrivate} = this.state;
        return (
            <div className='custom-switcher'>
                <button className='custom-switcher__btn' onClick={this.handlePublic}>Public</button>
                <label className='switcher'>
                    <input className='switcher__input' type='checkbox' checked={isPrivate}
                           onChange={this.toggleSwitch}/>
                    <span className='switcher__slider'/>
                </label>
                <button className='custom-switcher__btn' onClick={this.handlePrivate}>Private</button>
            </div>
        );
    }
}