import {connect} from 'react-redux'
import WidgetListComponent from './WidgetListComponent'

const stateToPropertyMapper = (state, ownProps) => (
    {
        widgets: state.widgets,
        topicId: ownProps.topicId
    }
)

const dispatcherToPropertyMapper = dispatch => (
    {
        setImage: (id, image) => dispatch({type: 'IMAGES', image: image, id: id}),
        up: (w) => dispatch({type: 'UP', widget: w}),
        down : (w) => dispatch({type: 'DOWN', widget: w}),
        deleteWidget : (widgetId) => dispatch({type: 'DELETE_WIDGET', widgetId: widgetId}),
        createWidget : (w) => dispatch({type: 'CREATE_WIDGET', widget: w}),
        saveWidget : (topicId) => dispatch({type: 'SAVE_WIDGETS', topicId: topicId}),
        updateWidget : (w) => dispatch({type: 'UPDATE_WIDGET', widget: w}),
        loadAllWidgets : (topicId) => {
            var url = 'http://localhost:8080/api/topic/TID/widget';
            fetch(url.replace('TID', topicId))
                .then(response => response.json())
                .then(widgets => dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                }))
        }
    }
)

const WidgetListContainer = connect(stateToPropertyMapper,
                        dispatcherToPropertyMapper)
                    (WidgetListComponent)

export default WidgetListContainer;