export type Education = {
  institution: string;
  program?: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
};

export const educationData: Education[] = [
  {
    institution: "Universitas Kristen Satya Wacana",
    program: "Teknik Informatika",
  },
];
