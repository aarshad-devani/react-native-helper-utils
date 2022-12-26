import { FC } from "react";
import type { IFallBackProps } from "./types";
export type Props = {
    error: Error;
    resetError: Function;
};
declare const FallbackComponent: FC<IFallBackProps>;
export default FallbackComponent;
