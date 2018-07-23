import React from "react";
import {Link} from "react-router-dom"
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
export default class LessonItem extends React.Component
{


    constructor(props) {
        super(props);
        this.state = {
            moduleId : '',
            courseId : '',
            lessonId: ''
        };
        this.highlight = this.highlight.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
    }

    setModuleId(moduleId)
    {
        this.setState({moduleId: moduleId});
        console.log(moduleId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }
    highlight(event)
    {
        var parent = event.target.parentNode;
        console.log(parent);
        var elements = document.getElementsByClassName('lessons');
        for(var i = 0; i < elements.length; i++)
            elements[i].style.backgroundColor = "white";
        parent.style.backgroundColor = "grey";

    }
    render()
    {
        return (
            <li className="nav-link lessons"  >
                   <Link onClick = {this.highlight}  to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}
                                        href="#" style ={{marginRight: 5,color : 'black'}}>  {this.props.title}
                </Link>
                <span  className="float-right">
                <button className="btn" type="button" id="remove" onClick={() => {this.props.deleteLesson(this.props.lessonId)}}>
                    <i className="fa-1x fa fa-times"></i>
                </button>
                    <button className="btn" type="button" onClick={() => {this.props.editLesson(this.props.lessonId)}} id="edit">
                        <i className="fa fa-pencil"></i>
                    </button>
                </span>
            </li>
                );
    }
}