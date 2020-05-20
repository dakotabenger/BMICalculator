function bmi(){

    var sheight=parseFloat(document.getElementById('hgt').value);
    var sweight=parseFloat(document.getElementById('wgt').value);
    var bmi=(sweight * 703)/Math.pow(sheight,2);
    var person_bmi=document.getElementById('bmi_index');
    person_bmi.textContent=bmi.toFixed(2);
    var bodyType=document.getElementById('body_type');
    if (bmi < 18.5) {
        bodyType.textContent="Underweight" 
    } else if (bmi > 18.5 && bmi < 25.0 ) {
        bodyType.textContent="Normal Weight"
    } else if (bmi > 25 && bmi < 30){
        bodyType.textContent="Overweight"
    } else {
        bodyType.textContent="Obese"
    }

    }
    
    