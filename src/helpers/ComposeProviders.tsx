import React, { FC, PropsWithChildren } from "react";
export const composeProviders =
  (Providers: FC<PropsWithChildren>[]) => (Child: FC<PropsWithChildren>) => (props: any) =>
    Providers.reverse().reduce((acc, Provider) => <Provider>{acc}</Provider>, <Child {...props} />);
