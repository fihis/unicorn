window.onload = function () {
    let rows = [];
    let table = document.getElementById('grid');
    let tHeader = table.tHead.querySelectorAll('th');
    let tableArray = table.querySelectorAll('tr');
    for (let i = 0; i < tableArray.length - 1; i++) {
        rows[i] = [];
        for (let j = 0; j < tableArray[i + 1].children.length; j++) {
            if (tHeader[j].getAttribute('data-type') === 'number') {
                rows[i][j] = +tableArray[i + 1].children[j].innerText;
            }
            else {
                rows[i][j] = tableArray[i + 1].children[j].innerText;
            }
        }
        
    }
    table.tHead.addEventListener('click', (e) => {
        tHeader.forEach((element, index) => {
            if (e.target === tHeader[index]) {
                for (let i = 0; i < rows.length - 1; i++) {
                    for (let j = 0; j < rows.length - 1 - i; j++) {
                        if (rows[j][index] > rows[j + 1][index]) {
                            [rows[j], rows[j + 1]] = [rows[j + 1], rows[j]];
                        };
                    }
                }
            }
        }
        );
        rows.forEach( (element, index) => {
            table.deleteRow(1);
            let curRow = table.insertRow(-1);
            rows[index].forEach ((cell, cellIndex) => {
                let curCell = curRow.insertCell(cellIndex);
                curCell.innerText = rows[index][cellIndex];
            }
            );
        }
        );
    });
}
