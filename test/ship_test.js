var expect = require('chai').expect;

describe('checkForShip', function(){
 var checkForShip = require('../game_logic/ship_methods').checkForShip;

 it('should correctly report no ship at a given players co-ordinate', function(){

 player = {
  ships: [
   {
    locations: [[0,0]]
   }
  ]
 };

 expect(checkForShip(player, [9, 9])).to.be.false;
 });

 it('should correctly report a ship located at a given players co-ordinate', function(){

 player = {
  ships: [
   {
    locations: [[9,9]]
   }
  ]
 };

  expect(checkForShip(player, [9,9])).to.be.true;
 });

 it('should handle ships at more than one co-ordinate', function(){

  player = {
   ships: [
    {
     locations: [[0,2], [0,4]]
    }
   ]
  };
  expect(checkForShip(player, [0,4])).to.be.true;
  expect(checkForShip(player, [0,2])).to.be.true;
  expect(checkForShip(player, [9,9])).to.be.false;
 });

 it('should handle checking multiple ships', function(){

  player = {
   ships: [
    {
     locations: [[0,2], [0,4]]
    },
    {
     locations: [[2,2], [4,4]]
    },
    {
     locations: [[2,0], [2,1], [2,2], [2,3]]
    }
   ]
  };
  expect(checkForShip(player, [0,4])).to.be.true;
  expect(checkForShip(player, [0,2])).to.be.true;
  expect(checkForShip(player, [2,2])).to.be.true;
  expect(checkForShip(player, [4,4])).to.be.true;
  expect(checkForShip(player, [2,3])).to.be.true;
  expect(checkForShip(player, [9,9])).to.be.false;
 });
});