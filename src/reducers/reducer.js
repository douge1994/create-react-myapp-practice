const reducers=(state,action)=>{
    if(!state){
        state={ count:0 };
    }
    const count = state.count;
    switch (action.type){
        case 'increase':
            return{ count:count+1};
        case 'delete':
            return{ count:count-1};
        default :
            return state
    }
}

export default reducers;