import mongoose from "mongoose";
import dotenv from "dotenv";
import Tour from "./models/Tour.js";

dotenv.config();

const sampleTours = [
  {
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    address: "Westminster, London, UK",
    price: 99,
    maxGroupSize: 10,
    desc: "Discover the iconic Westminster Bridge and stunning view of Big Ben and Parliament.",
    photo: "/tour-images/tour-img01.jpg",
    featured: true,
  },
  {
    title: "Bali Beach Escape",
    city: "Indonesia",
    distance: 400,
    address: "Kuta, Bali, Indonesia",
    price: 149,
    maxGroupSize: 8,
    desc: "Enjoy pristine white beaches, tropical sunsets, and vibrant Balinese culture.",
    photo: "/tour-images/tour-img02.jpg",
    featured: true,
  },
  {
    title: "Snowy Mountains Trek",
    city: "Thailand",
    distance: 500,
    address: "Chiang Mai, Thailand",
    price: 199,
    maxGroupSize: 8,
    desc: "Explore breathtaking mountain trails and serene cloud valleys in Northern Thailand.",
    photo: "/tour-images/tour-img03.jpg",
    featured: true,
  },
  {
    title: "Beautiful Sunrise Point",
    city: "Thailand",
    distance: 500,
    address: "Phuket, Thailand",
    price: 120,
    maxGroupSize: 8,
    desc: "Catch panoramic island sunrises and crystal-clear ocean waters.",
    photo: "/tour-images/tour-img04.jpg",
    featured: true,
  },
  {
    title: "Nusa Penida Island Tour",
    city: "Indonesia",
    distance: 500,
    address: "Nusa Penida, Bali",
    price: 160,
    maxGroupSize: 8,
    desc: "Visit Kelingking T-Rex beach and dramatic ocean cliff formations.",
    photo: "/tour-images/tour-img05.jpg",
    featured: false,
  },
  {
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 600,
    address: "Kyoto, Japan",
    price: 250,
    maxGroupSize: 12,
    desc: "Experience magical spring cherry blossoms in historic Kyoto gardens.",
    photo: "/tour-images/tour-img06.jpg",
    featured: false,
  },
  {
    title: "Holmen Lofoten Fjord",
    city: "Norway",
    distance: 800,
    address: "Lofoten Islands, Norway",
    price: 299,
    maxGroupSize: 6,
    desc: "Witness majestic northern fjords, traditional fishing villages, and aurora skies.",
    photo: "/tour-images/tour-img07.jpg",
    featured: false,
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB for seeding...");
    
    // Check if tours already exist
    const count = await Tour.countDocuments();
    if (count === 0) {
      await Tour.insertMany(sampleTours);
      console.log("Successfully seeded", sampleTours.length, "tours into database!");
    } else {
      console.log("Database already contains", count, "tours.");
    }
  } catch (err) {
    console.error("Seeding Error:", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
