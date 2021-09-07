import { createContext, useContext } from "react";
import AppStore from "./appStore";
import CommonStore from "./commonStore";
import ContactStore from "./contactStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
import UserStore from "./userStore";

interface Store {
    appStore: AppStore
    commonStore: CommonStore
    userStore: UserStore
    modalStore: ModalStore,
    profileStore: ProfileStore,
    contactStore: ContactStore
}

export const store: Store = {
    appStore: new AppStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStore(),
    contactStore: new ContactStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}