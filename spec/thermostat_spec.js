'use script';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('at initialization', function(){

    it('has a default temperature of 20 degs', function(){
      expect(thermostat.temperature).toEqual(20)
    });

    it('has power saving mode on by default', function(){
      expect(thermostat.power_saving).toBe(true)
    });
  });

  describe('temperature controls', function(){

    it('can increase temperature', function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease temperature', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature', function(){
      for (i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('can reset to default temperature', function(){
      thermostat.up()
      thermostat.reset();

      expect(thermostat.temperature).toEqual(20)
    })
  });

  describe('displaying usage levels', function() {
    beforeEach(function(){
      thermostat = new Thermostat();
    });
    // describe('when the temp is < 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low usage');
      });
    // });
  
    // describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium usage');
      });
  
    // describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.switchPowerSavingOff;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high usage');
      });
    // });
    });


  describe('power saving', function(){

    it('when on thermostat has a max temp of 25 deg', function() {
      for (i = 0; i < 6; i++) {
        thermostat.up();
      }

      expect(thermostat.getCurrentTemperature()).toEqual(25)

    });

    it('when off thermostat has a max temp of 32 deg', function(){
      thermostat.power_saving = false
      for (i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32)
    });

    it('can switch power saving off', function(){
      thermostat.switchPowerSavingOff();

      expect(thermostat.isPowerSavingOn()).toBe(false)
    });

    it('can switch power saving on', function(){
      thermostat.switchPowerSavingOff();
      expect(thermostat.isPowerSavingOn()).toBe(false)

      thermostat.switchPowerSavingOn();
      expect(thermostat.isPowerSavingOn()).toBe(true)
    });
  })
});