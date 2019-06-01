$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#ps-on').click(function() {
    thermostat.switchPowerSavingOn();
    $('#ps-status').text('on')
    updateTemperature();
  })

  $('#ps-off').click(function() {
    thermostat.switchPowerSavingOff();
    $('#ps-status').text('off')
    updateTemperature();
  })

  function updateTemperature() {
    $('#temp').text(thermostat.getCurrentTemperature());
  };
});