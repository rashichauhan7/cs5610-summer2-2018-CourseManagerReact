
let initialState = {
    widgets: []
};

export const widgetReducer = (state = initialState, action) =>
{
    switch(action.type){

        case 'IMAGES' :
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.src = action.image;
                        return widget;
                    }
                    else
                    {
                        return widget;
                    }
                })
            }
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
            var tmpArr = [];
            for(var w in state.widgets) {
                if(tmpArr.indexOf(state.widgets[w].name) < 0){
                    tmpArr.push(state.widgets[w].name);
                } else {
                    alert("Cannot have more than one widget with the same name : " + state.widgets[w].name);
                    return state;
                }
            }


            var url = 'https://webdev-summer2-2018-1.herokuapp.com/api/topic/TID/widget';
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