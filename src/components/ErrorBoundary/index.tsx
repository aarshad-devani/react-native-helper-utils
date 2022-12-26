import React, { Component, ErrorInfo } from "react";

import type { IState, IProps } from "./types";
import defaultFallBackComponent from "./FallbackComponent";

export type { IFallBackProps } from "./types";

class ErrorBoundary extends Component<IProps, IState> {
  state: Readonly<IState> = { error: undefined };
  constructor(props: IProps) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): IState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // if (typeof this.props.onError === 'function') {
    //   this.props.onError.call(this, error, info.componentStack)
    // }
    this.props.onError && this.props.onError(error, errorInfo.componentStack);
  }

  resetError = () => {
    this.setState({ error: undefined });
  };

  render(): React.ReactNode {
    const { FallbackComponent = defaultFallBackComponent } = this.props;
    if (this.state.error) {
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
