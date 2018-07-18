
const TOPIC_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';
const TOPIC_API_URL_Actions = 'http://localhost:8080/api/topic/TID';
let _singleton = Symbol();
export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }


    createTopic(courseId, moduleId, lessonId, topic) {
        return fetch(TOPIC_API_URL.replace('CID', courseId).replace('MID',moduleId).replace('LID',lessonId),
            {
                body: JSON.stringify(topic),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    findAllTopicsForLesson (courseId, moduleId, lessonId) {
        return fetch(
            TOPIC_API_URL
                .replace('CID', courseId).replace('MID',moduleId).replace('LID',lessonId))
            .then(function (response) {
                if(response != null)
                    return response.json();
                else
                    return null;
            })
    }

    deleteTopic(topicId)
    {
        return fetch(TOPIC_API_URL_Actions.replace('TID', topicId),
            {
                method: 'delete'
            })
            .then(function (response){
                return response;
            });

    }


}