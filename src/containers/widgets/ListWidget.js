import React from 'react'

const ListWidget = ({toggleActive, widget, updateWidget}) =>
{
    let text;
    let ordered;
    let title;
    return (
        <div>
            {widget.edit && !toggleActive &&
            <div>
            <h3>List Widget</h3>
            <textarea placeholder="Enter one list item per line." ref={node => text = node} value = {widget.listItems} className="form-control" onChange={() => {
                widget.listItems = text.value;
                updateWidget(widget);
            }}></textarea>
            <label><input type="checkbox" checked={widget.ordered}
                          ref = {node => ordered = node}
                          onClick={() => {
                            widget.ordered = ordered.checked;
                            updateWidget(widget);
                        }}
            />Ordered</label>
                <label></label>
                <input onChange={() => {
                    widget.title = title.value;
                    updateWidget(widget);
                }} placeholder="Widget name" ref={node => title = node} className="form-control" id="title"/>
        </div>}
            <h4>Preview</h4>
            {widget.listItems !== undefined  && widget.ordered &&
            <ol>
                {widget.listItems.split('\n').map((item, index) =>
                    (
                        <li key={index}>{item}</li>
                    ))}
            </ol>
            }
            {widget.listItems !== undefined && !widget.ordered && <ul>
                {widget.listItems.split('\n').map((item, index) =>
                    (
                        <li key={index}>{item}</li>
                    ))}
            </ul>
            }
        </div>
    )
}



export default ListWidget