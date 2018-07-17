import React from 'react'
import LessonItem from "../components/LessonItem";
import LessonService from "../services/LessonServices";

export default class LessonTabs extends React.Component
{

    constructor(props){
        super(props);
        this.state = {
            moduleId:'',
            courseId:'',
            lessons: [],
            lesson: {title: '', id: ''},
        }
        this.renderLessons = this.renderLessons.bind(this);
        this.lessonService = LessonService.instance;
        };


    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);

    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
      //  this.findAllLessons(newProps.courseId, newProps.moduleId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId)
    {
        this.setState({moduleId: moduleId});
    }
    findAllLessons(courseId, moduleId)
    {
        this.lessonService
            .findAllLessonsForModule(courseId , moduleId)
            .then((lessons) => {this.setLessons(lessons)});
    }
    setLessons(lessons) {
        this.setState({lessons: lessons});
    }
    renderLessons()
    {
        let lessons = this.state.lessons.map((lesson) =>  {
            return <LessonItem  key = {lesson.id} title = {lesson.title} />
        });
        return lessons;
    }

    render () {
        return (
            <div>
                <ul className="nav nav-tabs">
                    {this.renderLessons()}
                    <li className="nav-item"><a className="nav-link active"
                                            href="#">Active Tab</a></li>
                    <li className="nav-item"><a className="nav-link"
                                            href="#">Another Tab</a></li>
                </ul>


            </div>
        )
    }
}

