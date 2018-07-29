
let initialState = {
    widgets: []

};

export const widgetReducer = (state = initialState, action) =>
{
    switch(action.type){

        case 'UP':
            var index = state.widgets.findIndex((widget) => widget.id === action.widget.id);
            if(index !== 0) {
                state.widgets = state.widgets.filter(
                    widget => widget !== action.widget
                )
                state.widgets.splice(index - 1, 0, action.widget);
            }
            return {
                widgets: state.widgets
            }
        case 'DOWN':
            var index = state.widgets.findIndex((widget) => widget.id === action.widget.id);
            if(index !== state.widgets.length-1) {
                state.widgets = state.widgets.filter(
                    widget => widget !== action.widget
                )
                state.widgets.splice(index + 1, 0, action.widget);
            }
            return {
                widgets: state.widgets
            }
        case 'FIND_ALL_WIDGETS':
            console.log(action.widgets);
            state.widgets =  action.widgets;
            return {
              widgets:action.widgets
            };
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            }
        case 'CREATE_WIDGET':
            action.widget.edit = true;
            state.widgets = [

                ...state.widgets,
                action.widget

            ]
            console.log(state.widgets);
            return {
                widgets: state.widgets
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        return action.widget;
                    }
                    else
                    {
                        return widget;
                    }
                })
            }
        case 'SAVE_WIDGETS':
            var url = 'http://localhost:8080/api/topic/TID/widget';
            state.widgets.map(widget => {
                 widget.edit = false;
            });
            fetch(url.replace('TID',action.topicId),{
                body: JSON.stringify(state.widgets),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            });

            return state;
        default:
            return state;

    }

}