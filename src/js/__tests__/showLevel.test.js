import getLevel from '../showlevel';
import fetchData from '../http';

jest.mock('../http.js');

beforeEach(() => {
    jest.resetAllMocks();
});

test("ShowLevel", () => {
    fetchData.mockReturnValueOnce({ status: "ok", level: 11});
    expect(getLevel(1)).toBe("Ваш текущий уровень: 11")
})

test("ShowLevel failures", () => {
    fetchData.mockReturnValueOnce({ status: "no", level: 11});
    expect(getLevel(1)).toBe("Информация об уровне временно недоступна")
})