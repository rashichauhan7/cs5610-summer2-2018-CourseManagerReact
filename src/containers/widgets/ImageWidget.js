import React from 'react'
import ToggleButton from 'react-toggle-button'

const ImageWidget = ({toggleActive, widget, updateWidget}) => {
    let src;
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

            {widget.edit && !toggleActive && <div>
            <h3> Image Widget</h3>
            <input placeholder="Image URL" ref = {node => src = node}
                   id='URL'
                   onChange={() => {
                       widget.src = src.value;
                       updateWidget(widget);
                   }}
                   className="form-control"/>
            <input onChange={() => {
                widget.title = title.value;
                updateWidget(widget);
            }} placeholder="Widget Name" ref={node => title = node} className="form-control" id="title"/>
                <h4>Preview</h4>
        </div>}

            {!widget.edit && widget.editing && <div>
                <input onChange={() => {
                    widget.title = title.value;
                    updateWidget(widget);
                }} value={widget.title} ref={node => title = node} className="form-control" id="title"/>
                <input value={widget.src} ref = {node => src = node}
                       id='URL'
                       onChange={() => {
                           widget.src = src.value;
                           updateWidget(widget);
                       }}
                       className="form-control"/>

            </div>}
            <div>

                <div>
                    <img width="560"
                         height="560" src={widget.src}>
                    </img>
                </div>

        </div>
        </div>
    )
}

export default ImageWidget;