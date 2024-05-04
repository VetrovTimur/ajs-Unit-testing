import getLevel from '../showlevel';
import fetchData from '../http';

jest.mock('../http.js');

beforeEach(() => {
    jest.resetAllMocks();
});

test('should call showLevel', () => {
    fetchData.mockReturnValue(JSON.stringify({level: 24}));
    getLevel(24);
    expect(fetchData).toHaveBeenCalledWith('https://server/user/24');
});

// test('showLevel status - ok', () => {
//     const result = getLevel(24);
//     expect(result).toBe(`Ваш текущий уровень: 24`);
// })