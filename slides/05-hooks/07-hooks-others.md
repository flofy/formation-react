## Autres hooks

### [useRef 👷](https://reactjs.org/docs/hooks-reference.html#useref)  et [useImperativeHandle 👷](https://reactjs.org/docs/hooks-reference.html#useimperativehandle) 

Équivalent à une propriété d'instance, initialement dédiée aux `ref`s.

### [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect) , [useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue), …


### [useCallback 👷](https://reactjs.org/docs/hooks-reference.html#usecallback) et [useMemo 👷](https://reactjs.org/docs/hooks-reference.html#usememo)

Utilisé pour la mémoification (tout comme `React.memo` mais sans avoir besoin de déclarer la version mémoisée de la fonction en global) :

    const value = useMemo(() => expensiveCompute(a, b), [a, b])