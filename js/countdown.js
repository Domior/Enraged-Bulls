function getTimeRemaining(endtime) {
	const total = Date.parse(endtime) - Date.parse(new Date());
	const gmtTimeDiffInHours = new Date().getTimezoneOffset() / 60
	const seconds = Math.floor((total / 1000) % 60);
	const minutes = Math.floor((total / 1000 / 60) % 60);
	const localHours = Math.floor((total / (1000 * 60 * 60)) % 24);
	const hours = localHours - gmtTimeDiffInHours;
	const days = Math.floor(total / (1000 * 60 * 60 * 24));

	return {
		total,
		days,
		hours,
		minutes,
		seconds
	};
}

function initializeClock(id, endtime) {
	const clock = document.getElementById(id);
	const daysSpan = clock.querySelector('.days');
	const hoursSpan = clock.querySelector('.hours');
	const minutesSpan = clock.querySelector('.minutes');
	const secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		const t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date("Jan 30, 2022 13:00:00" ); //set the date here GMT

initializeClock('mint-countdown', deadline);
