
    
    ## Hooks 😍 : principe général
    
    *   Nouveauté introduite dans la 16.8
    *   Permet d'accéder aux fonctionnalité de React depuis n'importe quel composant (state, cycle de vie, etc.)
    
    Composant fonction "stateful" !
    
        const Counter = () => {
          const [count, setCount] = useState(0)
          const incr = () => setCount(count + 1)
    
          return {count}
        }
    
    Le meilleur des deux mondes ?
    
    