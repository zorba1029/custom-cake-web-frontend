import type { Action } from "redux";

export type EdgeImageState = {
    edgeImage: string | HTMLImageElement | null;
    isUploaded: boolean;
    originalName: string;
    mimeType: string;
    filename: string;
    size: number;
}

export type SetAllEdgeImageAction = Action<'@EdgeImage/setAllEdgeImage'> & {
    payload: EdgeImageState;
}

export type ResetAllEdgeImageAction = Action<'@EdgeImage/resetAllEdgeImage'> & {
    payload: null;
}

export type EdgeImageActions = SetAllEdgeImageAction | ResetAllEdgeImageAction;

