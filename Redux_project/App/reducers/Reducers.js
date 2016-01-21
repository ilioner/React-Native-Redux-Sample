/**
 * Created by Tywin on 16/1/20.
 */
import {ADD_TODO} from '../actions/Actions';


/*
创建默认state
 */
const initalState={
    todoItem:[]
}

export function reducerFunction(state = initalState,actionObj){

    let list;
    switch (actionObj.type){
        case ADD_TODO:
        {
            console.log(actionObj);
            //将新的todoItem添加到todolist尾部 并更新state返回
            list = state.todoItem.concat(actionObj.item);
            return {...state,todoItem:list};
        }
        default :{
            return state;
        }
    }

}