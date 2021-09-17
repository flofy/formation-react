
    
    ## createAction
    
    Module [`redux-actions`](https://github.com/acdlite/redux-actions)
    
    Force la convention Flux Standard Action
    
        npm install --save redux-actions
    
        changeName = createAction('CHANGE_NAME');
    
        expect(changeName('Lilian')).to.deep.equal({
          type: 'CHANGE_NAME',
          payload: 'Lilian'
        });
    
    En réalité `createAction` retourne un _action creator_
    
    