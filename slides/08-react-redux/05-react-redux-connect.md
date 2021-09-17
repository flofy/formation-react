
    
    ## connect
    
    _connecter_ un composant à Redux revient à :
    
    *   sélectionner la portion du _state_ qui le concerne
    *   choisir et binder les _actions_ dont il a besoin
    
        import { connect } from 'react-redux';
    
        class MyComponent { … }
    
        export default connect(select, actions)(MyComponent)
    
        @connect(select, actions)
        export default class MyComponent { … }
    
    *   [ESNext Decorators](https://github.com/wycats/javascript-decorators)
    
    
    
    *   Pour les décorateurs, penser au `"stage": 0` dans `.babelrc`
    
    
    
    