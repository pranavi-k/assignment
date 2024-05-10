function onLoad() {
    var titles = document.getElementsByClassName("accordion-title");
    Array.from(titles).forEach(function(title) {
        title.addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
}

function onClickButton(number) {
    document.getElementById("text").textContent = "You have clicked on button " + number + ".";
}

function validate() {
    const regexForEmail = /\S+@\S+\.\S+/;
    if (!regexForEmail.test(document.getElementById('input').value)) {
        document.getElementById('errorText').style.display = 'block';
        return false;
    }
    document.getElementById('errorText').style.display = 'none';
    return true;
}
