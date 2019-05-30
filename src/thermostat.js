var Thermostat = function(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_POWER_SAVING_TEMPERATURE = 25
  this.power_saving = true
  this.MAXIMUM_TEMPERATURE = 32
  // this.energy_usage = "Medium usage"
};

  Thermostat.prototype.getCurrentTemperature = function(){
    return this.temperature;
  };

  Thermostat.prototype.switchPowerSavingOff = function(){
    return this.power_saving = false;
  };

  Thermostat.prototype.switchPowerSavingOn = function(){
    return this.power_saving = true;
  };

  Thermostat.prototype.isPowerSavingOn = function(){
    return this.power_saving;
  };

  // Thermostat.prototype.energy_usage = function(){
  //   // if(this.temperature >= 25){
  //   //  return this.energy_usage = "High usage"
  //   // }
  //   // else if(this.temperature < 18) {
  //   // //  return  this.energy_usage = "Low usage"
  //   // }
  //   // else
  //   // //  return this.energy_usage = "Medium usage"
  // };

  Thermostat.prototype.reset = function(){
    return this.temperature = 20;
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
    if (this.isMaximumPowerSavingTemp() && this.isPowerSavingOn() === true){
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


