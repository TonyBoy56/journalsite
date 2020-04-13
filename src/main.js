import $ from 'jquery';
import { Journal } from './journal'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {
  $('#journal-form').submit(function (event) {
    event.preventDefault();
    var journalEntry = new Journal();
    journalEntry.author = $('#name-input').val();
    journalEntry.title = $('#title-input').val();
    journalEntry.entry = $('#entry-input').val();
    journalEntry.formatEntry();
    journalEntry.getTeaser();
    $("#entries").html(journalEntry.teaserFinal).val();
  });
});