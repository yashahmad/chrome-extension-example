document.getElementById("auto-fill").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			firstName: document.getElementById('firstName').value,
			lastName: document.getElementById('lastName').value,
			telephone: document.getElementById('telephone').value,
		}, function(response) {
			console.log(response.status);
		});
	});
});

document.getElementById("reset-fields").addEventListener("click", () => {
	/* Reset extension form values */
	document.getElementById('firstName').value = '';
	document.getElementById('lastName').value = '';
	document.getElementById('telephone').value = '';
});


document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		firstName: document.getElementById('firstName').value,
		lastName: document.getElementById('lastName').value,
		telephone: document.getElementById('telephone').value,
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'firstName',
		'lastName',
		'telephone',
	], function(result) {
		document.getElementById('firstName').value = result.firstName;
		document.getElementById('lastName').value = result.lastName;
		document.getElementById('telephone').value = result.telephone;
	});
});
