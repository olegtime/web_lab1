window.addEventListener("load", function (){
    function setActiveButton(button){
        button.onclick = function (){
            window.buttonInput = this.value;
            allButtonsInputs.forEach(function (button){
                button.style.background = "white";
                button.style.border = "1px black solid";
                button.style.borderRadius = "5px";
                button.style.boxShadow = "";
                button.style.transform = "";
            });
            this.style.background = "#ff447d";
            this.style.boxShadow = "0 0 20px #E40045";
            this.style.transform = "scale(1.1)";
            this.style.transition = "0.3s";
        }
    }
    let allButtonsInputs = document.querySelectorAll("#data-input-form-id input[type=button]");
    allButtonsInputs.forEach(setActiveButton);
});