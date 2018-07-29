import React from 'react'

const ParagraphWidget = ({toggleActive, widget, updateWidget}) => {
let text;

    return (
        <div>
            {widget.edit && !toggleActive &&<div>

            <h3>Paragraph widget</h3>
            <input placeholder="Paragraph Text" id="text"
                   ref = {node => text = node}
                   onChange={
                       () => {
                          widget.text = text.value;
                          updateWidget(widget);
                       }
                   }/>
            </div>}
            <div>
            <h4>Preview</h4>
            <textarea style={{border:'none'}} readOnly className="form-control" value={widget.text}></textarea>
            </div>
        </div>
    )
}

export default ParagraphWidget;