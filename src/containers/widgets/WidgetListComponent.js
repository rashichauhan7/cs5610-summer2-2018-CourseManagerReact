import React from 'react'
import $ from '../../../node_modules/jquery';
import ImageWidget from '../widgets/ImageWidget'
import HeadingWidget from '../widgets/HeadingWidget'
import ListWidget from '../widgets/ListWidget'
import LinkWidget from '../widgets/LinkWidget'
import ParagraphWidget from '../widgets/ParagraphWidget'
import ToggleButton from 'react-toggle-button'


class WidgetListComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { toggleActive: false, topicId: '', images : []};
        this.changeNode = this.changeNode.bind(this);
        this.renderImages = this.renderImages.bind(this);
        this.getImages = this.getImages.bind(this);
    }

    changeNode(event, widget)
    {
        widget.type = event.target.value;
        console.log(event.target.value);
        this.props.updateWidget(widget);
    }

    componentWillReceiveProps(newprops)
    {
        if(newprops.topicId !== '' && newprops.topicId !== this.state.topicId)
        {
            this.setState({topicId:newprops.topicId});
            this.props.loadAllWidgets(newprops.topicId);
        }
    }

    renderImages(id) {
        this.getImages().done(function (images) {
            console.log(images);
            var i = 0;
            const self = this;
            var image = images.items.map((image) => {
                let link = image['media']['m'].replace("_m", "_b");
                $('.image'+i).append( "<img key=" + (++i) + " border='0' src=" +link+" width='100' height='100'/>");

            });
        })


    }
    getImages() {
        const self = this;
        let images = [];
            return $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
                {
                    tags: "planet",
                    tagmode: "any",
                    format: "json"
                }).done(function (data) {

                    for (var i = 0; i < 10; i++) {
                        var image_src = data.items[i]['media']['m'].replace("_m", "_b");
                        images[i] = image_src;

                    }
                        self.setState({images:images});
                        return images;
                    });


        }



    render () {
        return (

            <div className="container-fluid">

                <ul className="list-group">

                    <li className="list-group-item">

                        <button className="btn btn-success form-control" onClick={() => {


                            let widget = {id: new Date().getTime() % 100000000 , type: "HEADING"};
                            this.props.createWidget(widget);

                        }}> Add Widget</button>
                        <button onClick={() => {
                            this.props.saveWidget(this.state.topicId);
                            window.location.reload(true);
                        }}
                                className="btn btn-primary form-control" style={{marginRight: 10}}>Save</button>
                        <label className="float-right" >
                            <span>Preview</span>
                            <ToggleButton
                                value={ this.state.toggleActive || false }
                                onToggle={(value) => {
                                    this.setState({
                                        toggleActive: !value,
                                    })
                                }}/>
                        </label>
                    </li>
                    {

                        this.props.widgets.map((widget, index) =>

                            <li className="list-group-item" key={index}>

                                <button className="float-right btn btn-danger"
                                        onClick={() => this.props.deleteWidget(widget.id)}> Delete </button>
                                {index !== 0 &&
                                <button className="float-right btn btn-warning"
                                 onClick={() => this.props.up(widget)}
                                > <i className="fa fa-arrow-up" aria-hidden="true"></i></button>}
                                {index !== this.props.widgets.length -1 &&
                                <button className="float-right btn btn-warning"
                                onClick={() => this.props.down(widget)}
                                ><i className="fa fa-arrow-down" aria-hidden="true"></i></button>}

                                {widget.edit &&
                                <select className="float-right btn"
                                                        ref="node" value = {widget.type}
                                onChange={(event) => this.changeNode(event,widget)}>
                                    <option value="HEADING">HEADING</option>
                                    <option value="IMAGE">IMAGE</option>
                                    <option value="LIST">LIST</option>
                                    <option value="LINK">LINK</option>
                                    <option value="PARAGRAPH">PARAGRAPH</option>

                                </select>}
                                <div>
                                    {widget.type === 'PARAGRAPH' && <ParagraphWidget toggleActive = {this.state.toggleActive}  updateWidget = {this.props.updateWidget} widget={widget}/>}
                                    {widget.type === 'IMAGE' && <ImageWidget toggleActive = {this.state.toggleActive}  updateWidget = {this.props.updateWidget} widget={widget} renderImages = {this.renderImages} setImage={this.props.setImage}/>}
                                    {widget.type === 'LINK' && <LinkWidget toggleActive = {this.state.toggleActive}  updateWidget = {this.props.updateWidget} widget={widget}/>}
                                    {widget.type === 'HEADING' && <HeadingWidget toggleActive = {this.state.toggleActive} updateWidget = {this.props.updateWidget} widget={widget}/>}
                                    {widget.type === 'LIST' && <ListWidget toggleActive = {this.state.toggleActive} updateWidget = {this.props.updateWidget} widget={widget}/>}
                                </div>
                            </li>)
                    }
                </ul>
            </div>
        )}

}


export default WidgetListComponent;