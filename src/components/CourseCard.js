import React from "react";
import { Link } from 'react-router-dom'
export default class CourseCard extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card col-sm-2" style={{margin : 4}}>
                <div className="card-body ">

                <h5 className="card-header">
                    <Link to= {`/course/${this.props.course.id}`} style ={{marginRight: 5,color : 'black'}} >
                    {this.props.course.title}
                 </Link></h5>
                    <p className="card-text">{this.props.course.modified}</p>
                    <a href="#"><button className="btn btn-danger"
                                                            onClick={() => {this.props.delete(this.props.course.id)}}>
                Delete
                    </button>
                       </a>
                </div>
            </div>);
}}
