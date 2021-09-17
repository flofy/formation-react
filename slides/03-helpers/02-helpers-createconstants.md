
    
    ## createConstants
    
        export function createConstants (...constants) {
          return constants.reduce((acc, constant) => {
            acc[constant] = constant;
            return acc;
          }, {});
        }
    
    Avant
    
        export default {
          'CHANGE_NAME': 'CHANGE_NAME',
          'ADD_USER': 'ADD_USER'
        }
    
    Après
    
        export default createConstants(
          'CHANGE_NAME',
          'ADD_USER'
        );
    
    