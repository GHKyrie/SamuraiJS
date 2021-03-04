import React from 'react';
import ReactDOM from 'react-dom';
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: '0'},
        {id: 2, message: 'Hello, where have you been?', likesCount: '29'},
        {id: 3, message: 'Hello, hello', likesCount: '45'}
    ]
};

it('The number of post should increase', () => {
    //1. test data
    let action = addPostActionCreator('test text * ** ***');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(4);
});

it('The message text is as follows', () => {
    //1. test data
    let action = addPostActionCreator('test text * ** ***');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[3].message).toBe("test text * ** ***");
});

it('The number of post should decrease', () => {
    //1. test data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
});

it('The number of post should not decrease if postID is incorrect', () => {
    //1. test data
    let action = deletePost(10000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});