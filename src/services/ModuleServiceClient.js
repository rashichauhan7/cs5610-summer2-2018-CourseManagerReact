const MODULE_URL = 'https://webdev-summer2-2018-1.herokuapp.com/api/module';
const MODULE_API_URL =
    'https://webdev-summer2-2018-1.herokuapp.com/api/course/CID/module';
const MODULE_API_URL_ACTIONS = "https://webdev-summer2-2018-1.herokuapp.com/api/module/MID" ;
let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }
    findAllModules() {
        return fetch(MODULE_URL)
            .then(function(response){
                return response.json();
            });
    }

    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteModule(moduleId)
    {
        return fetch(MODULE_API_URL_ACTIONS.replace('MID', moduleId),
            {
                    method: 'delete'
                })
                    .then(function (response){
                        return response;
                    });

    }

    findModuleById(moduleId)
    {
        return fetch(MODULE_API_URL_ACTIONS.replace('MID', moduleId))
            .then(function (response){
                return response.json();
            });

    }

    updateModule(moduleId, title)
    {
        const module = { "id": moduleId, "title" : title}
        return fetch(MODULE_API_URL_ACTIONS.replace('MID', moduleId),
            {
                method: 'put',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(module)
            })
            .then(function (response){
                return response;
            });
    }

}