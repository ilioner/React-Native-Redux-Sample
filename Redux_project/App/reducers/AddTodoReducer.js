/**
 * Created by Tywin on 16/1/22.
 */

import {ADD_TODO} from '../actions/Actions';

export const REDUCER_ADD_TODO =  'REDUCER_ADD_TODO';

/*
 创建默认state
 */
const initalState={
    todoItem:[],
    reducerType:REDUCER_ADD_TODO
}

module.exports = function AddTodoReducer(state = initalState,action){
    let list;
    switch (action.type){
        case ADD_TODO:
        {
            console.log('ADD_TODO====>'+state.todoItem);
            //将新的todoItem添加到todolist尾部 并更新state返回
            list = state.todoItem.concat(action.item);
            return {...state,todoItem:list};
        }
        default :{
            console.log(state);
            return state;
        }
    }
}