enum DaysOfTheWeek{
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
}

let day : DaysOfTheWeek;
day = DaysOfTheWeek.MONDAY;
console.log(day);

if(day === DaysOfTheWeek.MONDAY){
    console.log("Gotta Work");
}