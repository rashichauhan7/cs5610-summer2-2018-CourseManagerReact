import React from 'react';
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <tbody>
            <tr>
                <td>
                    <Link to= {`/course/${this.props.course.id}`} style ={{marginRight: 5,color : 'black'}} >
                        {this.props.course.title}
                    </Link>
                </td>
                <td>
                    me
                </td>
                <td> {this.props.course.modified} </td>
                <td><button className="btn btn-danger"
                    onClick={() => {this.props.delete(this.props.course.id)}}>
                    Delete
                </button>

                </td>
            </tr>
                </tbody>

        )
    }
}
export default CourseRow;
