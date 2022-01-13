const button = document.getElementById('debounceButton');
const input = document.getElementById('debounceInput');

/**
 * 
 * @param {function} eventHandler 
 * @param {number} delay 
 * @returns {function}
 */
function debounce(eventHandler, delay = 1) {
    let timeoutId = null;

    const debounceHandler = (event) => {
        if (!timeoutId) {
            const timeoutCallback = () => {
                eventHandler(event)
                timeoutId = null;
            }

            timeoutId = setTimeout(timeoutCallback, 1000 * delay);
        }
    }

    return debounceHandler;
}

const clickHandler = (event) => {
    console.log(event.target.id + ' clicked');
}

const inputHandler = (event) => {
    const { value } = event.target;
    console.log(value);
}

button.addEventListener('click', debounce(clickHandler));
input.addEventListener('input', debounce(inputHandler, 1.5));