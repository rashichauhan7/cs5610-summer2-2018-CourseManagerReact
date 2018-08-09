import React from "react";
import { Link } from 'react-router-dom'
import CourseService from "../services/CourseServiceClient";
import '../css/Courses.css'

export default class CourseCard extends React.Component
{
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.edit = this.edit.bind(this);
        this.getDate = this.getDate.bind(this);
    }


    getDate()
    {
        const d = new Date(this.props.course.modified+"");
        var formatter = new Intl.DateTimeFormat("eng", { month: "long" });
        const month = formatter.format(d);
        const t  = month + " " + d.getDate() + ","+ d.getFullYear();
        console.log(t);

        return <span>{t}</span>;
    }


    edit(courseId)
    {
        this.refs.edi.style.display = 'none';
        this.refs.upd.style.display = 'inline-block';
        this.courseService.findCourseById(courseId)
            .then((course) =>
            {
                this.refs.newCourse.style.display = 'inline-block';
                this.refs.newCourse.value = course.title;
            })
    }

    update()
    {
        this.refs.upd.style.display = 'none';
        this.refs.edi.style.display = 'inline-block';
        this.courseService.updateCourse(this.props.course.id, this.refs.newCourse.value)
            .then(() => {
                this.refs.newCourse.style.display = 'none';
                this.props.findAllCourses(this.props.course.id);
            })

    }

    render() {
        return (
            <div className="card col-sm-2" >
                <div className="card-body ">

                <h5 className="card-header">
                    <Link to= {`/course/${this.props.course.id}`} className ="courseLink" >
                    {this.props.course.title}
                 </Link>
                    <input type="text" ref = "newCourse" className="newcourse" style={{display: 'none'}}></input></h5>
                    <p className="card-text">{this.getDate()}</p>
                    <a href="#"><button className="btn btn-danger"
                                                            onClick={() => {this.props.delete(this.props.course.id)}}>
                        <i className="fa fa-trash"></i>
                    </button>
                        <button className="btn btn-primary" ref = "edi"
                                onClick={() => {this.edit(this.props.course.id)}} >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button style={{display: 'none'}}  className="btn btn-light" ref = "upd"
                                onClick={() => {this.update()}} >
                            <i className="fa fa-check"></i>
                        </button>
                       </a>
                </div>
            </div>);
}}
