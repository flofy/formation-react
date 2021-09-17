
    
    ## ownProps
    
        const Contacts = ({ contacts }) =>
          { contacts.map(c => ) }
    
        const _Contact = ({ name, displayAvatar }) =>
          
            { displayAvatar &&  }
            { name }
          
    
        const mapStateToProps = (state, ownProps) => ({
          displayAvatar: state.ui.avatarsEnabled && ownProps.name !== 'Guest'
        })
    
        const Contact = connect(mapStateToProps)(_Contact)
    
    