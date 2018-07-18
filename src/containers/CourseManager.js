import React from "react";
import CourseEditor from './CourseEditor'
import CourseList from './CourseList';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleEditor from "./ModuleEditor";
import LessonEditor from "./LessonEditor"
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
export default class CourseManager extends React.Component {


    render()
    {
        return(
            //alias className
            <Router>
            <div className="container-fluid">
                <h1 style={{textAlign: 'center' , marginBottom: 20}}>Course Manager</h1>
                <Route path="/courses" component={CourseList}>
                </Route>
                <div className="row">

                        <Route path="/course/:courseId"
                        component={CourseEditor}>
                        </Route>

                    <div className="col-8">
                        <Route path="/course/:courseId/module/:moduleId"
                        component={ModuleEditor}>
                        </Route>
                        <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                        component={LessonEditor}>
                        </Route>

                    </div>
                </div>
                </div>
            </Router>
        )
    }
}