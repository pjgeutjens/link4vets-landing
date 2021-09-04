import { createContext, useContext } from "react";
import AppStore from "./appStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
import UserStore from "./userStore";

interface Store {
    appStore: AppStore
    commonStore: CommonStore
    userStore: UserStore
    modalStore: ModalStore,
    profileStore: ProfileStore
}

export const store: Store = {
    appStore: new AppStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}