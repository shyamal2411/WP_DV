
// Dictionary JSON of 10 students

let Dictionary = [{
        Sem: 1,
        Branch: "Computer Engineering",
        Name: "Shyamal",
        Err: 190010107055,
        Sub: "DSA",
        Marks: "9.24"
    },
    {
        Sem: 2,
        Branch: "Automobile",
        Name: "Manav",
        Err: 190010107070,
        Sub: "ADA",
        Marks: 8.91
    },
    {
        Sem: 3,
        Branch: "Information Technology",
        Name: "Drashti",
        Err: 190010107024,
        Sub: "Web Dev",
        Marks: 9.80
    },
    {
        Sem: 4,
        Branch: "Computer Engineering",
        Name: "Vrushti",
        Err: 190010107064,
        Sub: "Data Science",
        Marks: 10.00
    },
    {
        Sem: 5,
        Branch: "Information Technology",
        Name: "Nensi",
        Err: 190010107089,
        Sub: "Python",
        Marks: 8.51
    },
    {
        Sem: 6,
        Branch: "Information Technology",
        Name: "Henil",
        Err: 190010107079,
        Sub: "Web Dev",
        Marks: 9.00
    },
    {
        Sem: 7,
        Branch: "Information Technology",
        Name: "Radha",
        Err: 190010107012,
        Sub: "AI",
        Marks: 7.15
    },
    {
        Sem: 8,
        Branch: "Automobile",
        Name: "Khushi",
        Err: 190010107088,
        Sub: "Advance Java",
        Marks: 6.86
    },
    {
        Sem: 4,
        Branch: "Information Technology",
        Name: "Karan",
        Err: 190010107054,
        Sub: "Git-GitHub",
        Marks: 7.23
    },
    {
        Sem: 2,
        Branch: "Computer Engineering",
        Name: "Harsh",
        Err: 190010107042,
        Sub: "Competitive Programming",
        Marks: 9.52
    }
];

let table = document.getElementById("Search");


function getEr() {
// console.log(Dictionary);
    let findEle = table.value; // get the value of the input
    for (let i = 0; i < Dictionary.length; i++) {

        // finding in dictionary based on the enrolment number, so converting ER into string
        // when element found, display whole data of that index
        if (Dictionary[i].Err.toString() === findEle) {
            document.getElementById("tableContents").rows[1].cells[0].innerHTML = Dictionary[i].Name;
            document.getElementById("tableContents").rows[1].cells[1].innerHTML = Dictionary[i].Err;
            document.getElementById("tableContents").rows[1].cells[2].innerHTML = Dictionary[i].Branch;
            document.getElementById("tableContents").rows[1].cells[3].innerHTML = Dictionary[i].Sub;
            document.getElementById("tableContents").rows[1].cells[4].innerHTML = Dictionary[i].Marks;
            document.getElementById("tableContents").rows[1].cells[5].innerHTML = Dictionary[i].Sem;
            break;
        }
    }
}
// Uncaught TypeError: can't access property "toString", Dictionary[i].er is undefined