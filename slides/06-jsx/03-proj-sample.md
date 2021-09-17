
    
    ## Une nouvelle syntaxe, un _DSL_ basé sur XML
    
        function Contact (props) {
          return (
            
              Name: 
              { props.name }
            
          )
        }
    
        function ContactList (props) {
          const contacts = props.names.map((name, key) => (
            
          ))
    
          return { contacts }
        }
    
        var root = 
    
    