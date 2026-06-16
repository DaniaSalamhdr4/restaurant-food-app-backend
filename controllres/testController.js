const testUserController = () => {
  try {
    res.status(200).send({
      success: true,
      message: "TEST user DATA api",
    });
  } catch (error) {
    console.log("Error in test API");
  }
};

module.exports = { testUserController };
