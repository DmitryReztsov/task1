const mainWindowWidth = document.documentElement.clientWidth;
const mainWindowHeight = document.documentElement.clientHeight;

// Делаем трапецию для желтого фона
function calculateLeft () {

	const left = document.querySelector(".main-screen__left");
	// задаем размеры рамок элемента, чтобы получилась трапеция 
	// делаем это через js, так как в border не получается указать % величину от блока,
	// тогда берем от размера окна (минус этого подхода- нужно обновлять страницу при просмотре DevTools,
	// если меняем величину окна, иначе все ломается)
	left.style.borderBottom = `${mainWindowHeight}px solid #f4e770`;
	left.style.borderLeft = `${mainWindowWidth*0.8}px solid transparent`;
}

// запускаем при загрузке страницы
calculateLeft ()

// Вешаем обработчик на кнопку
document.querySelector(".main-screen__button").onclick = createWindow;

// создаем новое окно с заготовленной страницей
function createWindow() {

	// указываем параметры нового окна с учетом размеров создающего окна
	let params = `status=no,location=no,toolbar=no,menubar=no,
	width=${getWindowWidth (mainWindowWidth)},height=${mainWindowHeight*0.8},
	left=${mainWindowWidth/2 - mainWindowWidth*0.6/2},top=${mainWindowHeight/2 - mainWindowHeight*0.8/2}`
	let newWindow = window.open("/secondpage.html", "storePage", params);
}

function getWindowWidth (width) {
	let result = width*0.6;
	console.log(result);
	console.log(width);
	if (result < 400) {
		return width
	}
	return result
}