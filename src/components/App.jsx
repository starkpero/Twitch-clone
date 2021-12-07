import React from 'react';
import {BrowserRouter, Route,Routes, Link} from 'react-router-dom';  

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';


const App = ()=>{
    return <div>
        <BrowserRouter>
        <div>
            <Routes>
            <Route path="/" exact element={<StreamList/>}/>
            <Route path="/streams/new" exact element={<StreamCreate/>}/>
            <Route path="/streams/edit" exact element={<StreamEdit/>}/>
            <Route path="/streams/delete" exact element={<StreamDelete/>}/>
            <Route path="/streams/show" exact element={<StreamShow/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    </div>
};


export default App;