import React from 'react'
import LessonItem from "../components/LessonItem";
import LessonService from "../services/LessonServiceClient";
import "../css/Lessons.css"
export default class LessonTabs extends React.Component
{

    constructor(props){
        super(props);
        this.state = {
            moduleId:'',
            courseId:'',
            lessonId:'',
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
        this.updateLesson = this.updateLesson.bind(this);
        this.editLesson = this.editLesson.bind(this);
        };


    createLesson() {
        if(this.state.lesson.title.length == 0)
            this.state.lesson.title = "New Lesson";
        this.lessonService.createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
            .then(() => {
                this.refs.newlesson.value = '';
                this.state.lesson = {title: '', id: ''};
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
        if(window.confirm("Are you sure you want to delete"))
        {
            this.lessonService.deleteLesson(lessonId)
                .then(() => {
                    this.findAllLessons(this.state.courseId, this.state.moduleId)
                });
        }
    }

    updateLesson()
    {
        this.refs.update.style.display = 'none';
        this.refs.create.style.display = 'inline-block';
        this.lessonService.updateLesson(this.state.lessonId, this.refs.newlesson.value)
            .then(() => {
                this.refs.newlesson.value = '';
                this.findAllLessons(this.state.courseId, this.state.moduleId);
            })

    }

    editLesson(lessonId)
    {
        this.setState({lessonId:lessonId});
        this.refs.create.style.display = 'none';
        this.refs.update.style.display = 'inline-block';
        this.lessonService.findLessonById(lessonId)
            .then((lesson) => {
                this.refs.newlesson.value = lesson.title;
            })
    }
    renderLessons()
    {
        let lessons = this.state.lessons.map((lesson) =>  {
            return <LessonItem  key = {lesson.id} title = {lesson.title} courseId = { this.state.courseId} moduleId = {this.state.moduleId} lessonId = {lesson.id}
                                deleteLesson = {this.deleteLesson} editLesson = {this.editLesson} />
                }
                );
        return lessons;
    }

    render () {
        return (
            <div className="lesoncontainer">
                <ul  className="nav nav-tabs container-fluid" >
                    {this.renderLessons()}
                    <li className="lessoninput">

                            <input className="col-xs-2 newlesson"
                               placeholder="Lesson" onChange={this.titleChanged} ref = "newlesson">
                            </input>
                    </li>
                    <li  className="btns">
                        <span  className="float-right">
                            <button className="btn " type="button" ref="create" onClick={this.createLesson}>
                                <i className="fa-1x fa fa-plus"></i>
                            </button>
                            <button onClick={this.updateLesson} className="btn btn-block updatebtn"  ref = 'update'>
                        <i className="fa-1x fa fa-check"></i>
                    </button>
                        </span>
                    </li>

                </ul>


            </div>
        )
    }
}

