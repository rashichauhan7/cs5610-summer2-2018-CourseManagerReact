import React from "react";
import CourseEditor from './CourseEditor'
import CourseList from './CourseList';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleEditor from "./ModuleEditor";
export default class CourseManager extends React.Component {
    render()
    {
        return(
            //alias className
            <Router>
            <div className="container-fluid">
                <h1>Course Manager</h1>
                <Route path="/courses" component={CourseList}>
                </Route>
                <div className="row">
                <Route path="/course/:courseId"
                       component={CourseEditor}>
                </Route>
                <Route path="/course/:courseId/module/:moduleId"
                       component={ModuleEditor}>
                </Route>
                </div>
            </div>
            </Router>
        )
    }
}