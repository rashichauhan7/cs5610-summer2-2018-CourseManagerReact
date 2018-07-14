import React from 'react'

export default class CourseEditor
    extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-4">
                    <h2>Left 1/3</h2>
                </div>
                <div className="col-8">
                    <h2>Right 2/3</h2>
                </div>
            </div>
        );
    }
}

