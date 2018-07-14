import React from "react";
import ModuleListItem from '../components/ModuleListItem'
export default class ModuleList extends React.Component {

        constructor(){
            super();
            this.state = {
                modules: [
                    {title: 'Module 1 - jQuery', id: 123},
                    {title: 'Module 2 - React', id: 234},
                    {title: 'Module 3 - Redux', id: 345},
                    {title: 'Module 4 - Angular', id: 456},
                    {title: 'Module 5 - Node.js', id: 567},
                    {title: 'Module 6 - MongoDB', id: 678}
                ]
            };
        }
        renderListOfModules()
        {
            let modules = this.state.modules.map(function(module)
            {
                return <ModuleListItem title = {module.title}/>
            });
            return modules;
        }
        render() {
            return (
                <div>
                    {this.renderListOfModules()}
                </div>
            );}}