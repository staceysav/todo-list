import { defineStore } from 'pinia'
import uuid4 from "uuid4";

interface Item {
    checkbox: Boolean
    content: String
    id: String
}


export const useItemStore = defineStore('item', {
    state() {
        return {
            items: [] as Item[]
        }
    },
    getters: { //функции, которые не меняют стейт. только получение инфы. computed
        fun(): Item[] {
            return this.items
        },

    },
    actions: { //функции для изменения инфы в стейте. как methods
        addItem(content: String) {
            if (content != "") {
                this.items.push({ content: content, checkbox: false, id: uuid4() });
            }
        },
        deleteItems() {
            this.items = [];
        },
        sortItems() {
            this.items.sort(function (a: Item, b: Item): number {
                if (a.checkbox === b.checkbox) {
                    return 0;
                }
                if (a.checkbox) {
                    return 1;
                }
                return -1;
            });
        }

    },
    persist: {
        enabled: true
    }
})