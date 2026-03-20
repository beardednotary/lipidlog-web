import { MetadataRoute } from "next";

const BASE_URL = "https://lipidlog.com";

const LDL_VALUES = [
  130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 200, 210, 220,
];

const TG_VALUES = [
  150, 175, 200, 225, 250, 275, 300, 350, 400, 500,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/tools/cholesterol-calculator`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const labPages: MetadataRoute.Sitemap = [
    ...LDL_VALUES.map((v) => ({
      url: `${BASE_URL}/labs/ldl-${v}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...TG_VALUES.map((v) => ({
      url: `${BASE_URL}/labs/triglycerides-${v}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...labPages];
}
