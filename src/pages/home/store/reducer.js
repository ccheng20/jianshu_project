import { fromJS } from 'immutable';


//immutable对象

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp'
    },{
        id: 2,
        title: '手绘',
        imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240/format/webp'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type){
        
        default:
            return state;
    }

    // immutable对象的set方法， 会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
}