## Autres Hooks
    
### [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
    
Permet d'accéder à la valeur du contexte fourni (retourné par [React.createContext](https://reactjs.org/docs/context.html)) :
    
    const value = useContext(Context)
    
*   Évite l'imbrication de composants lorsqu'on a plusieurs contextes
*   Permet un accès hors-JSX pour les calculs
    
### [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
    
    Alternative à `useState` en mode reducer (couplé à `useContext` on peut refaire un Redux) :
---    
    const [state, dispatch] = useReducer(reducer, initialArg, init)
---

Note:
*   https://rednet.io/2020-06-02-les-hooks-particuliers.html