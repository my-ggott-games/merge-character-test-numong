function debounce(func, timeout = 1000){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function saveInput(){
    console.log('도장 쾅!');
}

const processChanges = debounce(() => saveInput());