import React from 'react'
import ImageWidget from '../widgets/ImageWidget'
import HeadingWidget from '../widgets/HeadingWidget'
import ListWidget from '../widgets/ListWidget'
import LinkWidget from '../widgets/LinkWidget'
import ParagraphWidget from '../widgets/ParagraphWidget'
import ToggleButton from 'react-toggle-button'

class WidgetListComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        let widgetTitle;
       // let widgetType;
        let newType;
        this.state = { toggleActive: false, topicId: ''};
        this.changeNode = this.changeNode.bind(this);
    }

    changeNode(event, widget)
    {
        widget.type = event.target.value;
        console.log(event.target.value);
        this.props.updateWidget(widget);
    }

    componentWillReceiveProps(newprops)
    {
        if(newprops.topicId !== '' && newprops.topicId !== this.state.topicId)
        {
            this.setState({topicId:newprops.topicId});
            this.props.loadAllWidgets(newprops.topicId);
        }
    }

    render () {
        return (

            <div className="container-fluid">
                <ul className="list-group">

                    <li className="list-group-item">

                        <button className="btn btn-success form-control" onClick={() => {


                            let widget = {id: new Date().getTime() % 100000000 , type: "HEADING"};
                            this.props.createWidget(widget);

                        }}> Add Widget</button>
                        <button onClick={() => {
                            this.props.saveWidget(this.state.topicId);
                            window.location.reload(true);
                        }}
                                className="btn btn-primary form-control" style={{marginRight: 10}}>Save</button>
                        <label className="float-right" >
                            <span>Preview</span>
                            <ToggleButton
                                value={ this.state.toggleActive || false }
                                onToggle={(value) => {
                                    this.setState({
                                        toggleActive: !value,
                                    })
                                }}/>
                        </label>
                    </li>
                    {

                        this.props.widgets.map((widget, index) =>

                            <li className="list-group-item" key={index}>

                                <button className="float-right btn btn-danger"
                                        onClick={() => this.props.deleteWidget(widget.id)}> Delete </button>
                                {index !== 0 &&
                                <button className="float-right btn btn-warning"
                                 onClick={() => this.props.up(widget)}
                                > <i className="fa fa-arrow-up" aria-hidden="true"></i></button>}
                                {index !== this.props.widgets.length -1 &&
                                <button className="float-right btn btn-warning"
                                onClick={() => this.props.down(widget)}
                                ><i className="fa fa-arrow-down" aria-hidden="true"></i></button>}

                                {widget.edit &&
                                <select className="float-right btn"
                                                        ref="node" value = {widget.type}
                                onChange={(event) => this.changeNode(event,widget)}>
                                    <option value="HEADING">HEADING</option>
                                    <option value="IMAGE">IMAGE</option>
                                    <option value="LIST">LIST</option>
                                    <option value="LINK">LINK</option>
                                    <option value="PARAGRAPH">PARAGRAPH</option>

                                </select>}
                                <div>
                                    {widget.type === 'PARAGRAPH' && <ParagraphWidget toggleActive = {this.state.toggleActive}  updateWidget = {this.props.updateWidget} widget={widget}/>}
                                    {widget.type === 'IMAGE' && <ImageWidget toggleActive = {this.state.toggleActive}  updateWidget = {this.props.updateWidget} widget={widget}/>}
                                    {widget.type === 'LINK' && <LinkWidget toggleActive = {this.state.toggleActive}  updateWidget = {this.props.updateWidget} widget={widget}/>}
                                    {widget.type === 'HEADING' && <HeadingWidget toggleActive = {this.state.toggleActive} updateWidget = {this.props.updateWidget} widget={widget}/>}
                                    {widget.type === 'LIST' && <ListWidget toggleActive = {this.state.toggleActive} updateWidget = {this.props.updateWidget} widget={widget}/>}
                                </div>
                            </li>)
                    }
                </ul>
            </div>
        )}

}


export default WidgetListComponent;