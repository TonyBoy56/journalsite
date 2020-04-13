export function Journal() {
  this.author = "";
  this.title = "";
  this.entry = "";
  this.teaser = "";
}

Journal.prototype.formatEntry = function () {
  var vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  var entryArray = this.entry.split("").toLowerCase();
  var vowelsCount = 0;
  var consonantCount = 0;
  var letters = /^[a-z]+$/;

  entryArray.forEach(function (element) {
    if (vowelsArray.includes(element)) {
      vowelsCount += 1;
    }
    else if (element.match(letters)) {
      consonantCount += 1
    }
    console.log(vowelsCount);
    console.log(consonantCount);
  });
}
Journal.prototype.getTeaser

Journal.prototype.printEntry = function () {
  $('#entries').html("<h2>" + this.title + "</h2>")
}