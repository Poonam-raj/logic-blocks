const { findSleepiestGuard } = require('../repose-record.js');

const justId1Data = [
  { timestamp: '1518-03-24 23:49', info: 'Guard #1 begins shift' },
  { timestamp: '1518-03-25 00:00', info: 'falls asleep' },
  { timestamp: '1518-03-25 00:55', info: 'wakes up' },
];
const twoGuardData = [
  { timestamp: '1518-03-23 00:00', info: 'Guard #6 begins shift' },
  { timestamp: '1518-03-23 00:19', info: 'falls asleep' },
  { timestamp: '1518-03-23 00:45', info: 'wakes up' },
  { timestamp: '1518-03-24 00:00', info: 'Guard #13 begins shift' },
  { timestamp: '1518-03-24 00:31', info: 'falls asleep' },
  { timestamp: '1518-03-24 00:37', info: 'wakes up' },
];
describe('findSleepiestGuard', () => {
  it('should return null when passed empty arr', () => {
    expect(findSleepiestGuard([])).toBe(null);
  });
  it('should return a id', () => {
    const result = findSleepiestGuard(justId1Data);
    expect(typeof result).toBe('number');
  });
  it('should return the ID of a guard when passed data containing one guard', () => {
    const justId2Data = [
      { timestamp: '1518-03-24 23:49', info: 'Guard #2 begins shift' },
      { timestamp: '1518-03-25 00:00', info: 'falls asleep' },
      { timestamp: '1518-03-25 00:55', info: 'wakes up' },
    ];
    const justId96Data = [
      { timestamp: '1518-03-24 23:49', info: 'Guard #96 begins shift' },
      { timestamp: '1518-03-25 00:00', info: 'falls asleep' },
      { timestamp: '1518-03-25 00:55', info: 'wakes up' },
    ];
    const justId1Result = findSleepiestGuard(justId1Data);
    expect(justId1Result).toBe(1);
    const justId2Result = findSleepiestGuard(justId2Data);
    expect(justId2Result).toBe(2);
    const justId96Result = findSleepiestGuard(justId96Data);
    expect(justId96Result).toBe(96);
  });
  it("should return the id of the sleepiest guard when passed two guards' data", () => {
    const result = findSleepiestGuard(twoGuardData);
    expect(result).toBe(6);
  });
});
