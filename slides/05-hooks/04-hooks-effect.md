
    
    ## Hooks principaux
    
    ### [useEffect 😍](https://reactjs.org/docs/hooks-effect.html)
    
        useEffect(() => {
          doSomethingOnMountOrUpdate()
          // Optionnaly return cleanup function
          return () => {
            doSomethingOnUnmountOrBeforeUpdate()
          }
        })
    
    **Mais ça va tourner à chaque re-render ??** Oui ! #fear
    
    