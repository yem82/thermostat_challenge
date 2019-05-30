'use script';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('at initialization', function(){

    it('has a defaultt temperature of 20 degs', function(){
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

  // describe('energy usage', function(){
  //   beforeEach(function(){
  //     thermostat.temperature = 10
  //   });

  //   it('gets low energy usage when temp < 18 deg', function(){

  //     for (i = 0; i < 7; i++) {
  //       thermostat.up();
  //     }

  //     expect(thermostat.energy_usage).toEqual('Low usage')
  //   })

  //   it('gets medium energy usage when temp < 25 deg', function(){
  //     for (i = 0; i < 14; i++) {
  //       thermostat.up();
  //     }

  //     expect(thermostat.energy_usage).toEqual('Medium usage')
  //   })

  //   it('gets high energy usage when temp >= 25 deg', function(){
  //     for (i = 0; i < 15; i++) {
  //       thermostat.up();
  //     }

  //     expect(thermostat.energy_usage).toEqual('High usage')
  //   })
  // });


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