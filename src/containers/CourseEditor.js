import React from 'react'
import ModuleList from './ModuleList'


export default class CourseEditor
    extends React.Component {
    constructor(props)
    {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.state = {courseId: '', moduleId: ''};

    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }
    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }
    componentWillReceiveProps(newProps){
        this.selectCourse
        (newProps.match.params.courseId);
    }


    render() {
        return (
            <div className="col-4">
            <div className="container-fluid">
                <h3>Course {this.state.courseId}</h3>
                <ModuleList courseId={this.state.courseId}/>
                </div>
            </div>
        );
    }
}

