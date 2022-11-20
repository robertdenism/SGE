
        const cors ='https://cors-anywhere.herokuapp.com/'
        const yourUrl =cors+'https://nodejs-mysql-restapi-production-d8bd.up.railway.app/api/employees/';


        function aniadir (){
            var nombre = document.getElementById("inNombre").value;
            var salario = document.getElementById("inSalario").value;

            if(nombre==null){
                console.log("error");
                window.prompt("Nombre o salario vacios");
            }else{
                const data ={
                    name:nombre,
                    salary:salario
                }
            
                fetch(yourUrl, {method:'POST', body: JSON.stringify(data), headers:{'Content-Type': 'application/json'}})
                .then(response => response.json())
                .then(datos => console.log(datos));  
            }
        }
            
            
           
        

        function editar() {
            var id = document.getElementById("inId").value;
            var nombre = document.getElementById("inNombre").value;
            var salario = document.getElementById("inSalario").value;
                const data ={
                    name:nombre,
                    salary:salario
                }
            
                fetch(yourUrl+id, {method:'PATCH', body: JSON.stringify(data), headers:{'Content-Type': 'application/json'}})
                .then(response => response.json())
                .then(datos => console.log(datos));
            
            }

        function eliminar() {
            var catchId = document.getElementById("inId").value;
            fetch(yourUrl+catchId,{method:'DELETE'})
                .then(response => response.json())
                .then(datos => (datos));


        }

        function findId() {
            var catchId = document.getElementById("inId").value;
            fetch(yourUrl+catchId)
                .then(response => response.json())
                .then(datos => tabla2(datos));
                console.log(catchId);
            

        }

        function findAll() {
            fetch(yourUrl)
                .then(response => response.json())
                .then(datos => tabla(datos));

        }
        
        function tabla(datos){
            contenido.innerHTML = '';
            for(let valor of datos){
                contenido.innerHTML += `

                    <tr>
                        <td>${valor.id}</td>
                        <td>${valor.name}</td>
                        <td>${valor.salary}</td>
                    </tr>
                `
            }
        }
        
        function tabla2(datos){
            contenido.innerHTML = '';
            contenido.innerHTML += `

                    <tr>
                        <td>${datos.id}</td>
                        <td>${datos.name}</td>
                        <td>${datos.salary}</td>
                    </tr>
                `
        }

