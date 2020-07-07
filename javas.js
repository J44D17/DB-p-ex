$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
            type: "GET",
            uri: 'CategoryService/FindAll',
            dataType: 'aplication/json',
            // data: "{name:'tipo1', }",
            success: function (result) {
                var table = document.getElementById("myTable");
                $.each(result, function(i, obj) { //obj es la lista de arreglo por cada indice: [{"id":"856","name","India"),...
                    //use obj.id and obj.name here, for example:
                    alert(obj.name);
                    var row = table.insertRow(0);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell2 = row.insertCell(2);
                    cell1.innerHTML = obj.id;
                    cell2.innerHTML = obj.name;
                    cell3.innerHTML = obj.description;
                });
            }
        });
    });
});