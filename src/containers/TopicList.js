import React from 'react'
import TopicPills from "../components/TopicPills";
import TopicService from "../services/TopicServices";

export default class TopicList extends React.Component
{

    constructor(props){
        super(props);
        this.state = {
            moduleId:'',
            courseId:'',
            lessonId:'',
            topics: [],
            topic: {title: '', id: ''},
        }
        this.renderTopics = this.renderTopics.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.topicService = TopicService.instance;
        this.findAllTopics = this.findAllTopics.bind(this);
        this.setTopics = this.setTopics.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
    };


    createTopic() {
        this.topicService.createTopic(this.state.courseId, this.state.moduleId, this.state.lessonId, this.state.topic)
            .then(() => {
                this.refs.newTopic.value = '';
                this.findAllTopics(this.state.courseId, this.state.moduleId, this.state.lessonId);

            })

    }
    titleChanged(event) {
        console.log(event.target.value);
        this.setState({topic:{title: event.target.value}});
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);

    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);

        this.findAllTopics(newProps.courseId, newProps.moduleId, newProps.lessonId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId)
    {
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId)
    {
        this.setState({lessonId: lessonId});
    }
    findAllTopics(courseId, moduleId, lessonId)
    {
        this.topicService
            .findAllTopicsForLesson(courseId , moduleId, lessonId)
            .then((topics) => {this.setTopics(topics)});
    }

    setTopics(topics) {
        this.setState({topics: topics});
    }

    deleteTopic(topicId)
    {
        this.topicService.deleteTopic(topicId)
            .then(this.findAllTopics(this.state.courseId, this.state.moduleId, this.state.lessonId));
    }
    renderTopics()
    {
        let topics = this.state.topics.map((topic) =>  {
                return <TopicPills  key = {topic.id} title = {topic.title} courseId = { this.state.courseId} moduleId = {this.state.moduleId} lessonId = {this.state.lessonId} topicId = {topic.id}
                                    deleteTopic = {this.deleteTopic}/>
            }
        );
        return topics;
    }

    render () {
        return (
            <div>
                <ul className="nav container-fluid">
                    {this.renderTopics()}
                    <li className="nav-link ">

                        <input className="col-xs-2" style={{borderRadius : 5, borderColor : 'white'}}
                               placeholder="Topic" onChange={this.titleChanged} ref = "newTopic">
                        </input>
                    </li>
                    <li  style={{marginTop: 6}}>
                        <span  className="float-right">
                            <button className="btn" type="button" id="create" onClick={this.createTopic}>
                                <i className="fa-1x fa fa-plus"></i>
                            </button>
                        </span>

                    </li>
                </ul>


            </div>
        )
    }
}
