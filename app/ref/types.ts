import { StaticImageData } from "next/image";

export interface PLACES {
    id:number,
    title : string,
    smalldesc : string,
    description : string,
    slug:any,
    content:any
    image : StaticImageData,
}

export interface singlePlace {
    title:string,
    currentSlug:string,
    content:any,
    image:StaticImageData
}
export interface GalleryTypes {
    title:string,
    id:number,
    image:StaticImageData
}
export interface homeContents {
    id:number,
    image?: StaticImageData,
    title:string,
    blurDataURL?:string,
    url?:string,
    content:any
}
export interface aboutContents {
    id:number,
    image?: StaticImageData,
    title:string,
    blurDataURL?:string,
    content:any
}