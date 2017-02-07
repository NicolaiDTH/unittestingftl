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

  expect(checkForShip(player, [9,9])).to.deep.equal(player.ships[0]);
 });

 it('should handle ships at more than one co-ordinate', function(){

  player = {
   ships: [
    {
     locations: [[0,2], [0,4]]
    }
   ]
  };
  expect(checkForShip(player, [0,4])).to.deep.equal(player.ships[0]);
  expect(checkForShip(player, [0,2])).to.deep.equal(player.ships[0]);
  expect(checkForShip(player, [9,9])).to.be.false;
 });

 it('should handle checking multiple ships', function(){

  player = {
   ships: [
    {
     locations: [[0,2], [0,4]]
    },
    {
     locations: [[2,2], [4,5]]
    },
    {
     locations: [[2,0], [2,1], [2,2], [2,4]]
    }
   ]
  };
  expect(checkForShip(player, [0,4])).to.deep.equal(player.ships[0]);
  expect(checkForShip(player, [0,2])).to.deep.equal(player.ships[0]);
  expect(checkForShip(player, [2,2])).to.deep.equal(player.ships[1]);
  expect(checkForShip(player, [4,5])).to.deep.equal(player.ships[1]);
  expect(checkForShip(player, [2,4])).to.deep.equal(player.ships[2]);
  expect(checkForShip(player, [9,9])).to.be.false;
 });
});

describe('damageShip', function() {
 var damageShip = require('../game_logic/ship_methods').damageShip;

 it('should register damage on a given ship at a given location', function(){
  var ship = {
   locations: [[0,0]],
   damage: []
  };

  damageShip(ship, [0,0]);

  expect(ship.damage).to.not.be.empty;
  expect(ship.damage[0]).to.deep.equal([0,0]);
 });
});

describe('fire', function () {
 var fire = require('../game_logic/ship_methods').fire;

 it('should record damage on the given players ship at a given coordinate', function() {
  var player = {
   ships: [
    {
     locations: [[10,11]],
     damage: []
    }
   ]
  };

  fire(player, [10,11]);

  expect(player.ships[0].damage[0]).to.deep.equal([10,11]);
 });

 it('should not record damage if there is no ship at my coordinates', function() {
  var player = {
   ships: [
    {
     locations: [[12,13]],
     damage: []
    }
   ]
  };

  fire(player, [20,30]);

  expect(player.ships[0].damage).to.be.empty;
 });
});
