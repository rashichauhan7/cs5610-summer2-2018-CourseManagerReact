import React from 'react'

import LessonTabs from './LessonTabs'
import TopicPills from "../components/TopicPills";

export default class LessonEditor extends React.Component {
    constructor(props)
    {
        super(props);
        this.selectModule = this.selectModule.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);

        this.state = {moduleId: '', courseId: '', lessonId:''};

    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }

    selectLesson(lessonId) {
        this.setState({lessonId: lessonId});
    }
    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
        this.selectModule
        (this.props.match.params.moduleId);
        this.selectLesson
        (this.props.match.params.lessonId);

    }
    componentWillReceiveProps(newProps){
        this.selectCourse
        (newProps.match.params.courseId);
        this.selectModule
        (newProps.match.params.moduleId);
        this.selectLesson
        (newProps.match.params.lessonId);

    }
    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }



    render() {
        return (
            <div className="col-4">
                <h3>Lesson {this.state.lessonId}</h3>
                <TopicPills courseId={this.state.courseId} moduleId={this.state.moduleId} lessonId={this.state.lessonId}/>
            </div>
        );
    }
}

