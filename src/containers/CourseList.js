import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseCard from "../components/CourseCard"
import CourseService from "../services/CourseServices";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.findAllCourses = this.findAllCourses.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.renderCourseRows = this.renderCourseRows.bind(this);
        this.searchCourse = this.searchCourse.bind(this);
        this.gridView = this.gridView.bind(this);
        this.listView = this.listView.bind(this);
        this.state= {
            initialCourses : [],
            courses: [],
            view: "list"
        };
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() => { this.componentDidMount()});
    }

    searchCourse(event)
    {
        var updatedList = this.state.initialCourses;
                updatedList = updatedList.filter(function(item){
                    return item.title.toLowerCase().search(
                        event.target.value.toLowerCase()) !== -1;
                });
                this.setState({courses: updatedList});

    }
    componentDidMount() {
        this.findAllCourses();


    }
    titleChanged(event) {
        var date = new Date();
        this.setState({
            course: { title: event.target.value , modified: date}
        });

    }
    createCourse() {
       this.courseService.createCourse(this.state.course)
           .then(() => {
               this.refs.newCourse.value = '';
               this.findAllCourses(); });
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({initialCourses: courses});
                this.setState({courses: courses});
                console.log(courses);
            });
    }

    renderCourseRows() {

        var rows = this.state.courses.map((course) => {
            if(this.state.view == "grid")
                return <CourseCard key = {course.id} course={course} delete={this.deleteCourse}/>

            else
                return <CourseRow key = {course.id} course={course} delete={this.deleteCourse}/>
        });
        if(this.state.view == "grid")
            rows = <div align="center" className="row">{rows}</div>
        return (
            rows
        );
    }

    gridView()
    {
        this.refs.list.style.display ='block';
        this.refs.grid.style.display = 'none';
        this.setState({view: "grid"});
    }
    listView()
    {
        this.refs.list.style.display =  'none';
        this.refs.grid.style.display ='block';
        this.setState({view: "list"});
    }

        render() {
        return (

            <div>

                <input onChange={this.searchCourse} className="form-control"
                                        placeholder="Search" style={{marginBottom : 5}} />
            <table className="table">
                <thead>
                 <tr>
                    <th><input onChange={this.titleChanged} className="form-control" id="titleFld"
                           placeholder="cs101" ref="newCourse"/></th>
                <th><button onClick={this.createCourse} className="btn btn-primary">Add</button></th>
            </tr>
                 <tr>
                     <th>Title</th>
                     <th>Owned by</th>
                     <th>Last modified by me</th>
                     <th ref = "grid"><i  className="fa fa-th-large fa-2x" onClick={this.gridView}></i></th>
                     <th ref = "list" style={{display : 'none'}}><i  className="fa fas fa-list-ul fa-2x" onClick={this.listView}></i></th>
                     <th></th>
                 </tr>
            </thead>
                    {this.renderCourseRows()}
            </table>
        </div>

    )
    }
}
export default CourseList;
