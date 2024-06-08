const { User, Helmet } = require("../models");
const cleanDB = require("./cleanDB");
const db = require("../config/connection");

db.once("open", async () => {
  try {
    await cleanDB("User", "users");
    await cleanDB("Helmet", "helmets");

    const user = await User.create({
      firstName: "Courtney",
      lastName: "Hook",
      email: "courtneyhook1979@gmail.com",
      password: "password",
    });

    const helmets = await Helmet.insertMany([
      {
        name: "image_1",
        description: "image_1",
        image: "image_1.jpg",
        price: 10.0,
      },
      {
        name: "image_2",
        description: "image_2",
        image: "image_2.jpg",
        price: 10.0,
      },
      {
        name: "image_3",
        description: "image_3",
        image: "image_3.jpg",
        price: 10.0,
      },
      {
        name: "image_4",
        description: "image_4",
        image: "image_4.jpg",
        price: 10.0,
      },
      {
        name: "image_5",
        description: "image_5",
        image: "image_5.jpg",
        price: 10.0,
      },
      {
        name: "image_6",
        description: "image_6",
        image: "image_6.jpg",
        price: 10.0,
      },
      {
        name: "image_7",
        description: "image_7",
        image: "image_7.jpg",
        price: 10.0,
      },
      {
        name: "image_8",
        description: "image_8",
        image: "image_8.jpg",
        price: 10.0,
      },
      {
        name: "image_9",
        description: "image_9",
        image: "image_9.jpg",
        price: 10.0,
      },
      {
        name: "image_10",
        description: "image_10",
        image: "image_10.jpg",
        price: 10.0,
      },
      {
        name: "image_11",
        description: "image_11",
        image: "image_11.jpg",
        price: 10.0,
      },
      {
        name: "image_12",
        description: "image_12",
        image: "image_12.jpg",
        price: 10.0,
      },
      {
        name: "image_13",
        description: "image_13",
        image: "image_13.jpg",
        price: 10.0,
      },
      {
        name: "image_14",
        description: "image_14",
        image: "image_14.jpg",
        price: 10.0,
      },
      {
        name: "image_15",
        description: "image_15",
        image: "image_15.jpg",
        price: 10.0,
      },
      {
        name: "image_16",
        description: "image_16",
        image: "image_16.jpg",
        price: 10.0,
      },
      {
        name: "image_17",
        description: "image_17",
        image: "image_17.jpg",
        price: 10.0,
      },
      {
        name: "image_18",
        description: "image_18",
        image: "image_18.jpg",
        price: 10.0,
      },
      {
        name: "image_19",
        description: "image_19",
        image: "image_19.jpg",
        price: 10.0,
      },
      {
        name: "image_20",
        description: "image_20",
        image: "image_20.jpg",
        price: 10.0,
      },
      {
        name: "image_21",
        description: "image_21",
        image: "image_21.jpg",
        price: 10.0,
      },
      {
        name: "image_22",
        description: "image_22",
        image: "image_22.jpg",
        price: 10.0,
      },
      {
        name: "image_23",
        description: "image_23",
        image: "image_23.jpg",
        price: 10.0,
      },
    ]);

    console.log("helmets have been seeded");
  } catch (error) {
    console.error(error);
  } finally {
    db.close();
  }
});
