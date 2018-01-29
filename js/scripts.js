//Business logic

function Dog(name, breed, age, color) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.color = color;


//User Interface Logic
$(document).ready(function() {
  $("form#new-dog").submit(function(event) {
    event.preventDefault();
    var dogName = $("input#new-dog-name").val();
    var dogAge = $("input#new-age-name").val();
    var dogBreed = $("input#new-breed-name").val();
    var dogColor = $("input#new-color-name").val();
    var newDog = new Dog (dogName, dogAge, dogBreed, dogColor);


  $(".pet").last().click(function() {
    $("#show-pet").show();
    $("#show-pet h2").text(newDog.name);
    $(".age-name").text(newDog.age);
    $(".breed-name").text(newDog.breed);
    $(".color-name").text(newDog.color);

  });
});
