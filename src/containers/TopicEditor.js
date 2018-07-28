
import React from 'react'

import WidgetListContainer from "./widgets/WidgetListContainer";

export default class TopicEditor extends React.Component {
    constructor(props)
    {
        super(props);
        this.selectTopic = this.selectTopic.bind(this);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);

        this.state = { topicId: ''};

    }

    selectTopic(topicId) {
        this.setState({topicId: topicId});
    }


    componentDidMount() {
        this.selectTopic
        (this.props.match.params.topicId);

    }
    componentWillReceiveProps(newProps){
        this.selectTopic
        (newProps.match.params.topicId);


    }

    render() {
    return (
        <div className="editor">

            <WidgetListContainer topicId={this.state.topicId}/>
        </div>
    );
}
}