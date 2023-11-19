function handleRequest(x, y, r){
    const url = '../php/check.php?x-input=' + x + '&y-input=' + y + '&r-input=' + r;
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if (xhr.status === 200){
                console.log("Запрос успешно обработан!");
                const data = xhr.responseText.split(" ");
                if(data[3] === "Ошибка!"){
                    alert("Произошла ошибка при вводе данных!");
                }
                else{
                    addResultToTable(data);
                }
            }
            else{
                console.log("Запрос обработан некорректно!\n" + xhr.readyState + "\n" + xhr.responseText);
            }
        }
    };
    xhr.send(null);
}