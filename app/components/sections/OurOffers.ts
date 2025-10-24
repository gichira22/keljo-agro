// app/data/stakeholderData.ts
export interface StakeholderCard {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

export const stakeholdersData: StakeholderCard[] = [
  {
    title: "Farmers",
    description: "We empower farmers with timely access to quality inputs, practical training, mechanization solutions, and robust market linkages, enabling higher productivity, sustainable livelihoods, and long-term growth.",
    icon: "/icons/farmers-icon.svg",
    iconAlt: "Farmers icon"
  },
  {
    title: "Governments & NGOs",
    description: "We collaborate on strategic initiatives in food security, rural development, and sustainable agriculture, delivering scalable, data-driven, and impactful solutions.",
    icon: "/icons/ngos-icon.svg",
    iconAlt: "Government icon"
  },
  {
    title: "Agribusinesses",
    description: "We take away the burden of farmer outreach and aggregation by managing end-to-end agronomy projects, including trials, demonstrations, and field support.",
    icon: "/icons/agribs-icon.svg",
    iconAlt: "Business icon"
  },
  {
    title: "Investors",
    description: "We offer attractive agribusiness investment opportunities that combine strong financial returns with demonstrable social, economic, and environmental impact.",
    icon: "/icons/investors-icon.svg",
    iconAlt: "Investor icon"
  },
  {
    title: "Consumers",
    description: "We provide nutritious, affordable, and high-quality food products that meet evolving demands while supporting sustainable production practices.",
    icon: "/icons/consumers-icon.svg",
    iconAlt: "Consumer icon"
  }
];