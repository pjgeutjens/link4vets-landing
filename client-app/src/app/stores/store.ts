import { createContext, useContext } from "react";
import AppStore from "./appStore";

interface Store {
    appStore: AppStore
}

export const store: Store = {
    appStore: new AppStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}