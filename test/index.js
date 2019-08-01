/* eslint-disable no-undef */
require('chai').should();
const chiringuito = require('../index');

describe('chiringuito', () => {

  it('should be an object', () => {
    (typeof chiringuito).should.eql('object');
  });

  describe('inventory', () => {

    it('should be method of chiringuito', () => {
      ('inventory' in chiringuito).should.eql(true);
    });

    it('should return the correct value of the inventory', () => {
      let returnedValue = chiringuito.inventory();
      (returnedValue).should.eql(1710);
    });

    it('should not include cash in the returned value', () => {
      chiringuito.cash = 1000;

      let returnedValue = chiringuito.inventory();
      (returnedValue).should.eql(1710);

      chiringuito.cash = 0;
    });

  });


});
