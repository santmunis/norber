import { ReactElement } from "react";

export interface IOwnProps {
    suffix?: ReactElement;
    prefix?: ReactElement;
    title: string;
}