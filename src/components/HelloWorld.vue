<template>
    <div class="hello">
        <div>
            {{msg}}
        </div>
        <div>
            {{name}}
        </div>
    </div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue,
    Watch,
    Inject
} from "vue-property-decorator";
import {
    Md5
} from "ts-md5/dist/md5";
@Component
export default class HelloWorld extends Vue {
    @Prop()
    private msg!: string;
    private name: string = "";
    protected created() {
        this.name = "fanteng";
        // console.log(Md5.hashStr("111"));
    }
    @Watch("name", {
        deep: false
    })
    private change(val: string, old: string) {
        // console.log('this name used');
    }
}
</script>

<style scoped lang="less">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
