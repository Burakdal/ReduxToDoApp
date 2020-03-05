const todos=(state=[],action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state,action.payload]
            
        case 'TOGGLE_TODO':
            return state.map(todo=>(
                todo.id==action.payload.id
                ? {...todo,complated:!todo.complated}:
                todo
            ))
        default:
            return state

    }
    return state
}

export default todos;