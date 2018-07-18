import React from 'react';
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseService from "../services/CourseServiceClient";
class CourseRow extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.edit = this.edit.bind(this);
        this.getDate = this.getDate.bind(this);
    };


    getDate()
    {
        const d = new Date(this.props.course.modified+"");
        var formatter = new Intl.DateTimeFormat("eng", { month: "long" });
        const month = formatter.format(d);
        const t  = month + " " + d.getDate() + ","+ d.getFullYear();
        console.log(t);

        return <td>{t}</td>;
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
                <tbody>
            <tr>
                <td>
                    <Link to= {`/course/${this.props.course.id}`} style ={{marginRight: 5,color : 'black'}} ref= "course" >
                        {this.props.course.title}
                    </Link>
                <input type="text" ref = "newCourse" style={{display: 'none'}}></input></td>
                <td>
                    me
                </td>
                 {this.getDate()}
                <td><button className="btn btn-danger"
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
                </td>
            </tr>
                </tbody>

        )
    }
}
export default CourseRow;
