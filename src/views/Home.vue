<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue,
        Provide
    } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue';

    @Component({
        components: {
            HelloWorld
        }
    })
    export default class Home extends Vue {
        @Provide('data')
        public data = {};
        @Provide('users')
        public users = [
            {
                name: 'test',
                id: 0
            }
        ];
    }
</script>
