import { StaticImageData } from "next/image";

export interface PLACE {
    id:number,
    title : string,
    smalldesc : string,
    description : string,
    image : StaticImageData,
}