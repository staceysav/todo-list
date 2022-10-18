<script setup lang="ts">
import { ref } from 'vue';
import { useItemStore } from '../stores/item'
const itemStore = useItemStore();
const text = ref<String>('');

function anotherFunction() {
    itemStore.addItem(text.value);
    itemStore.sortItems();
    text.value = ""
}

</script>

<template>
    <!-- <ul>
        <li v-for="item in itemStore.items">{{ item.content }} {{ item.checkbox }} </li>
    </ul> -->

    <!-- <div>{{itemStore.fun}}</div> -->
    <!-- {{ itemStore.items }} -->
    <input v-model=text />
    <button @click="anotherFunction()">Add</button>
    <button @click="itemStore.deleteItems()">Delete</button>

    <div v-for="item in itemStore.fun">
        <input :id="item.id" type="checkbox" :value="item.content" v-model="item.checkbox" @change="itemStore.sortItems()" />
        <label :for="item.id">{{item.content}}</label>
    </div>
</template>

<!-- @change="itemStore.changeCheckbox(item.checkbox, item.id)" -->