## Hooks 😥 : limites et avertissement

*   L'implémentation interne est basée sur l'ordre d'appel des hooks
*   **PAS DE CONDITION, PAS DE BOUCLE**
*   ESLint : `eslint-plugin-react-hooks`

    const MyComponent = props => {
      if (props.test) useEffect(…) // WRONG!
      useEffect(() => if (props.test) … ) // OK

      props.list.forEach(() => states.push(useState(…))) // WRONG!
      const [states, setStates] = useState(props.list.map(…)) // OK
    }
