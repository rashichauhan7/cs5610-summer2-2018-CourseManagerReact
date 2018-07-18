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

    render()
    {
        return (
            <li className="nav-link"  >
                   <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}
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