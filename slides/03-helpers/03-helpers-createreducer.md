
    
    ## createReducer
    
        export function createReducer (initialState, fnMap) {
          return (state = initialState, { type, payload, meta, error }) => {
            const handler = fnMap[type];
            return handler ? handler(state, payload, meta, error) : state;
          };
        }
    
        // Avant
        export default (state = initialState, action) => {
          switch (action.type) {
            case 'CHANGE_NAME': return …
            default: return state
          }
        }
    
        // Après
        export default createReducer(initialState, {
          CHANGE_NAME: (state, payload) => { ... }
        });
    
    Voir [Flux Standard Action](https://github.com/acdlite/flux-standard-action)
    
    