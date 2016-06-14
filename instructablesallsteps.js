// ==UserScript==
// @name        Instructables All Steps
// @namespace   instructablesallsteps
// @include     http://*.instructables.com/id/*
// @include     https://*.instructables.com/id/*
// @version     0.1
// @grant       none
// ==/UserScript==
(function () {
  var currentLocation = window.location;
  if (!containsQueryParameter(currentLocation, 'ALLSTEPS')) {
    newLocation = addQueryParameter(currentLocation, 'ALLSTEPS', null);
    currentLocation.replace(newLocation);
  }
  
  function containsQueryParameter(location, key) {
    return containsCaseInsensitive(location.search, key);
  }
  function addQueryParameter(location, key, value) {
    var separator = '';
    if (!containsQueryStringSeparator(location)) {
      separator = '?';
    } else if (containsQueryParameters(location)) {
      separator = '&';
    }
    return location.href + separator + key + '=' + value;
  }
  function containsQueryStringSeparator(location) {
    return contains(location.href, '?');
  }
  function containsQueryParameters(location) {
    return location.search != '';
  }
  function contains(value, substring) {
    return value.indexOf(substring) != - 1;
  }
  function containsCaseInsensitive(value, substring) {
    return value.search(new RegExp(substring, 'i')) != - 1;
  }
}) ();
