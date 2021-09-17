
    
    ## bindActionCreators
    
    Grâce à ce helper, on peut auto-dispatcher l'action au sein des components.
    
        import { bindActionCreators } from 'redux'
    
        const mapDispatchToProps = (dispatch) => ({
          actions: bindActionCreators(contactActions, dispatch)
        })
    
    