const dataSet = [0, 0, 0];
const yRegExp = new RegExp("^([-+]?\\d+[.]?\\d{0,15})$");
document.getElementById('data-input-form-id').addEventListener('submit', function(event){
    event.preventDefault();
    if(validate(this)){
        handleRequest(dataSet[0], dataSet[1], dataSet[2]);
    }
});

function validate(form){
    const allButtonInputs = form.querySelectorAll('input[type="button"]');
    const textInput = form.querySelector('input[type="text"]');
    dataSet[2] = form.querySelector('select[id="r-input-choice-id"]').value;

    let validX = isValidX(allButtonInputs, window.buttonInput);
    let validY = isValidY(textInput);

    return validX && validY;
}

function isValidX(allButtonInputs, xValue){
    removeError(allButtonInputs.item(0));
    let valid;
    if(!isNaN(parseInt(xValue)) && isFinite(xValue)){
        valid = true;
        dataSet[0] = xValue;
    }
    else{
        createError(allButtonInputs.item(0), "*Поле с X не должно быть пустым, выберите один из несольких!")
    }
    return valid;
}

function isValidY(textInput) {
    removeError(textInput);
    let valid;
    let yInput = textInput.value;
    if (yInput !== "") {
        let yNumberInput = Number(yInput);
        if(Number.isFinite(yNumberInput)){
            if (yRegExp.test(yInput)) {
                valid = yNumberInput >= -3 && yNumberInput <= 3;
                if (!valid) {
                    createError(textInput, "*Поле с Y не должно выходить за пределы диапозона [-3..3]!");
                } else {
                    dataSet[1] = yInput;
                }
            } else {
                valid = false;
                createError(textInput, "*Поле с Y должно содержать 15 цифр после точки!");
            }
        } else {
            valid = false;
            createError(textInput, "*Поле с Y должно быть представлено числом!");
        }
    }else {
        valid = false;
        createError(textInput, "*Поле с Y не должно быть пустым!");
    }
    return valid;
}

function createError(input, text) {
    const parent = input.parentNode.parentNode;
    const errorLabel = document.createElement('label');

    errorLabel.classList.add('error-label');
    errorLabel.textContent = text;
    parent.classList.add('error');
    parent.append(errorLabel);
}

function removeError(input) {
    const parent = input.parentNode.parentNode;

    if (parent.classList.contains('error')) {
        parent.querySelector('.error-label').remove();
        parent.classList.remove('error');
    }
}