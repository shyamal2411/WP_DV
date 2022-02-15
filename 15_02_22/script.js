var items = [{
    "Id":"1",
    "ItemId": "Android",
    "ItemName": "Samsung",
    "Price": "13000",
    "imgLocation": "./img/img1.jpg"
},
{
    "Id":"2",
    "ItemId": "Android",
    "ItemName": "Samsung",
    "Price": "13500",
    "imgLocation": "./img/img2.jpg"
},
{
    "Id":"3",
    "ItemId": "iPhone",
    "ItemName": "Samsung",
    "Price": "20000",
    "imgLocation": "./img/img3.jpg"
},
{
    "Id":"4",
    "ItemId": "Android",
    "ItemName": "3137908",
    "Price": "40000",
    "imgLocation": "./img/img4jpg"
},
{
    "Id":"5",
    "ItemId": "Android",
    "ItemName": "Samsung",
    "Price": "8500",
    "imgLocation": "./img/img5.jpg"
},
{
    "Id":"6",
    "ItemId": "iPhone",
    "ItemName": "iphone13",
    "Price": "9000",
    "imgLocation": "./img/img6.jpg"
},
{
    "Id":"7",
    "ItemId": "Iphone",
    "ItemName": "iphone11",
    "Price": "89000",
    "imgLocation": "./img/img7.jpg"
},
{
    "Id":"8",
    "ItemId": "Android",
    "ItemName": "iphone10",
    "Price": "BC",
    "imgLocation": "./img/img8.jpg"
}
]

var categ = JSON.stringify(items)
var log = JSON.parse(categ)

var i = 0;

// document.write("<table border = 1 cellspacing = 0 align = center>");
// document.write("<tr>");
// document.write("<td rowspan=2>" + "Smartphone" + "</td");
// document.write("</tr>");


for(i=0;i<log.length;i++){
    document.write(log[i].Id);
    document.write(log[i].ItemId);
   document.write(log[i].ItemName);
   document.write(log[i].Price);

}