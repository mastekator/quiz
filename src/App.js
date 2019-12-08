import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import {Route} from 'react-router-dom'
import About from "./components/About/About";

function App() {
    return (
        <div className="App">
            <Route path="/about" exact component={About}/>
            <Layout>
                <Route path="/" exact component={Quiz}/>
            </Layout>
        </div>
    );
}

export default App;
