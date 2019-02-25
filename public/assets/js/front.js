$(function() {
//CHANGE THIS TO SANDWICHES UPDATEONE()
    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
    
        var newDevouredState = {
          devoured: newDevoured
        };
    
        // Send the PUT request.
        $.ajax("/api/sandwiches/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("I ate the whole thing", newDevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var toEatIt = 1;

        var newSandwich = {
          sandwich_name: $("#sa").val().trim(),
          devoured: toEatIt
        //   devoured: $("[name=sleepy]:checked").val().trim()
        };

        console.log("newSandwich.devoured: " + newSandwich.devoured);
    
        console.log("newSandwich: " + JSON.stringify(newSandwich));
        // Send the POST request.
        $.ajax("/api/sandwiches", {
          type: "POST",
          data: newSandwich
        }).then(
          function() {
            console.log("created sandwich!");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


    });


