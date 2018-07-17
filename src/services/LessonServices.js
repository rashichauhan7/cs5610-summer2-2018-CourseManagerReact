
const LESSON_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson';
const LESSON_API_URL_Actions = 'http://localhost:8080/api/lesson/LID';
let _singleton = Symbol();
export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }


    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID',moduleId),
            {
                body: JSON.stringify(lesson),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    findAllLessonsForModule (courseId, moduleId) {
        return fetch(
            LESSON_API_URL
                .replace('CID', courseId).replace('MID',moduleId))
            .then(function (response) {
                if(response != null)
                return response.json();
                else
                    return null;
            })
    }

    deleteLesson(lessonId)
    {
        return fetch(LESSON_API_URL_Actions.replace('LID', lessonId),
            {
                method: 'delete'
            })
            .then(function (response){
                return response;
            });

    }


}