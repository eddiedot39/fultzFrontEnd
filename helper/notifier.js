import { Easing, Notifier, NotifierComponents } from "react-native-notifier";

export default (title, description, type) => Notifier.showNotification({
    title,
    description: description ? description : '',
    animationDuration: 1500,
    showAnimationDuration: 300,
    showEasing: Easing.ease,
    hideOnPress: false,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: type
    }
  });