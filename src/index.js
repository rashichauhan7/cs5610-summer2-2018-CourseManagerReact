import React from 'react'
import ReactDOM from 'react-dom'

//import bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import font-awesome
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from "./containers/CourseManager";



ReactDOM.render(
    <CourseManager/>,
    document.getElementById('root')
);