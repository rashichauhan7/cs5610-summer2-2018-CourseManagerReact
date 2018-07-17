import React from 'react'

import LessonTabs from './LessonTabs'

export default class ModuleEditor extends React.Component {
    constructor(props)
    {
        super(props);
        this.selectModule = this.selectModule.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.state = {moduleId: '', courseId: ''};

    }

    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }
    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
        this.selectModule
        (this.props.match.params.moduleId);
    }
    componentWillReceiveProps(newProps){
        this.selectCourse
        (newProps.match.params.courseId);
        this.selectModule
        (newProps.match.params.moduleId);
    }
    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }



    render() {
        return (

                <div className="col-8">
                    <h3>Module:{this.state.moduleId}</h3>
                    <LessonTabs courseId={this.state.courseId} moduleId={this.state.moduleId}/>
                </div>
        );
    }
}

