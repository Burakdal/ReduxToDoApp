import ToDoList from '../components/ToDoList';
import {connect} from 'react-redux';

const mapStateToProps=(state)=>({
    todos:state.todos
})

const mapDispatchToProps=dispatch=>({
    toggleToDo:id=>dispatch({type:"TOGGLE_TODO",payload:id})
})

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);
