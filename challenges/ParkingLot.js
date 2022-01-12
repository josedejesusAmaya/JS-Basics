'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}


class ParkingLot {
    // Add the methods here
    myNumberOfSlots = [];
    constructor(myNumberOfSlots) {
        for (let i = 1; i <= myNumberOfSlots; i++) this.myNumberOfSlots.push(null);
        // console.log('myNumberOfSlots', this.myNumberOfSlots);
    }
    
    park(myCardId) {
        let res;
        const isEmpty = (element) => !element 
        const unoccupiedIndex = this.myNumberOfSlots.findIndex(isEmpty);
        if (unoccupiedIndex >= 0) {
            this.myNumberOfSlots[unoccupiedIndex] = myCardId;
            res = true;
        } else {
          res = false;  
        }
        return res;
    }
    
    getSlots() {
        return this.myNumberOfSlots;
    }
    
    remove(myCardId) {
        let res;
        const getMySlotById = (element) => element === myCardId;
        const unoccupiedIndex = this.myNumberOfSlots.findIndex(getMySlotById);
        if (unoccupiedIndex >= 0) {
            this.myNumberOfSlots[unoccupiedIndex] = null;
            res = true;
        } else {
          res = false;  
        }
        return res;
    }
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const numberOfSlots = parseInt(readLine().trim());
    const parkingLotObj = new ParkingLot(numberOfSlots);
    ws.write(`Parking Lot created with number of slots as ${numberOfSlots}\n`);
    
    let numberOfOperations = parseInt(readLine().trim());
    while (numberOfOperations-- > 0) {
        const inputs = readLine().trim().split(' ');
        const operation = inputs[0];
        const carId = inputs[1];

        switch(operation) {
            case 'Park':
                if (parkingLotObj.park(carId)) {
                    ws.write(`Parking Started: ${carId}\n`);
                } else {
                    ws.write(`Parking Full: ${carId}\n`);
                }
                break;
            case 'Remove':
                if (parkingLotObj.remove(carId)) {
                    ws.write(`Car id ${carId} removed from parking\n`);
                } else {
                    ws.write(`Car: ${carId} not found\n`);
                }
                break;
            case 'GetSlots':
                const status = parkingLotObj.getSlots();
                status.forEach((obj, i) => {
                    if (obj) {
                        ws.write(`Parked at slot ${i + 1}: ${obj}\n`);
                    } else {
                        ws.write(`Slot ${i + 1} is empty\n`);
                    }
                })
                break;
            default:
                break;
        }
    }
    ws.end();
}