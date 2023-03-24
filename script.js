function Total(){
const eng=parseInt(document.getElementById("english").value);
const math=parseInt(document.getElementById("math").value);
const phy=parseInt(document.getElementById("physics").value);
const chem=parseInt(document.getElementById("chemistry").value);
const comp=parseInt(document.getElementById("computer").value);

if(eng>100||math>100||phy>100||chem>100||comp>100){
    alert("Please enter marks in range of 100")
}
else {
    let total = eng+math+phy+chem+comp;
    console.log(total);
    document.getElementById("total").innerHTML="Total marks: "+total;

    let avg= total/5;
    document.getElementById("average").innerHTML="Your average marks are: "+avg;

    if(eng<=35||math<=35||phy<=35||chem<=35||comp<=35)
    {
        document.getElementById("grade").innerHTML="You got F Grade";
    }

    if(avg>90){
        document.getElementById("grade").innerHTML= "You got A Grade";
    }
    if(avg>=80 && avg<=89){
        document.getElementById("grade").innerHTML= "You got B Grade";
    }
    if(avg>=70 && avg<=79){
        document.getElementById("grade").innerHTML= "You got C Grade";
    }
    if(avg>=60 && avg<=69){
        document.getElementById("grade").innerHTML= "You got D Grade";
    }
    if(avg<60){
        document.getElementById("grade").innerHTML= "You got F Grade";
    }
    if(eng<=35||math<=35||phy<=35||chem<=35||comp<=35)
    {
        document.getElementById("grade").innerHTML="You got F Grade";
    }
    if(eng==null || math==null || phy==null || chem==null || comp==null)
    {
        document.getElementById("grade").innerHTML="You got F grade";
    }
}
}

