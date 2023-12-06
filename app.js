var math = +prompt('enter your math mark')
var eng = +prompt('enter your eng mark')
var isl = +prompt('enter your isl mark')
var phy = +prompt('enter your phy mark')
var urdu = +prompt('enter your urdu mark')
var total = math + eng + isl + phy + urdu
var perc = (total / 500)*100
var grade;
if(perc >= 80 && perc <= 101){
    grade = 'A+'
}
else if(perc >= 70){
    grade= 'A'
}
else if(perc =60) {
    grade ='B'
}
else if(perc =50) {
    grade ='C'
}
else if(perc = 40) {
    grade ='B'
}
else{
    grade = 'F'
}
document.write(

    `<table border ='2px '> 
    <tr>
    <th>Math</th>
    <th>English</th>
    <th>Islamiat</th>
    <th>Physics</th>
    <th>Urdu</th>
    <th>Percentage</th>
    <th>Grade</th>
    </tr>
    <tr>
    <td>${math}</td>
    <td>${eng}</td>
    <td>${isl}</td>
    <td>${phy}</td>
    <td>${urdu}</td>
    <td>${perc.toFixed(2)}</td>
    <td>${grade}</td>
    
    
    
    
    
    </tr>
    </table>`
)