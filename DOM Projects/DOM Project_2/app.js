//Listen for submit
document.getElementById('loan-form').addEventListener('submit' , function(e){
   //Hide Result
   document.getElementById('results').style.display='none';
   setTimeout(calculateResults, 2000);
    e.preventDefault();
});

//Calculate Results
function calculateResults() {
    console.log('Calculating..');

    //UI Vars
    const UIamount = document.getElementById('amount');
    const UIinterest = document.getElementById('interest');
    const UIyears = document.getElementById('years');
    const UImontlypayment = document.getElementById('monthly-payment');
    const UItotalpayment = document.getElementById('total-payment');
    const UItotalinterest = document.getElementById('total-interest');

    const principal = parseFloat(UIamount.value);
    const calculatedInterest = parseFloat(UIinterest.value)/100/12;
    const calculatedPayment = parseFloat(UIyears.value)*12;

    //Compute monthly payment
    const x = Math.pow(1+calculatedInterest,calculatedPayment);
    const monthly=(principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        UImontlypayment.value = monthly.toFixed(2);
        UItotalpayment.value = (monthly *calculatedPayment).toFixed(2);
        UItotalinterest.value = ((monthly*calculatedPayment)-principal).toFixed(2);
        //Show Results
        document.getElementById('results').style.display='block';
    } else {
        showError('Please Check your numbers');
    }
}

//Show Error
function showError(error) {
     //Hide Results
     document.getElementById('results').style.display='none';
    // Cfreate div
    const errorDiv = document.createElement('div');
    //Get Elemnet
     const card = document.querySelector('.card');
     const heading = document.querySelector('.heading');
    //Add class
    errorDiv.className = 'alert alert-danger';

    //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above heading
    card.insertBefore(errorDiv,heading);

    //Hide Results
    document.getElementById('results').style.display='none';
    //clear Error after 3 sec
    setTimeout(clearError, 3000);

}

//Clear Error
function clearError() {
    document.querySelector('.alert').remove();
}