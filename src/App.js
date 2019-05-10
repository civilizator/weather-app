import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";

class App extends React.Component {
    render() {
        return (
            <>
                <Titles/>
                <Form/>
            </>
        );
    }
}

export default App;
