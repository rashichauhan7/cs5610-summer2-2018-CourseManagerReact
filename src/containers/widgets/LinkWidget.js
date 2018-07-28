import React from 'react'

 const LinkWidget = ({toggleActive, widget, updateWidget}) => {
    let src;
    return (
        <div>
            <h3> Link Widget</h3>
            <input ref = {node => src = node}
                   id='URL'
                   onChange={() => {
                       widget.src = src.value;
                       updateWidget(widget);
                   }}
                   className="form-control"/>
            <h4>Preview</h4>
            <a href={widget.src}
            >{widget.src}</a>
        </div>
    )
}

export default LinkWidget;