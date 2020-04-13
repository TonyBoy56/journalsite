import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#journal-form').submit(function (event) {
    event.preventDefault();
    var name = $('#name-input').val();
    var title = $('#title-input').val();
    var entry = $('#entry-input').val();
    $('#entries').append(name + title + entry);
  });
});