import { model, models, Schema } from "mongoose";

const inquirySchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true, maxlength: 4000 },
    status: { type: String, enum: ["new", "contacted", "closed"], default: "new" },
  },
  { timestamps: true },
);
inquirySchema.index({ createdAt: -1 });

const portfolioItemSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true, maxlength: 120 },
    description: { type: String, required: true, trim: true, maxlength: 1000 },
    image: { type: String, required: true },
    category: { type: String, required: true, trim: true },
    gallery: { type: [String], default: [] },
    videoClips: { type: [{ title: String, url: String }], default: [] },
  },
  { timestamps: true },
);

const testimonialSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    role: { type: String, required: true, trim: true, maxlength: 120 },
    quote: { type: String, required: true, trim: true, maxlength: 1000 },
    image: { type: String, default: "" },
  },
  { timestamps: true },
);

export const Inquiry = models.Inquiry || model("Inquiry", inquirySchema);
export const PortfolioItem =
  models.PortfolioItem || model("PortfolioItem", portfolioItemSchema);
export const Testimonial = models.Testimonial || model("Testimonial", testimonialSchema);
