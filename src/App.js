import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import {Route, Switch} from 'react-router-dom'
import About from "./components/About/About";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/auth" exact component={Auth}/>
                    <Route path="/quiz-creator" component={QuizCreator}/>
                    <Route path="/quiz/:id" exact component={Quiz}/>
                    <Route path="/" component={QuizList}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
