import "dotenv/config";
import { connectToDatabase } from "../lib/mongodb";
import { PortfolioItem, Testimonial } from "../lib/models";
import { defaultProjects } from "../app/lib/portfolio";

await connectToDatabase();
await PortfolioItem.deleteMany({});
await PortfolioItem.insertMany(defaultProjects);
await Testimonial.deleteMany({});
await Testimonial.insertMany([
  {
    name: "Sample Client",
    role: "Event organizer",
    quote: "A thoughtful, polished visual story from start to finish.",
  },
]);
console.log("Seeded portfolio items and testimonials.");
process.exit(0);
