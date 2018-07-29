import React from 'react'

 const LinkWidget = ({toggleActive, widget, updateWidget}) => {
    let src;
    let text;
    let title;
    return (
        <div>
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
                   }} placeholder="Link src"
                   className="form-control"/>
                <input onChange={() => {
                    widget.title = title.value;
                    updateWidget(widget);
                }} placeholder="Widget name" ref={node => title = node} className="form-control" id="title"/>
                <h4>Preview</h4>
            </div>}
            <div>

            <a href={widget.src}
            >{widget.text}</a>
            </div>
        </div>
    )
}

export default LinkWidget;