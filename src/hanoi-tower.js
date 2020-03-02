module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
    turnsSpeed = turnsSpeed/3600;
    let turns = Math.pow(2, diskNumber) - 1;
    let result = { turns: turns, seconds: turns/turnsSpeed};
    return result;
}