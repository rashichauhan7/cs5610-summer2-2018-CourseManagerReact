
let initialState = {
    widgets: []

};

export const widgetReducer = (state = initialState, action) =>
{
    switch(action.type){
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
            state.widgets = [
                action.widget,
                ...state.widgets

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