
    
    ## Hooks principaux
    
    ### [useState 😎](https://reactjs.org/docs/hooks-state.html)
    
    Permet de créer des composants _stateful_ sans classe
    
        const [value, setValue] = useState(initialValue)
    
    *   `initialValue` peut également être une fonction, qui doit retourner la valeur initiale (de manière synchrone) et ne sera appelée _que la première fois_
    
    