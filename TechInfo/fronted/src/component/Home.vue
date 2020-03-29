<template>
    <v-container>
        <v-row class="text-left">
            <v-col cols="12">
            </v-col>
        <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">
                Welocme Technical Info.
            </h1>
        </v-col>
        <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">
                Manaing Technical Objects Items
            </h1>
        </v-col>
    <div id="app">
        <div calss="text-center">
            <v-app id="inspire">
                <v-btn class="ma-2" v-on:click="find()" color="primary" dark>Go to sampe>
                    <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                </v-btn>
            </v-app>
        </div>
    </div>
        </v-row>
    </v-container>
</template>                    
<script>
import { EventBus } from "../event-bus";
import router from '../router'
export default {
    methods:{
        find:function () {
            router.push({
                name: 'AI',
                query: { pgmNo: 'CFG_P2003', elem: 'dynPrptGrpNm'},
            })
        },
    },
    created(){
        EventBus.$emit("title","HOME");
        },
        name : 'HellowWorld',
        data: () => ({
            WhatsNext: [
            ],
        }),
}
</script>