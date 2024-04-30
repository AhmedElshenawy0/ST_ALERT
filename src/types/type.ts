export type DataType = {
    title: string;
    icon: string;
    count: number;
    countSvg: string;
    rate: number;
    rateSvg: string;
    risk: string;
    riskSvg: string;
  };
export type RadiosProps = {
  data: { title: string; radios: string[] };
};
export type RadiosData = { title: string; radios: string[] }[];
