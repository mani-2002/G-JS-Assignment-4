function loadData(){
    var storedData = localStorage.getItem("studentsData");
    if(storedData){
        var students = JSON.parse(storedData);
        var i=1;

        for (let stud in students) {
            var student = students[stud];
            var row = document.createElement("div");
            row.classList.add("row");
        
            if (i % 2 == 0) {
                row.classList.add("even");
            } else {
                row.classList.add("odd");
            }
            i=i+1;
            var cell1 = document.createElement("span");
            cell1.classList.add("cell");
            cell1.innerHTML = `${student["firstname"]} ${student["lastname"]}`;
            row.appendChild(cell1);
        
            var cell2 = document.createElement("span");
            cell2.classList.add("cell");
            cell2.innerHTML = `${student["age"]}`;
            row.appendChild(cell2);
        
            var cell3 = document.createElement("span");
            cell3.classList.add("cell");
            cell3.innerHTML = `${student["mobile"]}`;
            row.appendChild(cell3);
        
            var cell4 = document.createElement("span");
            cell4.classList.add("cell");
            cell4.innerHTML = `${stud}`;
            row.appendChild(cell4);
        
            var cell5 = document.createElement("span");
            cell5.classList.add("cell");
            cell5.innerHTML = `${student["city"]}`;
            row.appendChild(cell5);
        
            table.appendChild(row);
    }
    }else{

        var students={
            "manikantavinjamuri8522@gmail.com":{
                "firstname":"Manikanta",
                "lastname":"Vinjamuri",
                "mobile":"8522845343",
                "age":20,
                "city":"Nalgonda"
            },
            "ramavatharyadavkanneboina@gmail.com":{
                "firstname":"Ramavathar",
                "lastname":"Kanneboina",
                "mobile":"6281184748",
                "age":20,
                "city":"Warangal"
            },
            "shivamalga20@gmail.com":{
                "firstname":"Shivashankar",
                "lastname":"Malga",
                "mobile":"9100579163",
                "age":21,
                "city":"Hyderabad"
            },
            "arvinddyno15@gmail.com":{
                "firstname":"Arvind",
                "lastname":"Kola",
                "mobile":"9100735057",
                "age":21,
                "city":"Jagityal"
            },
        };

        localStorage.setItem("studentsData", JSON.stringify(students));
    }
}

loadData();
