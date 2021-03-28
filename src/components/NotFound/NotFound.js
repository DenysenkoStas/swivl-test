import {useHistory} from 'react-router-dom';

export default function NotFound() {
    const {push} = useHistory();
    return (
        <div className='not-found rounded'>
            <h1>404</h1>
            <p>Sorry, page not found</p>
            <button className='btn btn-primary' onClick={() => push('/')}>Home</button>
        </div>
    );
}