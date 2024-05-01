
  function searchBook() {
    var bookName = document.getElementById("bookSearch").value.toLowerCase();
    var books = [
      {
        "title": "kidnapped",
        "price": 10
      },
      {
        "title": "treasure island",
        "price": 10
      },
      {
        "title": "the kite runner",
        "price": 10
      },
      {
        "title": "to kill a mockingbird",
        "price": 20
      },
      {
        "title": "romeo and juliet",
        "price": 20
      },
      {
        "title": "big little lies",
        "price": 9
      },
      {
        "title": "silent patient",
        "price": 9
      },
      {
        "title": "in the wood",
        "price": 9
      },
      {
        "title": "harry potter and the order of the phoenix",
        "price": 20
      },
    ];
    var book = books.find(function(book) {
      return book.title === bookName;
    });
    if (book) {
      var listItem = document.createElement("li");
      listItem.textContent = book.title + " " ;
      document.getElementById("bookList").appendChild(listItem);
      document.getElementById("totalPrice").textContent = book.price+"$";
    } else {
      document.getElementById("totalPrice").textContent = "Book not found";
    }
  }

  