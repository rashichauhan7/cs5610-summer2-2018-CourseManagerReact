import React from 'react'
import ToggleButton from 'react-toggle-button'

const ParagraphWidget = ({toggleActive, widget, updateWidget}) => {
let text;
let name;
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
                    widget.name = name.value;
                    updateWidget(widget);
                }} placeholder="Widget name" ref={node => name = node} className="form-control" id="name"/>
                <h4>Preview</h4>
            </div>}

            {!widget.edit && widget.editing && <div>
                <label>Widget name</label>
                <input onChange={() => {
                    widget.name = name.value;
                    updateWidget(widget);
                }} value={widget.name} ref={node => name = node} placeholder={widget.name} className="form-control" id="name"/>
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