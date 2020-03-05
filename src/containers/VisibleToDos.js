import ToDoList from '../components/ToDoList';
import {connect} from 'react-redux';
import {ToggleToDoAction} from '../actions/index';
const mapStateToProps=(state)=>({
    todos:state.todos
})

const mapDispatchToProps=dispatch=>({
    toggleToDo:id=>dispatch(ToggleToDoAction)
})

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);
