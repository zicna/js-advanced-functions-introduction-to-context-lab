// Your code here

function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
}

function createEmployeeRecords(arrayOfArrays) {
  let employeeRecords = [];
  arrayOfArrays.forEach((element) => {
    employeeRecords.push(createEmployeeRecord(element));
  });
  return employeeRecords;
}

function createTimeInEvent(employeeRecord, timeIn) {
    const date = timeIn.split(" ")[0]
    const hour = parseInt(timeIn.split(" ")[1])
    const newEvent = {
        type:"TimeIn",
        date: date,
        hour: hour 
    };
  employeeRecord.timeInEvents.push(newEvent);
  return employeeRecord;
}

function createTimeOutEvent(employeeRecord, timeOut ){
    const date = timeOut.split(" ")[0];  
    const hour = parseInt(timeOut.split(" ")[1]);
    const newEvent = {
        type: "TimeOut",
        date: date,
        hour: hour
    }
    employeeRecord.timeOutEvents.push(newEvent)
    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, date){

    let timeIn = 0;
    let timeOut = 0;

    for(let i = 0; i < employeeRecord.timeInEvents.length; i ++){
        if (employeeRecord.timeInEvents[i].date === date){
            timeIn = employeeRecord.timeInEvents[i].hour
        }
        if (employeeRecord.timeOutEvents[i].date === date){
            timeOut = employeeRecord.timeOutEvents[i].hour
        }
    }
    return (parseInt(timeOut) - parseInt(timeIn)) / 100
}

function wagesEarnedOnDate(employeeRecord, date){
    return hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
}

function allWagesFor(employeeRecord){
    let dates = employeeRecord.timeInEvents.map(element => element.date)
    let wagesPerDay = dates.map(date => {
        return wagesEarnedOnDate(employeeRecord, date)
    })
   return wagesPerDay.reduce((agg, current) => agg +=current)
}

function calculatePayroll(arrayOfEmployees){
    let arrayOfWages = []
    arrayOfEmployees.forEach(element => {
        arrayOfWages.push(allWagesFor(element))
    })
    return arrayOfWages.reduce((agg, curr) => agg += curr)
    }

    function findEmployeeByFirstName(scrArray, name) {
       const employee = scrArray.find((e) => {
           return e.firstName === name
       })
       return employee
    }

    // const result = inventory.find( ({ name }) => name === 'cherries' );



