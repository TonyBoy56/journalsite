export function Journal() {
  this.author = "";
  this.title = "";
  this.entry = "";
  this.teaser = "";
}

Journal.prototype.formatEntry = function () {
  var vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  var entryArray = this.entry.toLowerCase().split("")
  var vowelsCount = 0;
  var consonantCount = 0;
  var letters = /^[a-z]+$/;

  entryArray.forEach(function (element) {
    if (vowelsArray.includes(element)) {
      vowelsCount += 1;
    }
    else if (element.match(letters)) {
      consonantCount += 1;
    }
  });
  console.log(vowelsCount);
  console.log(consonantCount);
};

Journal.prototype.getTeaser = function () {
  var entryArr = this.entry.split(" ");
  var teaserArr = [];
  for (var i = 0; i < 8; i++) {
    teaserArr.push(entryArr[i]);
    if (entryArr[i].endsWith(".") || entryArr[i].endsWith("?") || entryArr[i].endsWith("!")) {
      break;
    }
    var teaserFinal = teaserArr.join(" ");
    $("#entries").html(teaserFinal);
  }
};

Journal.prototype.printEntry = function () {
  $('#entries').html("<h2>" + this.title + "</h2>");
};