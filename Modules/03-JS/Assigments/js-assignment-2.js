function calculateAge(date) {
    var convertDateString = date.split('/')
    // console.log(convertDateString)
    var monthOfBirth = convertDateString[1]
    // console.log(monthOfBirth)
    var yearOfBirth = convertDateString[2]
    // console.log(yearOfBirth)
    var today = new Date();
    // console.log(today);
    var currentMonth = today.getMonth() + 1
    // console.log(currentMonth)
    var thisYear = today.getFullYear()
    // console.log(thisYear)

    var age = thisYear - yearOfBirth;

    if (monthOfBirth > currentMonth) {
        age -= 1
    }

    return age;

}
console.log(calculateAge("20/7/2002"))
console.log(calculateAge("1/1/1979"))
console.log(calculateAge("20/6/2002"))