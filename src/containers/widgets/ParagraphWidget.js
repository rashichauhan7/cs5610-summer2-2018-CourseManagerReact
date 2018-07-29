import React from 'react'
import ToggleButton from 'react-toggle-button'

const ParagraphWidget = ({toggleActive, widget, updateWidget}) => {
let text;
let title;
    return (
        <div>
            <label className="float-right" style={{marginRight: 10}}>
                <span>Editing</span>
                <ToggleButton
                    value={widget.editing || false}
                    onToggle={(value) => {
                        widget.editing = !value;
                        updateWidget(widget)
                    }}/></label>

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
                <h4>Preview</h4>
            </div>}

            {!widget.edit && widget.editing && <div>
                <input onChange={() => {
                    widget.title = title.value;
                    updateWidget(widget);
                }} value={widget.title} ref={node => title = node} className="form-control" id="title"/>
                <label>Paragraph Text</label>
                <input className="form-control" value={widget.text} id="text"
                       ref = {node => text = node}
                       onChange={
                           () => {
                               widget.text = text.value;
                               updateWidget(widget);
                           }
                       }/>


            </div>
            }
            <div>

            <textarea style={{border:'none'}} readOnly className="form-control" value={widget.text}></textarea>
            </div>
        </div>
    )
}

export default ParagraphWidget;