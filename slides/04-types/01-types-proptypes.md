
    
    ## [`propTypes`](https://facebook.github.io/react/docs/reusable-components.html)
    
    Règles de validation pour contrôler le format des propriétés passées en entrée d'un composant au runtime.
    
        {
          "num": PropTypes.number.isRequired,
          "currency": PropTypes.oneOf('/section>, '€', '£'),
          "persons": PropTypes.arrayOf(PropTypes.shape({
            "name": PropTypes.string.isRequired,
            "age": PropTypes.number
          }))
        }
    
        // ES5
        React.createClass({ propTypes: … })
        // ES6
        MyComponent.propTypes = …
        // ESNext
        class MyComponents extends Component { static propTypes = … }
        // Stateless
        MyComponent.propTypes = …
    
    
    
    Dans les dernières versions de React, il faut faire `import PropTypes from 'prop-types'`
    
    
    
    