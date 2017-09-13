export const selectUser = (user) => {
    console.log("You clciked on user :", user.name);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};
