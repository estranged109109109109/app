<template>
    <v-app-bar app color="#150e44" dark>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer />
        <v-btn @click="home" class="ma-1" color = "orange darken-2">
            <v-icon>mdi-arrow-left</v-icon>home
        </v-btn>
        <v-btn @clicl="back" class="ma-1" color="#99ade6">
            <v-icon>mdi-arrow-left</v-icon>back
        </v-btn>
        <v-btn @clicl="go" class="ma-1" color="#99ade6">
            <v-icon>mdi-arrow-left</v-icon>Go
        </v-btn>
    </v-app-bar>
</template>
<script>
import { EventBus } from "../event-bus";
import router from "../router";
export default {
    data(){
        return{
            title : "HOME",
        };
    },
    created(){
        EventBus.$on("title",title =>{
            this.title = title;
        });
    },
    methods:{
        go:function(){
            router.go(1);
        },
        back: function(){
            router.back(1);
        },
        home: function(){
            router.push("/lotus", () => {});
        }
    }
};
</script>