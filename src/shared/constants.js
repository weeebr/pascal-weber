import { projectImages, designImages } from "./images";

export const topbarHeight = '107px';

export const designs = [
  { title: 'Cover of a school project (package design, school project)', client: 'BBBaden', src: designImages[0] },
  { title: 'Photo manipulation (school project)', client: 'AGS BS', src: designImages[1] },
  { title: 'Birthday poster for my sister', client: 'Nora Weber', src: designImages[2] },
  { title: 'Fictional advertising of a fragrance spray (school project)', client: 'AGS BS', src: designImages[3] },
  { title: 'Cover of a school project (sports nutrition, school project)', client: 'BBBaden', src: designImages[4] },
  { title: 'X-Mas card 2012', client: 'various people', src: designImages[5] },
  { title: 'Banner for a logo', client: 'mindflow', src: designImages[6] },
  { title: 'Birthday flyer', client: 'Ivo Schoenholzer', src: designImages[7] },
  { title: 'X-Mas card 2011', client: 'various people', src: designImages[8] },
  { title: 'Logo competition (won #1 place)', client: 'IchWillParty', src: designImages[9] }
];

export const dev = [
  {
    title: "DeedsDAO",
    thumbnail: projectImages.deedsdao[0],
    images:  projectImages.deedsdao.slice(1),
    description: "Design and Implementation",
    year: "2022",
    more: true,
    url: "https://dorahacks.io/buidl/2462"
  },
  {
    title: "Parashift AG",
    thumbnail: projectImages.parashift[0],
    images: projectImages.parashift.slice(1),
    description: "Complete redesign I was fully in charge of, for a sophisticated document processing platform",
    year: "2021-2022",
    more: true,
    url: "https://support.parashift.io/manually-validate-extracted-data-extraction-validation"
  },
  {
    title: "noxx-musik.ch",
    thumbnail: projectImages.noxx[0],
    images: projectImages.noxx.slice(1),
    description: "Design and Implementation",
    year: "2021",
    url: "https://noxx-musik.ch"
  },
  {
    title: "fish-tank.io",
    thumbnail: projectImages.fishtank[0],
    images: projectImages.fishtank.slice(1),
    description: "Design and Implementation",
    year: "2021",
    url: "https://fish-tank.io"
  },
  {
    title: "red-struss",
    thumbnail: projectImages.redstuss[0],
    images: projectImages.redstuss.slice(1),
    description: "Design and Implementation",
    year: "2019",
    url: "https://red-struss.netlify.app"
  },
]
