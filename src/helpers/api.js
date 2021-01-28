export const signInRequest = (user) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user.username === "test" && user.password === "test123") {
          resolve("token");
        } else {
          reject("Invalid username or password.");
        }
      }, 1000);
    })
};