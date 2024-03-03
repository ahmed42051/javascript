// in this file i note down my notes related to js

/*++++++++ math +++++++ */
//formula for setting the range 
const min = 5;
const max = 17;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// Dates

/* JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch). 
Note: TC39 is working on Temporal, a new Date/Time API. Read more about it on the Igalia blog. It is not yet ready for production use! */

/* Component	Local	UTC
Get	Set	Get	Set
Year	getFullYear()	setFullYear()	getUTCFullYear()	setUTCFullYear()
Month	getMonth()	setMonth()	getUTCMonth()	setUTCMonth()
Date (of month)	getDate()	setDate()	getUTCDate()	setUTCDate()
Hours	getHours()	setHours()	getUTCHours()	setUTCHours()
Minutes	getMinutes()	setMinutes()	getUTCMinutes()	setUTCMinutes()
Seconds	getSeconds()	setSeconds()	getUTCSeconds()	setUTCSeconds()
Milliseconds	getMilliseconds()	setMilliseconds()	getUTCMilliseconds()	setUTCMilliseconds()
Day (of week)	getDay()	N/A	getUTCDay()	N/A */

let mydate = new Date();
console.log(mydate.toISOString())
console.log(mydate.toLocaleString('defult', {
  weekday: "long",
  month: "numeric",
  year: "numeric"
}))
console.log(mydate.toDateString())
console.log(mydate.toLocaleTimeString())
console.log(mydate.toJSON())
console.log(mydate.toString())

// quizes and polls design kar nay k leya hum timestamp dekh tay hai

let mytimestamp = new Date()
console.log(mytimestamp) // output comes in milseconds

