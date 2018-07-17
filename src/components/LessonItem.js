import React from "react";
import {Link} from "react-router-dom"
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
            <li className="nav-link active" >
                   <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}
                                        href="#" style ={{marginRight: 5}}>  {this.props.title}
                </Link>
                <span  className="float-right">
                <button className="btn" type="button" id="remove" onClick={() => {this.props.deleteLesson(this.props.lessonId)}}>
                    <i className="fa-1x fa fa-times"></i>
                </button>
                </span>
            </li>
                );
    }
}