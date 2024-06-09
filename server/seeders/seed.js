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
        description: "this is the description",
        image: "image_1.jpg",
        price: 10.0,
      },
      {
        name: "image_2",
        description: "this is the description",
        image: "image_2.jpg",
        price: 10.0,
      },
      {
        name: "image_3",
        description: "this is the description",
        image: "image_3.jpg",
        price: 10.0,
      },
      {
        name: "image_4",
        description: "this is the description",
        image: "image_4.jpg",
        price: 10.0,
      },
      {
        name: "image_5",
        description: "this is the description",
        image: "image_5.jpg",
        price: 10.0,
      },
      {
        name: "image_6",
        description: "this is the description",
        image: "image_6.jpg",
        price: 10.0,
      },
      {
        name: "image_7",
        description: "this is the description",
        image: "image_7.jpg",
        price: 10.0,
      },
      {
        name: "image_8",
        description: "this is the description",
        image: "image_8.jpg",
        price: 10.0,
      },
      {
        name: "image_9",
        description: "this is the description",
        image: "image_9.jpg",
        price: 10.0,
      },
      {
        name: "image_10",
        description: "this is the description",
        image: "image_10.jpg",
        price: 10.0,
      },
      {
        name: "image_11",
        description: "this is the description",
        image: "image_11.jpg",
        price: 10.0,
      },
      {
        name: "image_12",
        description: "this is the description",
        image: "image_12.jpg",
        price: 10.0,
      },
      {
        name: "image_13",
        description: "this is the description",
        image: "image_13.jpg",
        price: 10.0,
      },
      {
        name: "image_14",
        description: "this is the description",
        image: "image_14.jpg",
        price: 10.0,
      },
      {
        name: "image_15",
        description: "this is the description",
        image: "image_15.jpg",
        price: 10.0,
      },
      {
        name: "image_16",
        description: "this is the description",
        image: "image_16.jpg",
        price: 10.0,
      },
      {
        name: "image_17",
        description: "this is the description",
        image: "image_17.jpg",
        price: 10.0,
      },
      {
        name: "image_18",
        description: "this is the description",
        image: "image_18.jpg",
        price: 10.0,
      },
      {
        name: "image_19",
        description: "this is the description",
        image: "image_19.jpg",
        price: 10.0,
      },
      {
        name: "image_20",
        description: "this is the description",
        image: "image_20.jpg",
        price: 10.0,
      },
      {
        name: "image_21",
        description: "this is the description",
        image: "image_21.jpg",
        price: 10.0,
      },
      {
        name: "image_22",
        description: "this is the description",
        image: "image_22.jpg",
        price: 10.0,
      },
      {
        name: "image_23",
        description: "this is the description",
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
