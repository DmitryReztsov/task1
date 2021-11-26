let mainWindowWidth = document.documentElement.clientWidth;
let mainWindowHeight = document.documentElement.clientHeight;

// Делаем трапецию для желтого фона
function calculateLeft() {

	const left = document.querySelector(".main-screen__left");
	// задаем размеры рамок элемента, чтобы получилась трапеция 
	// делаем это через js, так как в border не получается указать % величину от блока,
	
	left.style.borderBottom = `${mainWindowHeight}px solid #f4e770`;
	left.style.borderLeft = `${mainWindowWidth * 0.8}px solid transparent`;
}

// запускаем при загрузке страницы
calculateLeft()

// Если меняется размер окна, используем событие resize для правильного рендеринга фона
window.onresize = () => {
	
	mainWindowWidth = document.documentElement.clientWidth;
	mainWindowHeight = document.documentElement.clientHeight;
	
	calculateLeft()
}

// Вешаем обработчик на кнопку
document.querySelector(".main-screen__button").onclick = createWindow;

// создаем функцию для открытия нового окна с заготовленной страницей
function createWindow() {

	// указываем параметры нового окна с учетом размеров создающего окна
	let params = `status=no,location=no,toolbar=no,menubar=no,
	width=${mainWindowWidth * 0.6},height=${mainWindowHeight * 0.8},
	left=${mainWindowWidth / 2 - mainWindowWidth * 0.6 / 2},top=${mainWindowHeight / 2 - mainWindowHeight * 0.8 / 2}`
	let newWindow = window.open("./secondpage.html", "storePage", params);
}

