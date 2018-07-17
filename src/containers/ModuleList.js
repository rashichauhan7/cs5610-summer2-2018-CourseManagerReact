import React from "react";
import ModuleListItem from '../components/ModuleListItem'
import ModuleService from '../services/ModuleServices';
export default class ModuleList extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                courseId: '',
                module: { title: '', id:''},
                modules: [],

            };
            this.setCourseId = this.setCourseId.bind(this);
            this.titleChanged = this.titleChanged.bind(this);
            this.createModule = this.createModule.bind(this);
            this.moduleService = ModuleService.instance;
            this.deleteModule = this.deleteModule.bind(this);
            this.updateModule = this.updateModule.bind(this);
            //this.findModuleById = this.findModuleById.bind(this);
        }

    deleteModule(moduleId)
    {
        this.moduleService.deleteModule(moduleId)
            .then(this.findAllModulesForCourse(this.state.courseId));
    }

    updateModule(moduleId)
    {

    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId);
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    setModules(modules) {
        this.setState({modules: modules})
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    renderListOfModules()
        {
            let modules = this.state.modules.map((module) =>  {
                return <ModuleListItem courseId = {this.state.courseId} moduleId={module.id} key = {module.id} title = {module.title} deleteMod={this.deleteModule} updateMod={this.updateModule}/>
            });
            return modules;
        }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module:{title: event.target.value}});
    }

    createModule() {
        this.moduleService.createModule(this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId);
            })

    }



    render() {
            return (
                <div className="container-fluid">

                    <input  className="form-control"
                    onChange={this.titleChanged}
                            placeholder="title"></input>

                    <button onClick={this.createModule} className="btn btn-primary btn-block">
                        <i className="fa fa-plus"></i>
                    </button>

                    <ul className="list-group">
                    {this.renderListOfModules()}
                    </ul>
                </div>
            );}}