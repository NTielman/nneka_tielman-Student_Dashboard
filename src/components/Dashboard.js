import React from 'react';
import HomePage from "./HomePage";
import Nav from "./Nav";
import StudentPage from "./StudentPage";
import OpdrachtPage from './OpdrachtPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Dashboard = () => {

    return (
        <Router>
            <div className='dashboard-container'>
                <Nav />
                <div className='main-content'>
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path="/StudentPage/:name" component={StudentPage} />
                        <Route path="/OpdrachtPage/:title" component={OpdrachtPage} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
};

export default Dashboard;