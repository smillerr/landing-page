const API = 'https://youtube138.p.rapidapi.com/search/?q=RLCS';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b9da7d49cmsheb2707f0a3114d8p188a19jsn17527c3cf883',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
const content = null || document.querySelector('#content');

async function fetchData (urlApi) {
    const response = await fetch(urlApi,options);
    const data = await response.json();
    return data
}

(async () => {
    try{
        const results = await fetchData(API);
        let view = `
        ${results.contents.map(result => `
        <a href="https://www.youtube.com/watch?v=${result?.video?.videoId}" target="_blank"> 
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                
                    <img src="${result?.video?.thumbnails[0]?.url}" alt="${result?.video?.descriptionSnippet}" class="w-full">
                
            </div>
            <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${result?.video?.title}
            </h3>
            </div>
            </div>
        </a>
    `).slice(1,17).join('')}

    `;
        content.innerHTML = view;
        
    }
    catch (error) {
        console.log(error);
    }
})();