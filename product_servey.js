// Practice task 

const submitButton = document.getElementById("submitBtn");

function submitFeedback(){
    const username = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const job = document.getElementById("job").value;
    const designation = document.getElementById("designation").value;
    const productType = document.getElementById("productType").value;
    const feedback = document.getElementById("feedbackText").value;
    const usereExperince = document.getElementById("usereExperince").value;

    /// retriving value form input elements
    document.getElementById("userName").innerHTML = username;
    document.getElementById("usnerAge").innerHTML = age;
    document.getElementById("usnerEmail").innerHTML = email;
    document.getElementById("usnerJob").innerHTML = job;
    document.getElementById("usnerDesignation").innerHTML = designation;
    document.getElementById("usnerDesignation").innerHTML = designation;
    document.getElementById("usnerProductChoice").innerHTML = productType;
    document.getElementById("userFeedback").innerHTML = feedback;
    document.getElementById("experince").innerHTML = usereExperince;

    document.getElementById("userInfo").style.display = "block";


    alert("Thank you for your valuable feedback!");

}

submitButton.onclick = submitFeedback;

document.addEventListener('keydown', function(event){
    if (event.key === "Enter"){
        submitFeedback();
    }
});
