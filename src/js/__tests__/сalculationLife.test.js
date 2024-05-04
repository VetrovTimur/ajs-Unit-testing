import сalculationLife from "../сalculationLife";

test('сalculationLife test XP = 90', () => {
    const result = сalculationLife({name: 'Маг', health: 90})
    expect(result).toBe('healthy');
})
test('сalculationLife test XP = 50', () => {
    const result = сalculationLife({name: 'Маг', health: 50})
    expect(result).toBe('critical');
})
test('сalculationLife test XP = 30', () => {
    const result = сalculationLife({name: 'Маг', health: 30})
    expect(result).toBe('critical');
})
test('сalculationLife test XP = 15', () => {
    const result = сalculationLife({name: 'Маг', health: 15})
    expect(result).toBe('critical');
})
test('сalculationLife test XP = 5', () => {
    const result = сalculationLife({name: 'Маг', health: 5})
    expect(result).toBe('wounded');
})
test('сalculationLife test XP = 0', () => {
    const result = сalculationLife({name: 'Маг', health: 0})
    expect(result).toBe('dead');
})