// JavaScript Document


var render_view =(model) => {
	var source = document.querySelector("#show_results_view").innerHTML;
	var template = Handlebars.compile(source);
	var html = template(model);
	
	document.querySelector("#results").innerHTML =html; 
}
var updateView = async(button) => {
	
	if(button.dataset.querytype == 'by_code'){
		let queryvalue = document.querySelector('#codeQuery').value;
		api = `http://localhost:3000/api/by_code/${queryvalue}`;
	} else if (button.dataset.querytype == 'by_title'){
		let queryTitle = document.querySelector('#titleQuery').value;
		api = `http://localhost:3000/api/by_title/${queryTitle}`;
	} else if(button.dataset.querytype == 'by_instructor'){
		let queryName = document.querySelector('#instructorQuery').value;
		api = `http://localhost:3000/api/by_instructor/${queryName}`;
	} else if(button.dataset.querytype == 'by_level'){
		let queryLevel = document.querySelector('#levelQuery').value;
		api = `http://localhost:3000/api/by_level/${queryLevel}`;
	} else if (button.dataset.querytype == 'combined_query'){
		let queryCombined = document.querySelector('#nameQuery').value;
		let queryCombined2 = document.querySelector('#level2Query').value;
		api = `http://localhost:3000/api/by_level/${queryCombined}/${queryCombined2}`;
	}
	
	
	const data = await fetch(api);
	const model = await data.json();
	render_view(model);
}






