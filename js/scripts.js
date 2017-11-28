function Ticket(age) {
  // this.movie = movie;
  // this.time = time;
  this.age = age;
};

Ticket.prototype.calculator = function(ticketPrice) {
  if (this.age === "youth") {
    ticketPrice -= 1;
  } else if (this.age === "senior") {
    ticketPrice -= 3;
  }
  return ticketPrice;
};


$(document).ready(function() {
  $('#questions').submit(function(event) {
    event.preventDefault();
    $(".result").empty();

    var ticketPrice = 10;

    var inputtedAge = $("#age").val();
    var adjustedPrice = new Ticket(inputtedAge);

    $(".result").append(adjustedPrice.calculator(ticketPrice));


  });
});
