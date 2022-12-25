import { FC, PropsWithChildren } from "react";

export interface IProps extends PropsWithChildren {
  FallbackComponent?: FC<IFallBackProps>;
  onError?: (error: Error, componentStack: string) => void;
}

export interface IState {
  error?: Error;
}

export type IFallBackProps = { error: Error; resetError: () => void };
