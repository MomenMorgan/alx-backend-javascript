import { taskFirst, taskNext } from "./0-constants.js";

const lol = console.log(taskFirst)
const fol = console.log(taskNext)

test("varible", () => {
  expect(lol).toBe("I prefer const when I can");
});

test("varible", () => {
  expect(fol).toBe("But sometimes let is okay");
});
