
    
    ## select
    
    Une fonction `appState => componentProps`
    
    Son but est de _mapper_ l'état global de l'application vers les propriétés reçues par le composant.
    
        function mapStateToProps ({ contacts, ui, data3… }) {
          return { contacts } // pas besoin de récupérer la totalité de l'état
        }
    
        const Contacts = ({ contacts }) => { contacts }
    
        export default connect(mapStateToProps)(Contacts)
    
    