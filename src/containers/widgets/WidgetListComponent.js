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
        let widgetType;
        this.state = { toggleActive: false, topicId: '' };

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
                        <select ref={node => this.widgetType = node} className='form-control'>
                            <option value="HEADING">HEADING</option>
                            <option value="IMAGE">IMAGE</option>
                            <option value="LIST">List Widget</option>
                            <option value="LINK">Link Widget</option>
                            <option value="PARAGRAPH">Paragraph Widget</option>

                        </select>
                        <button className="btn btn-success form-control" onClick={() => {
                            console.log(new Date().getTime());
                            let widget = {id: new Date().getTime() % 100000000 , type: this.widgetType.value};
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
                                <button className="float-right btn btn-warning"
                                 onClick={() => this.props.up(widget)}
                                ><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
                                <button className="float-right btn btn-warning"
                                onClick={() => this.props.down(widget)}
                                ><i className="fa fa-arrow-down" aria-hidden="true"></i></button>
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