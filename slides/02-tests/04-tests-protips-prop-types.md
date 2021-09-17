## #ProTip Prop Types

La validation des _propTypes_ ne génère qu'un message en console, on veut que ça plante nos tests !

    // setupTests.js

    // Monkey-patch console to crash on prop-types error
    const _error = console.error
    console.error = (message, ...rest) => {
      if (/Failed prop type/.test(message)) {
        throw new Error(message)
      }

      _error.call(this, message, ...rest)
    }

