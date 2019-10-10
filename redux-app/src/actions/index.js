

const fetchList = () => {
    return() => {}
}


const thunk = next => action => store => {
    if (typeof action === 'object') {
        next(action); // this forwards the action unthouched 
    }else if (typeof action === 'function') {
        action() //stop the action and call the function 
    }
}