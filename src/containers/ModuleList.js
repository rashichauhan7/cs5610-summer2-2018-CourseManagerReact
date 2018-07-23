import React from "react";
import ModuleListItem from '../components/ModuleListItem'
import ModuleService from '../services/ModuleServiceClient';
import "../css/Module.css"
export default class ModuleList extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                courseId: '',
                module: { title: '', id:''},
                modules: [],
                moduleId: ''
            };
            this.setCourseId = this.setCourseId.bind(this);
            this.titleChanged = this.titleChanged.bind(this);
            this.createModule = this.createModule.bind(this);
            this.moduleService = ModuleService.instance;
            this.deleteModule = this.deleteModule.bind(this);
            this.updateModule = this.updateModule.bind(this);
            this.editModule = this.editModule.bind(this);
            //this.findModuleById = this.findModuleById.bind(this);
        }

    deleteModule(moduleId)
    {
        if(window.confirm("Are you sure you want to delete"))
        {
            this.moduleService.deleteModule(moduleId)
                .then(this.findAllModulesForCourse(this.state.courseId));
        }

    }

    updateModule()
    {
        this.refs.update.style.display = 'none';
        this.refs.create.style.display = 'inline-block';
        this.moduleService.updateModule(this.state.moduleId, this.refs.newModule.value)
            .then(() => {
                this.refs.newModule.value = '';
                this.findAllModulesForCourse(this.state.courseId);
            })

    }

    editModule(moduleId)
    {
        this.setState({moduleId,moduleId});
        this.refs.create.style.display = 'none';
        this.refs.update.style.display = 'inline-block';
        this.moduleService.findModuleById(moduleId)
            .then((module) => {
                this.refs.newModule.value = module.title;
            })
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
                return <ModuleListItem courseId = {this.state.courseId} moduleId={module.id} key = {module.id}
                                       title = {module.title} deleteMod={this.deleteModule} editMod={this.editModule}/>
            });
            return modules;
        }

    titleChanged(event) {
        console.log(event.target.value);

        this.setState({module:{title: event.target.value}});
    }

    createModule() {

        if(this.state.module.title === "")
            this.state.module.title = "New Module";
        this.moduleService.createModule(this.state.courseId, this.state.module)
            .then(() => {
                this.refs.newModule.value = '';
                this.findAllModulesForCourse
                (this.state.courseId);
            })

    }



    render() {
            return (
                <div className="container-fluid">

                    <input className="form-control newmodule"
                    onChange={this.titleChanged}
                            placeholder="title" ref="newModule"></input>

                    <button  onClick={this.createModule} className="btn btn-block plus"  ref = 'create'>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button   onClick={this.updateModule} className="btn btn-block update"  ref = 'update'>
                        <i  className="fa fa fa-check check"></i>
                    </button>
                    <ul className="list-group">
                    {this.renderListOfModules()}
                    </ul>
                </div>
            );}}