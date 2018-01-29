//Business logic

function Dog(name, age, breed, color, adopted) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.color = color;
  this.adopted = adopted;
};


//User Interface Logic
$(document).ready(function() {
  $("form#new-dog").submit(function(event) {
    event.preventDefault();

    var dogName = $("input#new-dog-name").val();
    var dogAge = $("input#new-age-name").val();
    var dogBreed = $("input#new-breed-name").val();
    var dogColor = $("input#new-color-name").val();
    var newDog = new Dog (dogName, dogAge, dogBreed, dogColor, false);
    $("ul#dogs").append("<li><span class='dogs'>" + newDog.name + "</span></li>");

  $(".dogs").last().click(function() {
    $("#show-details").show();
    $(".dogs").hide();

    $("#show-details h2").text(newDog.name);
    $(".age-name").text(newDog.age);
    $(".breed-name").text(newDog.breed);
    $(".color-name").text(newDog.color);
    $(".adopted").text(newDog.adopted);

  $("#show-details").last().click(function() {
    $("#show-details").hide();
    $(".dogs").show();
  });
  });
  //
  // $(".pet").last().click(function() {
  //   $("#show-pet").show();
  // });
  });
});
