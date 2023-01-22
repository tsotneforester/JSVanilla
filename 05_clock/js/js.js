"use strict";
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const weekDay = document.querySelector(".weekday");
const yearweek = document.querySelector(".yearweek");
const yearday = document.querySelector(".yearday");
const monthday = document.querySelector(".monthday");
const month = document.querySelector(".month");
const minarrow = document.querySelector(".minarrow");
const hrarrow = document.querySelector(".hrarrow");
const secarrow = document.querySelector(".secarrow");
const weekDayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthList = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

function myFunction() {
  let newDate = new Date();
  let newWeekDay = weekDayList[newDate.getDay()];
  weekDay.innerHTML = newWeekDay;

  let newMonth = monthList[newDate.getMonth()];
  month.innerHTML = newMonth;

  var oneJan = new Date(newDate.getFullYear(), 0, 1);
  var numberOfDays = Math.floor((newDate - oneJan) / (24 * 60 * 60 * 1000));
  var newYearWeek = Math.ceil(numberOfDays / 7);
  console.log(`The week number of the current date  is ${newYearWeek}.`);
  yearweek.innerHTML = newYearWeek; //width of div important to align to right

  var newYearDay = Math.floor((newDate - oneJan) / (24 * 60 * 60 * 1000) + 1);
  console.log(`The week number of the current date  is ${newYearDay}.`);
  yearday.innerHTML = newYearDay; //width of div important to align to right

  let newMonthDay = newDate.getDate();
  monthday.innerHTML = newMonthDay;

  let newHour = newDate.getHours();
  if (newHour < 10) {
    newHour = `0${newHour}`;
  }
  hour.innerHTML = newHour;

  let newMin = newDate.getMinutes();

  if (newMin < 10) {
    newMin = `0${newMin}`;
  }
  minute.innerHTML = newMin;

  let newSec = newDate.getSeconds();

  if (newSec < 10) {
    newSec = `0${newSec}`;
  }
  second.innerHTML = newSec;

  setTimeout(myFunction, 1000);

  const division = newMin / 60;

  // hrarrow.style.transform = "rotate(" + newSec * 6 + "deg)";
  // minarrow.style.transform = "rotate(" + newSec * 6 + "deg)";
  secarrow.style.transform = "rotate(" + newSec * 6 + "deg)";
  minarrow.style.transform = "rotate(" + newMin * 6 + "deg)";
  hrarrow.style.transform = "rotate(" + (newHour * 30 + 30 * division) + "deg)";
}

myFunction();
