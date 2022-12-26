import React, { Component, ErrorInfo } from "react";
import type { IState, IProps } from "./types";
export type { IFallBackProps } from "./types";
declare class ErrorBoundary extends Component<IProps, IState> {
    state: Readonly<IState>;
    constructor(props: IProps);
    static getDerivedStateFromError(error: Error): IState;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    resetError: () => void;
    render(): React.ReactNode;
}
export default ErrorBoundary;
