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
        this.createLesson = this.createLesson.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.lessonService = LessonService.instance;
        this.findAllLessons = this.findAllLessons.bind(this);
        this.setLessons = this.setLessons.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        };


    createLesson() {
        this.lessonService.createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
            .then(() => {
                this.refs.newlesson.value = '';
                this.findAllLessons(this.state.courseId, this.state.moduleId);

            })

    }
    titleChanged(event) {
        console.log(event.target.value);
        this.setState({lesson:{title: event.target.value}});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);

    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
       this.findAllLessons(newProps.courseId, newProps.moduleId);
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

    deleteLesson(lessonId)
    {
        this.lessonService.deleteLesson(lessonId)
            .then(this.findAllLessons(this.state.courseId, this.state.moduleId));
    }
    renderLessons()
    {
        let lessons = this.state.lessons.map((lesson) =>  {
            return <LessonItem  key = {lesson.id} title = {lesson.title} courseId = { this.state.courseId} moduleId = {this.state.moduleId} lessonId = {lesson.id}
                                deleteLesson = {this.deleteLesson}/>
                }
                );
        return lessons;
    }

    render () {
        return (
            <div>
                <ul className="nav nav-tabs container-fluid">
                    {this.renderLessons()}
                    <li className="nav-link active">

                            <input className="col-xs-2" style={{borderRadius : 5, borderColor : 'white'}}
                               placeholder="Lesson" onChange={this.titleChanged} ref = "newlesson">
                            </input>

                        <span  className="float-right">
                            <button className="btn" type="button" id="create" onClick={this.createLesson}>
                                <i className="fa-1x fa fa-plus"></i>
                            </button>
                        </span>
                    </li>

                </ul>


            </div>
        )
    }
}

