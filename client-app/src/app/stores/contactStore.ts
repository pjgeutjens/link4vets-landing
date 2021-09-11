import { format } from "date-fns";
import { makeAutoObservable, reaction, runInAction } from "mobx"
import agent from "../api/agent";
import { Contact, ContactFormValues } from "../models/contact"
import { Pagination, PagingParams } from "../models/pagination";
import { Profile } from "../models/profile";
import { store } from "./store";

export default class ContactStore {
    contactRegistry = new Map<string, Contact>();
    selectedContact: Contact | undefined = undefined;
    editMode = false
    loading = false
    loadingInitial = false
    pagination: Pagination | null = null;
    pagingParams = new PagingParams();
    predicate = new Map().set('all', true);
    searchString = "";

    constructor() {
        makeAutoObservable(this)

        reaction(
            () => this.predicate.keys(),
            () => {
                this.pagingParams = new PagingParams();
                this.contactRegistry.clear();
                this.loadContacts();
            }
        )
    }

    setPagingParams = (pagingParams: PagingParams) => {
        this.pagingParams = pagingParams;
    }


    setPredicate = (predicate: string, value: string | Date) => {
        const resetPredicate = () => {
            this.predicate.forEach((value, key) => {
                if (key !== 'startDate') this.predicate.delete(key);
            })
        }
        switch (predicate) {
            case 'all':
                resetPredicate();
                this.predicate.set('all', true);
                break;
            case 'isNew':
                resetPredicate();
                this.predicate.set('isNew', true);
                break;
        }
    }

    setSearchString = (searchString: string) => {
        this.searchString = searchString;
    }

    get axiosParams() {
        const params = new URLSearchParams();
        params.append('pageNumber', this.pagingParams.pageNumber.toString());
        params.append('pageSize', this.pagingParams.pageSize.toString());
        this.predicate.forEach((value, key) => {
            if (key === 'startDate') {
                params.append(key, (value as Date).toISOString());
            } else {
                params.append(key, value);
            }
        })
        return params;
    }

    get contactsByDate() {
        return Array.from(this.contactRegistry.values()).sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
    }

    get groupedContacts() {
        return Object.entries(
            this.contactsByDate.reduce((contacts, contact) => {
                const date = format(contact.createdAt!, 'dd MMM yyyy')
                contacts[date] = contacts[date] ? [...contacts[date], contact] : [contact]
                return contacts;
            }, {} as { [key: string]: Contact[] })
        )
    }


    loadContacts = async () => {
        this.loadingInitial = true
        try {
            const result = await agent.Contacts.list(this.axiosParams);
            result.data.forEach(contact => {
                this.setContact(contact)
            })
            this.setPagination(result.pagination)
            this.setLoadingInital(false)

        } catch (error) {
            console.log(error);
            this.setLoadingInital(false)
        }
    }

    setPagination = (pagination: Pagination) => {
        this.pagination = pagination;
    }

    loadContact = async (id: string) => {
        let contact = this.getContact(id);
        if (contact) {
            runInAction(() => {
                this.selectedContact = contact
            })
            return contact
        } else {
            this.loadingInitial = true;
            try {
                contact = await agent.Contacts.details(id);
                this.setContact(contact)
                runInAction(() => {
                    this.selectedContact = contact
                })
                this.setLoadingInital(false)
                return contact
            } catch (error) {
                console.log(error);
                this.setLoadingInital(false)
            }
        }
    }

    private setContact = (contact: Contact) => {
      // const user = store.userStore.user;
      //   if (user) {
      //     contact.isFavorited = contact.favorited!.some(a => a.userName === user.userName);
          
      // }
        contact.isFavorited = false;
        contact.createdAt = new Date(contact.createdAt!)
        this.contactRegistry.set(contact.id, contact);
    }

    private getContact = (id: string) => {
        return this.contactRegistry.get(id)
    }

    setLoadingInital = (state: boolean) => {
        this.loadingInitial = state;
    }

    setLoading = (state: boolean) => {
        this.loading = state;
    }

    createContact = async (contact: ContactFormValues) => {
        try {
            await agent.Contacts.create(contact);
            const newContact = new Contact(contact);
            this.setContact(newContact);
            runInAction(() => {
                this.selectedContact = newContact
            })
        } catch (error) {
            console.log(error)
            this.setLoading(false)
        }

    }

    updateContact = async (contact: ContactFormValues) => {
        try {
            await agent.Contacts.update(contact);
            runInAction(() => {
                if (contact.id) {
                    let updatedContact = { ...this.getContact(contact.id), ...contact };
                    this.contactRegistry.set(contact.id, updatedContact as Contact);
                    this.selectedContact = updatedContact as Contact;

                }
            })
        } catch (error) {
            console.log(error)
            this.setLoading(false)
        }

    }

    deleteContact = async (id: string) => {
        this.setLoading(true)
        try {
            await agent.Contacts.delete(id);
            runInAction(() => {
                this.contactRegistry.delete(id);
                this.loading = false
            })
        } catch (error) {
            console.log(error)
            this.setLoading(false)
        }

    }

    updateLike = async () => {
        const user = store.userStore.user;
        this.loading = true;
        try {
            await agent.Contacts.favorite(this.selectedContact!.id);
            runInAction(() => {
                if (this.selectedContact?.favorited) {
                    this.selectedContact.favorited = this.selectedContact.favorited?.filter(a => a.userName !== user?.userName);
                    this.selectedContact.isFavorited = false;
                } else {
                    const fan = new Profile(user!);
                    this.selectedContact?.favorited?.push(fan);
                    this.selectedContact!.isFavorited = true;
                }
                this.contactRegistry.set(this.selectedContact!.id, this.selectedContact!)
            })
        } catch (error) {
            console.log(error);

        } finally {
            runInAction(() => this.loading = false);
        }
    }

    cancelContactToggle = async () => {
        this.loading = true;
        try {
            await agent.Contacts.favorite(this.selectedContact!.id);
            runInAction(() => {
                this.selectedContact!.isFavorited = !this.selectedContact?.isFavorited;
                this.contactRegistry.set(this.selectedContact!.id, this.selectedContact!)
            })

        } catch (error) {
            console.log(error)
        } finally {
            runInAction(() => this.loading = false);
        }
    }

    clearSelectedContact = () => {
        this.selectedContact = undefined;
    }
}