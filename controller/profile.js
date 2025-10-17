const axios = require("axios");
exports.profile = async (req, res, next) => {
  const name = "Odedoyin Oyinloluwa";
  const email = "odedoyinoyinloluwa@gmail.com";
  const stack = "Node/Express";
  const cat_url = "https://catfact.ninja/fact";
  const current_time = new Date().toISOString();
  try {
    const response = await axios.get(cat_url, { timeout: 5000 });
    const random_cat = response.data.fact;
    return res.status(200).json({
      status: "success",
      user: { name, email, stack },
      timestamp: current_time,
      fact: random_cat,
    });
  } catch (error) {
    console.error("Cat fact API failed:", error.message);
    return res.status(200).json({
      status: "success",
      user: {
        name,
        email,
        stack,
      },
      timestamp: current_time,
      fact: "Could not fetch a cat fact at the moment.",
    });
  }
};
