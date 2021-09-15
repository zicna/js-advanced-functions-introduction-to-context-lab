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

function hoursWorkedOnDate(employeeRecord){
    return parseInt(employeeRecord.timeOutEvents[0].hour - employeeRecord.timeInEvents[0].hour) / 100
}

function wagesEarnedOnDate(employeeRecord){
    return hoursWorkedOnDate(employeeRecord) * employeeRecord.payPerHour
}

function allWagesFor(employeeRecord){

    // const daysWorked = employeeRecord.timeInEvents.length
    // let totlaWages = 0;
    // for(let i = 0; i < daysWorked; i++){
    //    totlaWages +=  wagesEarnedOnDate(employeeRecord, employeeRecord.timeOutEvents[i].date)
    // }
    // return totlaWages -270
    let wagesPerday = []
    employeeRecord.forEach(e => {
        wagesPerday.push(wagesEarnedOnDate(e))
    })
    return wagesPerday.reduce((agg, curr) => agg +=curr)
    // return totlaWages
}