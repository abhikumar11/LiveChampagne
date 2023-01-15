const quote=document.getElementById('quote');
const btn=document.getElementById('btn');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6302518dbfmsh375517def97e41cp15969ajsn06f7aca04603',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

const fetchData = () => {
    fetch('https://famous-quotes4.p.rapidapi.com/random?category=finance&count=1', options)
	.then(response => response.json())
	.then(response => quote.innerHTML=(response[0].text))
};
fetchData();
btn.addEventListener("click",fetchData);