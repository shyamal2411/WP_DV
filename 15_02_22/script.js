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

document.write("<table border = 4 cellspacing = 0 align = center>");
document.write("<tr>");
document.write("<td rowspan=2>"+"Image"+"</td>")
document.write("<td rowspan=2>"+"Brand"+"</td>")
document.write("<td rowspan=2>"+"Model"+"</td>")
document.write("<td rowspan=2>"+"OS"+"</td>")
document.write("<td rowspan=2>"+"Price"+"</td>")
document.write("</tr>");

document.write()
document.write("</table>")

for(i=0;i<log.length;i++){
    document.write("<img src="+log[i].imgLocation + "/>");
    document.write("<td>"+log[i].Id+"</td>");
    document.write("<td>"+log[i].ItemId+"</td>");
    document.write("<td>"+log[i].ItemName+"</td>");
    document.write("<td>"+log[i].Price+"</td>");
   }
   document.write("</table>"+"<br><br>")
