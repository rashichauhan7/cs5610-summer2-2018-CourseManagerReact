import React from "react";
import { Link } from 'react-router-dom'
export default class CourseCard extends React.Component
{
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div className="card col-sm-2" style={{margin : 4}}>
                <div className="card-body ">

                <h5 className="card-header">
                    <Link to= {`/course/${this.props.course.id}`} style ={{marginRight: 5,color : 'black'}} >
                    {this.props.course.title}
                 </Link></h5>
                    <p className="card-text">{this.getDate()}</p>
                    <a href="#"><button className="btn btn-danger"
                                                            onClick={() => {this.props.delete(this.props.course.id)}}>
                        <i className="fa fa-trash"></i>
                    </button>
                       </a>
                </div>
            </div>);
}}
