import React from 'react'

const ParagraphWidget = ({toggleActive, widget, updateWidget}) => {
let text;

    return (
        <div>
            <h3>Paragraph widget</h3>
            <input placeholder="Paragraph Text" id="text"
                   ref = {node => text = node}
                   onChange={
                       () => {
                          widget.text = text.value;
                          updateWidget(widget);
                       }
                   }/>
            <h4>Preview</h4>
            <textarea value={widget.text}></textarea>
        </div>
    )
}

export default ParagraphWidget;