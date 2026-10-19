// All site copy lives here so it can be edited without touching layout code.

export const company = {
  name: "AL-WADI LOGISTICS LLC",
  short: "Al-Wadi Logistics",
  tagline: "Freight Brokerage & Logistics Services",
  email: "info@alwadilogistics.com",
  // TODO: replace with your real details once issued / available
  phone: "+1 (000) 000-0000",
  hours: "Mon–Fri, 7:00 AM – 7:00 PM CT · After-hours load support",
  mcNumber: "MC # — pending",
  dotNumber: "USDOT # — pending",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#partners", label: "Shippers & Carriers" },
  { href: "#contact", label: "Contact" },
];

export const services = [
  {
    icon: "truck",
    title: "Full Truckload (FTL)",
    text: "Dedicated dry van capacity for full shipments, matched with a vetted carrier on the lane you need.",
  },
  {
    icon: "boxes",
    title: "Less-Than-Truckload (LTL)",
    text: "Cost-efficient options for smaller freight, so you pay only for the space your cargo uses.",
  },
  {
    icon: "snowflake",
    title: "Refrigerated (Reefer)",
    text: "Temperature-controlled carriers for food, produce and other sensitive goods from pickup to delivery.",
  },
  {
    icon: "layers",
    title: "Flatbed & Open Deck",
    text: "Capacity for machinery, building materials and oversized loads, with carriers experienced in securement.",
  },
  {
    icon: "handshake",
    title: "Rate Negotiation",
    text: "We work the market for you, negotiating fair, competitive rates that keep both sides of the load moving.",
  },
  {
    icon: "radar",
    title: "Shipment Coordination",
    text: "One point of contact from booking to POD: pickup scheduling, check calls, updates and issue resolution.",
  },
] as const;

export const steps = [
  {
    title: "Tell us about your freight",
    text: "Share origin, destination, dates, equipment type and any special requirements.",
  },
  {
    title: "We quote & match a carrier",
    text: "We negotiate the rate and match your load with an authorized, insured motor carrier suited to the lane.",
  },
  {
    title: "We coordinate the move",
    text: "We confirm pickup, keep communication flowing between you and the driver, and track progress en route.",
  },
  {
    title: "Delivered & documented",
    text: "Proof of delivery is collected and shared, paperwork is closed out, and invoicing is kept simple.",
  },
];

export const shipperPoints = [
  "Access to a broad network of independent carriers nationwide",
  "Competitive, transparent rates negotiated on your behalf",
  "One dedicated contact for every shipment",
  "Proactive updates from pickup to proof of delivery",
];

export const carrierPoints = [
  "Consistent, quality loads matched to your equipment and lanes",
  "Clear rate confirmations and respectful communication",
  "Prompt, reliable payment terms",
  "A broker who treats you as a long-term partner",
];

export const values = [
  { title: "Efficient", text: "Fast quotes, quick carrier matching and fewer empty miles." },
  { title: "Reliable", text: "We only work with authorized, insured carriers and keep you informed." },
  { title: "Transparent", text: "Clear rates, clear documents and honest communication on every load." },
];
