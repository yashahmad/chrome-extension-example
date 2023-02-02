chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            document.getElementById("firstName").value = request.firstName;
            document.getElementById("lastName").value = request.lastName;
            document.getElementsByName("phone-input-alt")[0].value = request.telephone;
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occurred!"});
        }
    }
);