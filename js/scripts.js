//Business logic

function Dog(name, age, breed, color, adopted) {
  this.name = name;
  this.age = age;
  this.breed = breed;
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

$(document).ready(function() {
  $(".clickable").click(function() {
    $(".buddypicture").toggle();
    $(".buddyinfo").toggle();
  });
});

$(document).ready(function() {
  $(".clickable1").click(function() {
    $(".maxpicture").toggle();
    $(".maxinfo").toggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $(".oscarpicture").toggle();
    $(".oscarinfo").toggle();
  });
});

$(document).ready(function() {
  $(".clickable3").click(function() {
    $(".tobypicture").toggle();
    $(".tobyinfo").toggle();
  });
});

$(document).ready(function() {
  $(".clickable4").click(function() {
    $(".frankiepicture").toggle();
    $(".frankieinfo").toggle();
  });
});

$(document).ready(function() {
  $(".clickable5").click(function() {
    $(".jackpicture").toggle();
    $(".jackinfo").toggle();
  });
});

$(document).ready(function() {
  $(".clickable6").click(function() {
    $(".rubypicture").toggle();
    $(".rubyinfo").toggle();
  });
});

$(document).ready(function() {
  $(".clickable7").click(function() {
    $(".cocopicture").toggle();
    $(".cocoinfo").toggle();
  });
});
