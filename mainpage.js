{
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }




}
$.ajax({
  url: url,
  dataType: "json",
  type: "Post",
  async: true,
  data: {},
  success: function (data) {

  },
  error: function (xhr, exception) {
    var msg = "";
    if (xhr.status === 0) {
      msg = "Not connect.\n Verify Network." + xhr.responseText;
    } else if (xhr.status == 404) {
      msg = "Requested page not found. [404]" + xhr.responseText;
    } else if (xhr.status == 500) {
      msg = "Internal Server Error [500]." + xhr.responseText;
    } else if (exception === "parsererror") {
      msg = "Requested JSON parse failed.";
    } else if (exception === "timeout") {
      msg = "Time out error." + xhr.responseText;
    } else if (exception === "abort") {
      msg = "Ajax request aborted.";
    } else {
      msg = "Error:" + xhr.status + " " + xhr.responseText;
    }

  }
}); 