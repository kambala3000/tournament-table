import React, { Component } from 'react';

import '../../css/App.css';
import StartForm from './StartForm';

class App extends Component {
    render() {
        return (
            <div className="main-app">
                <StartForm />
            </div>
        );
    }
}

export default App;
