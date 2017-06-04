/****
 * 一个符合 Redux 要求的 Reducer usersReducer，它可以支持以下对一个存储用户信息的数组进行增、删、改的需求：
 * @param state -- 初始的数据
 * @param action -- 带修改的数据
 * @returns {*}
 */
const usersReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.user]; //这样返回最新的用户数组，并且不会修改初始的数据
        case 'DELETE_USER':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];//删除的时候，从原始的state上截取规定的索引的前部分和后部分，不包括被截取的所有的值

        case 'UPDATE_USER'://修改
            return [...state.map((user,index) => {//遍历
                if(index == action.index) {
                    return { ...user, ...action.user }
                }else {
                    return user;
                }
            })];
        default:
            return state;
    }
};