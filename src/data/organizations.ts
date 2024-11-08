export interface Organization {
  name: string;
  logo: string;
  domain: string;
  link: string;
}

export const organizations: Organization[] = [
  {
    name: "HROne",
    logo: "https://hrone.cloud/wp-content/uploads/2023/06/hrone-logo.svg",
    domain: "HR Technology",
    link: "https://hrone.cloud"
  },
  {
    name: "Paytail",
    logo: "https://businessnewsthisweek.com/wp-content/uploads/2021/12/Paytail.png",
    domain: "Fintech",
    link: "https://paytail.com"
  },
  {
    name: "Mahindra",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Mahindra_Auto.png",
    domain: "Automotive & Tech",
    link: "https://www.mahindra.com"
  },
  {
    name: "Upraised",
    logo: "https://pbs.twimg.com/profile_images/1483834811441905666/F7E6Iqhc_400x400.jpg",
    domain: "Product Education",
    link: "https://www.upraised.co"
  },
  {
    name: "Emeritus",
    logo: "https://eict.iitg.ac.in/association_support/040820356686388cdd1e0899c033d64c10f713.jpg",
    domain: "EdTech",
    link: "https://emeritus.org"
  },
  {
    name: "Soroco",
    logo: "https://www.highiq.ai/assets/images/soroco.png",
    domain: "Process Mining",
    link: "https://soroco.com"
  }
];