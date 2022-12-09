//Setups the role for user
const ROLE = {
  ADMIN: "admin",
  PREMIUM: "premium",
};

//Export the role and create user
module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: "Craig", role: ROLE.ADMIN, userId: 1 },
    { id: 2, name: "Dawood", role: ROLE.PREMIUM, userId: 2 },
  ],
};
