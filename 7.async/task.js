function Alarm(time, callback, id) {
	this.time = time;
	this.callback = callback;
	this.id = id;
}

class AlarmClock {

	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id) {
		if (id === undefined) {
			throw new Error('id не передан');			
		} 

		function isItExist(item) {
			if (item.id === id) {
				const alarmError = new Error(`Такой Будильник уже есть`);
				throw (alarmError);
		}
		}

		try { this.alarmCollection.forEach((item) => isItExist(item));
		} catch (alarmError) {
			return console.error(`Такой Будильник уже есть`);
		}

	    this.alarmCollection.push(new Alarm(time, callback, id));
	}
	

	removeClock(id) {

		function isIt(array) {
				return array.id === id
		}

		let indexOfDeletion = this.alarmCollection.findIndex(isIt);
		if (indexOfDeletion !== -1) {
			this.alarmCollection.splice(indexOfDeletion, 1);
		} else {
			console.log(`Будильник не существует или был удален!`)
		}

	}

	getCurrentFormattedTime() {
		let date = new Date ();
		const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    	const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
		return `${hours}:${minutes}`
	}

	start() {

		function checkClock(alarm) {

			if (alarm.time === this.getCurrentFormattedTime()) {
				alarm.callback();
			}
		}

		let checkClockBound = checkClock.bind(this);

		if (this.timerId === null || this.timerId === undefined) {

			function forInterval (alarm) {
				return this.alarmCollection.forEach((alarm) => checkClockBound(alarm));
			}

			let forIntervalbound = forInterval.bind(this);

			this.timerId = setInterval(forIntervalbound, 60000);
		}
	}

	stop() {

		if (this.timerId || this.timerId !== undefined) {
			clearInterval(this.timerId);
			this.timerId = null;
		}

	}

	printAlarms() {
		return this.alarmCollection.forEach((alarm) => console.log(`Будильник №${alarm.id} прозвенит в ${alarm.time}`))
	}

	

	clearAlarms() {
		clearInterval(this.timerId);
		this.alarmCollection = [];
	}
}