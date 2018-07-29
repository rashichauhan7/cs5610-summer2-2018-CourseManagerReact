import React from 'react'

 const HeadingWidget = ({toggleActive, widget, updateWidget}) =>
 {
     let text;
     let size;
     let title;
        if(widget.size === undefined)
            widget.size = '1';
     return (
         <div>
             {widget.edit && !toggleActive &&<div>

             <h3>Heading Widget</h3>
             <input onChange={() => {
                 widget.text = text.value;
                 updateWidget(widget);
             }}
                    ref={node => text = node} placeholder="Heading Text" className="form-control" id="text"/>

             <label htmlFor="size">Heading Size</label>

             <select  defaultValue="1" onChange={()=>
             {
                 widget.size = size.value;
                 updateWidget(widget);
             }} className='form-control' id='size' ref={node => size = node}>
             <option value='1'>Heading 1</option>
             <option value='2'>Heading 2</option>
             <option value='3'>Heading 3</option>
            </select>
                 <label></label>
                 <input onChange={() => {
                     widget.title = title.value;
                     updateWidget(widget);
                 }} placeholder="Widget name" ref={node => title = node} className="form-control" id="title"/>
             </div>}
             <div>
                 <h4>Preview</h4>
             {(widget.size === "1" || widget.size === undefined) && <h1>{widget.text}</h1>}
             {widget.size === "2" && <h2>{widget.text}</h2>}
             {widget.size === "3" && <h3>{widget.text}</h3>}
             </div>

         </div>
     )
 }


export default HeadingWidget