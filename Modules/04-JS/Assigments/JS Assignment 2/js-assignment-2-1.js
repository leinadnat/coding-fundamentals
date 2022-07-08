function calculateAge(dateInput) {
    dateInput = dateInput.split('/');
    console.log(dateInput);
    var currentDate = new Date();
    console.log(currentDate);
    var currentYear = currentDate.getFullYear();
    console.log(currentYear);
    
}
console.log(calculateAge('04/10/2001'))