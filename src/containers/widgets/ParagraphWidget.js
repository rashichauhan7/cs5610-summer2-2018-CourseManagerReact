import React from 'react'

const ParagraphWidget = ({toggleActive, widget, updateWidget}) => {
let text;
let title;
    return (
        <div>
            {widget.edit && !toggleActive &&<div>

            <h3>Paragraph widget</h3>
            <input className="form-control" placeholder="Paragraph Text" id="text"
                   ref = {node => text = node}
                   onChange={
                       () => {
                          widget.text = text.value;
                          updateWidget(widget);
                       }
                   }/>
                <label></label>
                <input onChange={() => {
                    widget.title = title.value;
                    updateWidget(widget);
                }} placeholder="Widget name" ref={node => title = node} className="form-control" id="title"/>
            </div>}
            <div>
            <h4>Preview</h4>
            <textarea style={{border:'none'}} readOnly className="form-control" value={widget.text}></textarea>
            </div>
        </div>
    )
}

export default ParagraphWidget;