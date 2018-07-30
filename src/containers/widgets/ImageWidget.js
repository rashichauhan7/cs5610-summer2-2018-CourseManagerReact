import React from 'react'
import $ from '../../../node_modules/jquery';
import ToggleButton from 'react-toggle-button'

const ImageWidget = ({toggleActive, widget, updateWidget, images, renderImages,setImage}) => {
    let src;
    let title;

    $('.image1').click(function(){
        $('#URL').val($('.image1').find('img').attr('src'));
        setImage(widget.id,$('.image1').find('img').attr('src') );
    })
    $('.image2').click(function(){
        $('#URL').val($('.image2').find('img').attr('src'));
        setImage(widget.id,$('.image2').find('img').attr('src') );
    })
    $('.image3').click(function(){
        $('#URL').val($('.image3').find('img').attr('src'));
        setImage(widget.id,$('.image3').find('img').attr('src') );
    })
    $('.image4').click(function(){
        $('#URL').val($('.image4').find('img').attr('src'));
        setImage(widget.id,$('.image4').find('img').attr('src') );
    })
    $('.image5').click(function(){
        $('#URL').val($('.image5').find('img').attr('src'));
        setImage(widget.id,$('.image5').find('img').attr('src') );
    })
    $('.image6').click(function(){
        $('#URL').val($('.image6').find('img').attr('src'));
        setImage(widget.id,$('.image6').find('img').attr('src') );
    })
    $('.image7').click(function(){
        $('#URL').val($('.image6').find('img').attr('src'));
        setImage(widget.id,$('.image7').find('img').attr('src') );
    })
    $('.image8').click(function(){
        $('#URL').val($('.image8').find('img').attr('src'));
        setImage(widget.id,$('.image8').find('img').attr('src') );
    })
    $('.image9').click(function(){
        $('#URL').val($('.image9').find('img').attr('src'));
        setImage(widget.id,$('.image9').find('img').attr('src') );
    })
    $('.image10').click(function(){
        $('#URL').val($('.image10').find('img').attr('src'));
        setImage(widget.id,$('.image10').find('img').attr('src') );
    })

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
            <button className="btn" onClick={() => renderImages(widget.id)}>Get Random Images</button>
                {/*<div>{renderImages(widget.id)}</div>*/}
                <div className="row">
                <div className="image1" ></div>
                <div className="image2" ></div>
                <div className="image3" ></div>
                <div className="image4" ></div>
                <div className="image5" ></div>
                <div className="image6" ></div>
                <div className="image7" ></div>
                <div className="image8" ></div>
                <div className="image9" ></div>
                <div className="image10" ></div>
                </div>
                <h4>Preview</h4>
        </div>}

            {!widget.edit && widget.editing && <div>
                <input onChange={() => {
                    widget.title = title.value;
                    updateWidget(widget);
                }} value={widget.title} ref={node => title = node} className="form-control" id="title"/>
                <input value={widget.src} ref = {node => src = node}

                       onChange={() => {
                           widget.src = src.value;
                           updateWidget(widget);
                       }}
                       className="URL form-control"/>

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