import mock from "~/mock.json";

export async function getUserById(userID) {
  return mock.find((user) => user.id.toString() === userID.toString());
}