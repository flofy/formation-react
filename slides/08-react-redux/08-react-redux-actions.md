
    
    ## actions
    
    Un objet `{ actionName: actionCreator }`
    
    Chaque action sera injectée dans le composant sous la forme d'une prop permettant de dispatcher l'action correspondante.
    
        const actions = {
          addContact: (name) => ({ type: 'ADD_CONTACT', name })
        }
    
        const Btn = ({ addContact }) =>
          Add
    
        export default connect(null, actions)(Btn)
    
    