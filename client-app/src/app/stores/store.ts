import { createContext, useContext } from "react";
import AppStore from "./appStore";
import CommonStore from "./commonStore";

interface Store {
    appStore: AppStore
    commonStore: CommonStore
}

export const store: Store = {
    appStore: new AppStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}