import React from 'react'

const WidgetType3 = ({widget, updateWidget}) => {
    let widgetType;
    return (
    <div>
        <h3>Widget Type 3 - {widget.title}</h3>
        <select onChange={() => {
            let w = {
                id: widget.id,
                type:  widgetType.value
            };
           updateWidget(w);
            alert(widgetType.value);
        }}
                ref={node => widgetType = node}
                className='form-control'>
            <option value="Type 1">Widget Type 1</option>
            <option value="Type 2">Widget Type 2</option>
            <option value="Type 3">Widget Type 3</option>
        </select>
    </div>
    )
}
export default WidgetType3;