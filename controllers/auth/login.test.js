// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { User } = require("../../models");
// const login = require("./login");

// jest.mock("bcrypt");
// jest.mock("jsonwebtoken");
// jest.mock("../../models");
// describe("login function", () => {
// const testReq = {
//   body: {
//     email: "test@email.com",
//     password: "testpassword",
//   },
// };

// const testRes = {
//   status: jest.fn().mockReturnThis(),
//   json: jest.fn(),
// };

// beforeEach(() => {
//   jest.clearAllMocks();
// });

// test("response with string token, object user and status 200", async () => {
//   User.findOne.mockResolvedValue({
//     _id: "fakeUserId",
//     email: "test@email.com",
//     password: await bcrypt.hash("testpassword", 10),
//     subscription: "basic",
//   });

//   bcrypt.compare.mockResolvedValue(true);

//   jwt.sign.mockReturnValue("fakeToken");

//   User.findByIdAndUpdate.mockResolvedValue();

//   await login(testReq, testRes);

//   expect(testRes.status).toHaveBeenCalledWith(200);
//   expect(testRes.json).toHaveBeenCalledWith({
//     token: expect.stringMatching(/^(fakeToken)$/),
//     user: {
//       email: expect.stringMatching(/^(test@email.com)$/),
//       subscription: expect.stringMatching(/^(basic|pro)$/),
//     },
//   });
// });

// afterAll(() => {
//   jest.restoreAllMocks();
// });

// test("Login route returns status 200", async () => {
//   const req = { body: { email: "test@example.com", password: "password" } };
//   const res = {
//     status: jest.fn().mockReturnThis(),
//     json: jest.fn(),
//   };

//   await login(req, res);

//   expect(res.status).toHaveBeenCalledWith(200);
// });

//   test("Token in the response is a string", async () => {
//     const req = { body: { email: "test@example.com", password: "password" } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     await login(req, res);

//     const tokenType = typeof res.json.mock.calls[0][0].token;
//     expect(tokenType).toBe("string");
//   });

//   test("Response includes user object with email and subscription fields", async () => {
//     const req = { body: { email: "test@example.com", password: "password" } };
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     await login(req, res);

//     const user = res.json.mock.calls[0][0].user;

//     expect(user).toBeDefined();
//     expect(user).toHaveProperty("email");
//     expect(user).toHaveProperty("subscription");
//   });
// });
