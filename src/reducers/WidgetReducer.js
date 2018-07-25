
let initialState = {
    widgets: [
        {
            title: 'Widget 1',
            id: 123,
            type: 'Type 1'
        }
        , {
            title: 'Widget 2',
            id : 122,
            type: 'Type 2'
        }, {
            title: 'Widget 3',
            id: 121,
            type: 'Type 1'
        }, {
            title: 'Widget 4',
            id: 120,
            type: 'Type 3'
        }
    ]
};

export const widgetReducer = (state = initialState, action) =>
{
    switch(action.type){
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(
                    widget => widget.id !== action.widgetId
                )
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    action.widget,
                    ...state.widgets

                ]
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.widget.id) {
                        widget.type = action.widget.type;
                        return widget;
                    }
                    else
                    {
                        return widget;
                    }
                })
            }
        default:
            return state;

    }

}