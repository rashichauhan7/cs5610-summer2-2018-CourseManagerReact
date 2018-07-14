import React from 'react'
import TopicPills from "./TopicPills";

export default class LessonTabs extends React.Component
{
    render () {
        return (
            <div>
                <h3>Lesson Tabs</h3>
                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="nav-link active"
                                                href="#"><TopicPills/></a></li>
                    <li className="nav-item"><a className="nav-link"
                                                href="#"><TopicPills/></a></li>
                </ul>
            </div>
        )
    }
}

