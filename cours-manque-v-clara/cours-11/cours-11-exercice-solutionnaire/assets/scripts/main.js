import { classesMapping } from './classMapping.js';


(function() {


	let elsComponent = document.querySelectorAll('[data-js-component]');
	
	for (let i = 0, l = elsComponent.length; i < l; i++) {
		
		let component = elsComponent[i].dataset.jsComponent,				// => string
			elComponent = elsComponent[i];

		for (let cle in classesMapping) {
			if (component == cle) new classesMapping[component](elComponent);
		}
	}
})();