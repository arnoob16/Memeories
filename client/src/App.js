import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Navbar from './Navbar';
import Form from './Form';
import Memes from './Memes';
import {getMemes} from './actions/meme';

const App = () => {
    const [currentMemeId, setCurrentMemeId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMemes());
        console.log("App Component Reloaded");
    }, [currentMemeId, dispatch]);

    return (
        <div className="App">
            <Navbar/>
            <div className="container">
                <Memes setCurrentMemeId = {setCurrentMemeId}/>
                <Form currentMemeId= {currentMemeId} setCurrentMemeId = {setCurrentMemeId}/>
            </div>
        </div>
    )
} 

export default App;