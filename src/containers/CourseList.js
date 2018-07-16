import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseServices";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.findAllCourses = this.findAllCourses.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.renderCourseRows = this.renderCourseRows.bind(this);
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() => { this.componentDidMount()});
    }


    componentDidMount() {
        this.findAllCourses();

    }
    titleChanged(event) {
        this.setState({
            course: { title: event.target.value }
        });

    }
    createCourse() {
       this.courseService.createCourse(this.state.course)
           .then(() => { this.findAllCourses(); });
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
                console.log(courses);
            });
    }

    renderCourseRows() {
        var rows = this.state.courses.map((course) => {
            return <CourseRow key = {course.id} course={course} delete={this.deleteCourse}/>
        });
        return (
            rows
        );
    }

        render() {
        return (

            <div className="container-fluid">
            <h2>Course List</h2>
        <table className="table">
            <thead><tr><th>Courses</th></tr>

            <tr>
                <th><input onChange={this.titleChanged} className="form-control" id="titleFld"
                           placeholder="cs101"/></th>
                <th><button onClick={this.createCourse} className="btn btn-primary">Add</button></th>
            </tr>
            </thead>
            <tbody>{this.renderCourseRows()}</tbody>
        </table>
        </div>

    )
    }
}
export default CourseList;
