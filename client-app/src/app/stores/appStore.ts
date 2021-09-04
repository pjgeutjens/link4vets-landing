import { makeAutoObservable } from 'mobx'
import agent from '../api/agent';
import { Application } from '../models/app'

export default class AppStore {
    appsRegistry = new Map<string, Application>();
    selectedApp: Application | undefined = undefined;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this)
    }

    get apps() {
        return Array.from(this.appsRegistry.values())
    }

    loadApps = async () => {
        this.setLoadingInitial(true);
        try {
            const apps = await agent.Applications.list();
            apps.forEach(app => {
                this.appsRegistry.set(app.id, app);
            })
            this.setSelectedapp(this.apps[0])
            this.setLoadingInitial(false);

        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadApp = async (id:string) => {
        let app = this.getApp(id);
        if (app) {this.selectedApp = app}
        else {
            this.loadingInitial = true;
            try {
                app = await agent.Applications.details(id);
                this.setApp(app);
                this.setSelectedapp(app);
                this.setLoadingInitial(false);
                
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
                
            }
        }
    }

    private getApp = (id: string) => this.appsRegistry.get(id)
    private setApp = (app: Application) => {
        this.appsRegistry.set(app.id, app);
    }

    setLoadingInitial = (state: boolean) => this.loadingInitial = state;
    setSelectedapp = (app: Application) => this.selectedApp = app;
}