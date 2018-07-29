import React from 'react'



const ImageWidget = ({toggleActive, widget, updateWidget}) => {
    let src;
    let title;

    return (
        <div>
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