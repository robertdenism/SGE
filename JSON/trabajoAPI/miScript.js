
const cors = 'https://cors-anywhere.herokuapp.com/'
const yourUrl = cors + 'https://nodejs-mysql-restapi-production-d8bd.up.railway.app/api/employees/';


function aniadir() {
    let entrada = document.getElementsByTagName('input');

    var nombreB = true;
    var salarioB = true;

    if (entrada[0].value.length < 5 || entrada[0].value.length > 40) {
        window.alert("Minimo 5 carácteres y max 40");
        nombreB = false;
    } else if (entrada[1].value.length == 0 || entrada[1].value.length > 99999) {
        window.alert("Introduzca un sueldo válido");
        salarioB = false;
    }
    if (nombreB == true && salarioB == true) {
        var nombre = document.getElementById("inNombre").value;
        var salario = document.getElementById("inSalario").value;
        const data = {
            name: nombre,
            salary: salario
        }

        fetch(yourUrl, { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(datos => console.log(datos));
    }
}




function editar() {

    var id = document.getElementById("inId").value;
    var nombre = document.getElementById("inNombre").value;
    var salario = document.getElementById("inSalario").value;
    const data = {
        name: nombre,
        salary: salario
    }

    fetch(yourUrl + id, { method: 'PATCH', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
        .then(response => response.json())
        .then(datos => console.log(datos));


}

function eliminar() {
    var catchId = document.getElementById("inId").value;
    fetch(yourUrl + catchId, { method: 'DELETE' })
        .then(response => response.json())
        .then(datos => (datos));
}

function findId() {
    var catchId = document.getElementById("inId").value;
    fetch(yourUrl + catchId)
        .then(response => response.json())
        .then(datos => tabla2(datos));
}

function findAll() {
    fetch(yourUrl)
        .then(response => response.json())
        .then(datos => tabla(datos));
}

function tabla(datos) {
    contenido.innerHTML = '';
    for (let valor of datos) {
        contenido.innerHTML += `

                    <tr>
                        <td><a href="Empleado.html?ID=${valor.id}">${valor.id}</a></td>
                        <td>${valor.name}</td>
                        <td>${valor.salary}</td>
                    </tr>
                `
    }
}



function tabla2(datos) {
    contenido.innerHTML = '';
    contenido.innerHTML += `

                    <tr>
                        <td>${datos.id}</td>
                        <td>${datos.name}</td>
                        <td>${datos.salary}</td>
                    </tr>
                `
}

function add2() {
    let entrada = document.getElementsByTagName('input');

    var nombreB = true;
    var salarioB = true;

    if (entrada[0].value.length < 5 || entrada[0].value.length > 40) {
        window.alert("Minimo 5 carácteres y max 40");
        nombreB = false;
    } else if (entrada[1].value.length == 0 || entrada[1].value.length > 99999) {
        window.alert("Introduzca un sueldo válido");
        salarioB = false;
    }


}

function subir(){
    document.getElementById("jsonfileinput").addEventListener("change", function () {
        var file_to_read = document.getElementById("jsonfileinput").files[0];
        var fileread = new FileReader();
        fileread.onload = function (e) {
            var content = e.target.result;
            var intern = JSON.parse(content); // parse json 
            console.log(intern); // You can index every object
            for(let i=0;i<intern.length;i++){
                fetch(yourUrl, { method: 'POST', body: JSON.stringify(intern[i]), headers: { 'Content-Type': 'application/json' } })
                .then(response => response.json())
            }
        };
        fileread.readAsText(file_to_read);
    });
}



