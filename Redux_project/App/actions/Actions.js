/**
 * Created by Tywin on 16/1/20.
 */
import Item from '../models/Item';
    /*
    创建action类型
     */
export const ADD_TODO = 'ADD_TODO';

/*
action创建函数
 */
export function addTodo(item:Item){
    return {type:ADD_TODO,item};
}