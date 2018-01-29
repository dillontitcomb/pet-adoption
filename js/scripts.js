//Business logic

function Dog(name, breed, age, color, adopted) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.color = color;
  this.adopted = adopted;
};

Dog.prototype.display = function() {
  return "Thanks! Your " + this.color + " dog, " + this.name + ", age " + this.age + " has been submitted.";
}

//User Interface Logic
$(document).ready(function() {
  $("form#new-dog").submit(function(event) {
    event.preventDefault();


    var dogName = $("input#new-dog-name").val();
    var dogAge = $("input#new-age-name").val();
    var dogBreed = $("input#new-breed-name").val();
    var dogColor = $("input#new-color-name").val();
    var adoptedDog = $("#new-adopted").val();
    var newDog = new Dog (dogName, dogBreed, dogAge, dogColor, adoptedDog);


    $("#show-pet h2").text(newDog.display());
    // $(".age-name").text(newDog.age);
    // $(".breed-name").text(newDog.breed);
    // $(".color-name").text(newDog.color);
    // $(".adopted").text(newDog.adopted);
  //
  // $(".pet").last().click(function() {
  //   $("#show-pet").show();
  // });
  });
});
