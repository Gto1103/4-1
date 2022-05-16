import checkHealth from '../js/player_health';

test('health=90, check checkHealth is healthy', () => {
  expect(checkHealth({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('health=40, check checkHealth is wounded', () => {
  expect(checkHealth({ name: 'Маг', health: 40 })).toBe('wounded');
});

test('health=10, check checkHealth is critical', () => {
  expect(checkHealth({ name: 'Маг', health: 10 })).toBe('critical');
});

test('health=50, check checkHealth is wounded', () => {
  expect(checkHealth({ name: 'Маг', health: 50 })).toBe('wounded');
});

test('health=15, check checkHealth is wounded', () => {
  expect(checkHealth({ name: 'Маг', health: 15 })).toBe('wounded');
});
