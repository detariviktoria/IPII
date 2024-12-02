//console.log("kapcsolat");

function randint(a, b) {
    return Math.floor(Math.random() * (b-a+1)) + a;
}

const button = document.querySelector("#buttonGenerate");
button.addEventListener("click",TableGenerate);

function TableGenerate(){
    //adatok
    const row = document.getElementById("rowInput").value;
    const col = document.getElementById("columnInput").value;

    //tablamegjelenítés - tábla visszaadása

    const table = ShowTable(row, col);

    //mibe generálja
    const div = document.getElementById("tableDiv");
    div.innerHTML = "";
    div.appendChild(table);
}

function ShowTable(row, col)
{
    const table = document.createElement("table"); 
    for(let i = 0; i<row; i++)
    {
        const tr = document.createElement("tr");
        for(let j = 0; j<col;j++)
        {
            const td = document.createElement("td");
            td.innerHTML = Numbers();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

function Numbers()
{
    return randint(0,255) + "," + randint(0,255) + "," + randint(0,256);
}


function CellsColor(e)
{
    const td = e.Target;
    if(!td.matches("td")) return;
    td.style.backgroundColor = "rgb(" + td.value + ")";
}

window.addEventListener("click", CellsColor);