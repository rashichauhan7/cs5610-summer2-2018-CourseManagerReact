import React from 'react'
import WidgetType1 from '../widgets/WidgetType1'
import WidgetType2 from '../widgets/WidgetType2'
import WidgetType3 from '../widgets/WidgetType3'
const WidgetListComponent = ({widgets, deleteWidget, createWidget, updateWidget}) => {
    let widgetTitle;
    let widgetType;
    return (

        <div>
            <h1>Widget List ({widgets.length})</h1>
            <ul className="list-group">

                <li className="list-group-item">
                    <input ref={(node) =>{widgetTitle = node}} className="form-control"/>
                    <button className="btn btn-success" onClick={() => {
                        let widget = {title: widgetTitle.value, id: (new Date().getTime()), type: widgetType.value};
                        createWidget(widget);
                        widgetTitle.value = '';
                    }}> Add Widget</button>
                    <select ref={node => widgetType = node} className='form-control'>
                        <option value="Type 1">Widget Type 1</option>
                        <option value="Type 2">Widget Type 2</option>
                        <option value="Type 3">Widget Type 3</option>
                    </select>
                </li>
                {
                    widgets.map((widget, index) =>
                        <li className="list-group-item" key={index}>
                            {widget.title} ({widget.id}) - {widget.type}
                            <button className="float-right btn btn-danger"
                                    onClick={() => deleteWidget(widget.id)}> Delete </button>
                            <div>
                                {widget.type === 'Type 1' && <WidgetType1 updateWidget = {updateWidget} widget={widget}/>}
                                {widget.type === 'Type 3' && <WidgetType3 updateWidget = {updateWidget} widget={widget}/>}
                                {widget.type === 'Type 2' && <WidgetType2 updateWidget = {updateWidget} widget={widget}/>}

                            </div>
                        </li>)
                }
            </ul>
        </div>
    )
}
export default WidgetListComponent;