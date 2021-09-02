import { createContext, useContext } from "react";
import AppStore from "./appStore";
import CommonStore from "./commonStore";
import UserStore from "./userStore";

interface Store {
    appStore: AppStore
    commonStore: CommonStore
    userStore: UserStore
}

export const store: Store = {
    appStore: new AppStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}