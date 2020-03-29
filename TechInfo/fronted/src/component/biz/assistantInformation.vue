<template>
    <v-container>
        <v-row>
            <v-col>
                <v-textarea v-mode="overview" rows="3" label ="overview" outlined readonly></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-textarea v-mode="userProcess" row="3" label = "Use & Process" outlined readonly></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-textarea v-mode="example" rows="3" label ="Example" outlined readonly></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn id="more" v-on:click="find()"> Technical Information</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { EventBus } from "../../event-bus";
import router from '../../router';
export default {
    data(){
        return {
            overview: "",
            userProcess: "",
            example: "",
        };
    },
    created() {
        EventBus.$emit('title',"Assistant Information");
        this.$http.get("/techinfo/"+this.route.query.pgmNo+"/"+this.$route.qurey.elem+"/"+this.$route.query.value).then(response =>{
            this.overview = response.data[0].OVERVIEW;            
            this.useProcess = response.data[0].PROCESS;
            this.example = response.data[0].EXAMPLE;
            this.pgmNo = response.data[0].PGMNO;
            this.element = response.data[0].ELEMENT;
        });
    },
    methods:{
        find:function() {
            router.push({
                name: 'TI',
                query: {pgmNo : this.pgmNo, elem: this.$route.query.elem, value: this.$route.query.value},
            })
        },
    }
};
</script>
