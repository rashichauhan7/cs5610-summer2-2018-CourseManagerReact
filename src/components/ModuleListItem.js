import React from "react";
import {Link} from 'react-router-dom'

export default class ModuleListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            moduleId : '',
            courseId : ''

        };
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    setModuleId(moduleId)
    {
        this.setState({moduleId: moduleId});
        console.log(moduleId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        return (
            <li className="list-group-item" style ={{width : 423}}>


                <Link  to= {`/course/${this.props.courseId}/module/${this.props.moduleId}`}  style ={{marginRight: 5,color : 'black'}}>
                {this.props.title}
                </Link>

                <span  className="float-right">
                    <button className="btn" style={{marginRight: 5}} type="button" onClick={() => {this.props.deleteMod(this.props.moduleId)}} id="remove">
                        <i className="fa fa-trash"></i>
                    </button>
                    <button className="btn" type="button" onClick={() => {this.props.updateMod(this.props.moduleId)}} id="edit">
                        <i className="fa fa-pencil"></i>
                    </button>
                </span>
               </li>

        );
    }
}



