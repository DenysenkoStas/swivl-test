import {useHistory} from 'react-router-dom';
import './NotFound.scss';

export default function NotFound() {
    const {push} = useHistory();
    return (
        <div className='not-found container'>
            <h1 className='not-found__title'>404</h1>
            <p className='not-found__desc'>Sorry, page not found</p>
            <button className='btn' onClick={() => push('/')}>Return home</button>
        </div>
    );
}