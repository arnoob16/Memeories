import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Navbar from './Navbar';
import Form from './Form';
import Memes from './Memes';
import {getMemes} from './actions/meme';

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( getMemes());
    }, [dispatch]);

    // const memes = useSelector((state) => state.memes);

    return (
        <div className="App">
            <Navbar/>
            <div className="container">
                <Memes/>
                <Form/>
            </div>
        </div>
    )
} 

export default App;