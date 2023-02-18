import React, { FC, ReactNode, useEffect, useState, useRef, useMemo } from "react";
import { Animated, StyleSheet, useWindowDimensions, View } from "react-native";

interface IMessageConfig {
  title: string;
  message?: string;
  type: "success" | "error" | "info" | "warning";
  illustration?: ReactNode;
  dismissOnButtonPress?: boolean;
  buttons?: Array<{
    title: string;
    onPress?: () => void;
    variant: "primary" | "secondary" | "destructive";
  }>;
  onDismiss?: () => void;
}

type showMessageFnType = (messageConfig: IMessageConfig) => void;
type showLoaderFnType = (status: boolean) => void;

class AlertManager {
  private showMessageFn: showMessageFnType = () => {};
  private showLoaderFn: showLoaderFnType = () => {};
  register = (showMessage: showMessageFnType, showLoader: showLoaderFnType) => {
    this.showMessageFn = showMessage;
    this.showLoaderFn = showLoader;
  };
  public showLoader = (status: boolean) => this.showLoaderFn(status);
  public showMessage = (messageConfig: IMessageConfig) => this.showMessageFn(messageConfig);
}

const localAlertManager = new AlertManager();

export const ShowMessage = (messageConfig: IMessageConfig) => localAlertManager.showMessage(messageConfig);
export const ShowLoader = (status: boolean) => localAlertManager.showLoader(status);

export interface IAlertComponent {
  messageConfig: IMessageConfig;
  dismissModal?: () => void;
}

interface ICustomizableAlert {
  loaderComponent: ReactNode;
  messageComponent: FC<IAlertComponent>;
}

export const AlertCustomizationProvider: FC<ICustomizableAlert> = (props) => {
  const { height, width } = useWindowDimensions();
  const MessageComponent = props.messageComponent;
  const animationRef = useRef<Animated.Value>(new Animated.Value(0)).current;
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [messageInfo, setMessageInfo] = useState<IMessageConfig>();

  const DismissModal = () => {
    setMessageInfo(undefined);
    messageInfo?.onDismiss && messageInfo.onDismiss();
    setShowLoader(false);
  };

  useEffect(() => {
    localAlertManager.register(setMessageInfo, setShowLoader);
  }, []);

  const showModal = useMemo(() => showLoader || !!messageInfo, [showLoader, messageInfo]);

  useEffect(() => {
    Animated.spring(animationRef, { toValue: showModal ? 1 : 0, useNativeDriver: false, friction: 10 }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        styles.viewStyles,
        {
          transform: [{ translateY: animationRef.interpolate({ inputRange: [0, 1], outputRange: [-1 * height, 0] }) }],
        },
      ]}
    >
      <Animated.View
        style={[styles.flex, { transform: [{ scale: animationRef }], height, width, opacity: animationRef }]}
      >
        {showModal && (
          <>
            {messageInfo ? (
              <MessageComponent messageConfig={messageInfo} dismissModal={DismissModal} />
            ) : (
              <View style={[styles.flex, { height, width }]}>{props.loaderComponent}</View>
            )}
          </>
        )}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: "#0006",
  },
  flex: { flex: 1 },
});
