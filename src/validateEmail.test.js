const { isValidEmail } = require("./ValidateEmail");

test("valid email passes", () => {
  expect(isValidEmail("test@example.com")).toBe(true);
});

test("invalid email fails", () => {
  expect(isValidEmail("test@.gmail.com")).toBe(false);
  expect(isValidEmail("test@domain..com")).toBe(false);
  expect(isValidEmail("test@-domain.com")).toBe(false);
});
