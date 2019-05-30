var Thermostat = function(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_POWER_SAVING_TEMPERATURE = 25
  this.power_saving = true
  this.MAXIMUM_TEMPERATURE = 32
};

  Thermostat.prototype.getCurrentTemperature = function(){
    return this.temperature;
  };

  Thermostat.prototype.isMiniumTemperature = function(){
    return this.temperature === this.MINIMUM_TEMPERATURE;
  };

  Thermostat.prototype.isMaximumPowerSavingTemp = function(){
    return this.temperature === this.MAXIMUM_POWER_SAVING_TEMPERATURE;
  };

  Thermostat.prototype.isMaximumTemperature = function(){
    return this.temperature === this.MAXIMUM_TEMPERATURE;
  };

  Thermostat.prototype.up = function(){
    if (this.isMaximumPowerSavingTemp() && this.power_saving === true){
      return;
    } else if (this.isMaximumTemperature()){
      return;
    }
    return this.temperature++;

  };

  Thermostat.prototype.down = function(){
    if (this.isMiniumTemperature()){
      return;
    }
    return this.temperature--;
  };


