
export interface StateProps {
    id:number;
    text:string;
    isFinished:boolean;
}

export interface ActionProps {
    type:string;
    [key:string]: any;
}
const reducer = (state:StateProps[],action:ActionProps) => {
    switch (action.type) {
        case "ADD":
            return [...state,action.todo];
        case "CHANGEFINISHED":
            return state.map(item => {
                if( item.id === action.id ) {
                    item.isFinished = !item.isFinished;
                }
                return item;
            });
        default:
            return state;
    }
}

export default reducer;