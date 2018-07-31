import React from 'react'
import ToggleButton from 'react-toggle-button'


 const LinkWidget = ({toggleActive, widget, updateWidget}) => {
    let src;
    let text;
    let name;
    return (
        <div>
            <label  className="float-right" style={{marginRight: 10}}>
                <span>Editing</span>
                <ToggleButton
                    value={widget.editing || false}
                    onToggle={(value) => {
                        widget.editing = !value;
                        updateWidget(widget)
                    }}/></label>
            {widget.edit && !toggleActive &&
            <div>
            <h3> Link Widget</h3>

                <input ref = {node => text = node}
                       id='URL'
                       onChange={() => {
                           widget.text = text.value;
                           updateWidget(widget);
                       }}
                       placeholder="Link text"
                       className="form-control"/>

            <input ref = {node => src = node}
                   id='URL'
                   onChange={() => {
                       widget.src = src.value;
                       updateWidget(widget);
                   }} placeholder="Link URL"
                   className="form-control"/>
                <input onChange={() => {
                    widget.name = name.value;
                    updateWidget(widget);
                }} placeholder="Widget name" ref={node => name = node} className="form-control" id="name"/>
                <h4>Preview</h4>
            </div>}

            {!widget.edit && widget.editing && <div>
                <label>Widget Name</label>
                <input onChange={() => {
                    widget.name = name.value;
                    updateWidget(widget);
                }} value={widget.name} ref={node => name = node} className="form-control" id="name"/>
                <label>Link text</label>
                <input ref = {node => text = node}
                       id='text'
                       onChange={() => {
                           widget.text = text.value;
                           updateWidget(widget);
                       }}
                       value={widget.text}
                       className="form-control"/>
                <label>Link URL</label>
                <input ref = {node => src = node}
                       id='URL'
                       onChange={() => {
                           widget.src = src.value;
                           updateWidget(widget);
                       }} value={widget.src}
                       className="form-control"/>
            </div>}
            <div>

            <a href={widget.src}
            >{widget.text}</a>
            </div>
        </div>
    )
}

export default LinkWidget;