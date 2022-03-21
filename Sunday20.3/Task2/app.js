let num = prompt("Enter the number of the day (1-7)");
let num_of_day = Number(num);

switch (num_of_day) {
    case 1:
        day = "sunday";
        break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
         day = "Wednesday";
        break;
    case 5:
         day = "Thursday";
        break;
    case 6:
         day = "Friday";
        break;
    case 7:
         day = "Saturday";
        break;
}

document.getElementById("day_name").innerHTML = "Today is "+day;
