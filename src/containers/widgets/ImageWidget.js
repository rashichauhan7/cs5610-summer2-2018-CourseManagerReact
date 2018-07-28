import React from 'react'


const ImageWidget = ({toggleActive, widget, updateWidget}) => {
    let src;
    return (
        <div>
            <h3> Image Widget</h3>
            <input ref = {node => src = node}
                   id='URL'
                   onChange={() => {
                       widget.src = src.value;
                       updateWidget(widget);
                   }}
                   className="form-control"/>
            {toggleActive && <div >
            <h4>Preview</h4>
                <div>
                    <img width="560"
                         height="560" src={widget.src}>
                    </img>
                </div>

        </div>}
        </div>
    )
}

export default ImageWidget;