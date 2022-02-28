import { ReactElement } from "react";

export interface ISearchListItem {
    name: string;
    post: string;
    points?: string;
    customSuffixItem?: ReactElement;
}