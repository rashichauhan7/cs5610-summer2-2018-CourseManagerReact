import React from 'react'
import {Link} from 'react-router-dom'
export default class TopicPills
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moduleId : '',
            courseId : '',
            lessonId: '',
            topicId: ''
        };
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
        this.setTopicId(this.props.topicId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
        this.setTopicId(newProps.topicId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId)
    {
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId)
    {
        this.setState({lessonId: lessonId});
    }

    setTopicId(topicId)
    {
        this.setState({topicId: topicId});
    }

    render() { return(
        <ul className="nav">
            <li className="nav-item" >
                <Link className="nav-link active" style={{color: 'black'}}
                   to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topicId}/widgets`}>{this.props.title}</Link>
            </li>
            <li>
            <span  className="float-right">
                <button className="btn" type="button" id="remove" onClick={() => {this.props.deleteTopic(this.props.topicId)}}>
                    <i className="fa-1x fa fa-times"></i>
                </button>
                <button className="btn" type="button" onClick={() => {this.props.editTopic(this.props.topicId)}} id="edit">
                        <i className="fa fa-pencil"></i>
                    </button>
                </span>
            </li>
        </ul>
    );
    }
}
