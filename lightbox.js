const details = document.querySelectorAll(".avatar__image img");
details.forEach((item) => item.addEventListener("click", showInfo));
// set thong tin cho nhan vien
var trung = {
	img: "/img/staff/phamductrung.jpg",
	name: "Pham Duc Trung",
	age: 26,
	position: "Fullstack Developer",
	phone: "0123 xxx xxx",
	qoute: "Make the pressure to be motivation, don't let them drown you ",
};
var tue = {
	img: "/img/staff/nguyenhoangtue.jpg",
	name: "Nguyen Hoang Tue",
	age: 25,
	position: "Fullstack Developer",
	phone: "0123 yyy yyy",
	qoute:
		"Find three hobbies you love: one to make you money, one to keep you in shape, and the last one to be creative",
};
var duc = {
	img: "/img/staff/linhtheduc.jpg",
	name: "Linh The Duc",
	age: 24,
	position: "Android/Ios developer",
	phone: "0123 aaa aaa",
	qoute: "In order to SUCCEED, we must believe that we can",
};
var duy = {
	img: "/img/staff//nguyenthanhduy.jpg",
	name: "Nguyen Thanh Duy",
	age: 24,
	position: "Trainee",
	phone: "0123 bbb bbb",
	qoute:
		"When you think it's too late for something new, it's time to start it",
};
var dung = {
	img: "/img/staff/nguyenkhacdung.jpg",
	name: "Nguyen Khac Dung",
	age: 21,
	position: "Part-time",
	phone: "0123 ccc ccc",
	qoute:
		"Over-thinking ruins you. Ruins the situation, twists things around, makes you worry and just makes everything much worse than it actually is",
};

const staffs = [trung, tue, duc, duy, dung];

function showInfo(event) {
	console.log(event.target);

	const staffIndex = event.target.getAttribute("index");
	const staffImage = staffs[staffIndex].img;
	const staffName = staffs[staffIndex].name;
	const staffAge = staffs[staffIndex].age;
	const staffPos = staffs[staffIndex].position;
	const staffPhone = staffs[staffIndex].phone;
	const staffQuote = staffs[staffIndex].qoute;
	// test
	// console.log(staffName);
	// console.log(staffAge);
	// console.log(staffPos);
	// console.log(staffPhone);
	// console.log(staffQuote);
	const content = `<div class="lightbox">

	<div class="lightbox__content">
		<img src="${staffImage}" alt="" />
		<div class="text">
			<h3>Name: ${staffName}</h3>
			<p>Age: ${staffAge}</p>
			<p>Position: ${staffPos}</p>
			<p>Phone: ${staffPhone}</p>
			<p>
				Quote:${staffQuote} 
			</p>
		</div>
	</div>
 

</div>`;
	document.body.insertAdjacentHTML("beforeend", content);
}

document.body.addEventListener("click", function (hide) {
	const lightImage = document.querySelector(".lightbox__content img");

	if (hide.target.matches(".lightbox")) {
		// remove lightbox out of DOM
		hide.target.parentNode.removeChild(hide.target);
	}
});
