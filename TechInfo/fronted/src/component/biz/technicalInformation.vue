<template>
    <v-col>
        <v-row>
            <v-input>Program></v-input>
        </v-row>
        <v-row>
            <v-text-field v-model="pgmNm" label="Program Name" outlined readonly></v-text-field>
        </v-row>
        <v-row>
            <v-text-field v-model="transId" label="Transaction ID" rows=2 outlined readonly></v-text-field>
        </v-row>
        <v-row>
            <v-text-field v-model="screenID" label="Screen ID" rows=2 outlined readonly></v-text-field>
        </v-row>

        <v-row>
            <v-input>Database</v-input>
        </v-row>
        <v-row>
            <v-text-field v-model="category" label="Category" outlined readonly></v-text-field>
        </v-row>
        <v-row>
            <v-text-field v-model="tblNm" label="Table Name" outlined readonly></v-text-field>
        </v-row>
        <v-row>
            <v-text-field v-model="fldNm" label="Field Name" outlined readonly></v-text-field>
        </v-row>
        <v-row>
            <v-text-field v-model="colNm" label="Colmn Name" outlined readonly></v-text-field>
        </v-row>
        <v-row>
            <v-btn id ="more" v-on:click="find()">Field Information</v-btn>
            <v-btn id ="tableInfo" v-on:click="tableInfo()">Table Display</v-btn>
        </v-row>
    </v-col>  
</template>
<script>
import { EventBus } from "../../event-bus";
import router from '../../router';
export default {
    data(){
        return {
            pgmNm: "",
            transId: "",
            screenId: "",
            category: "",
            tblNm: "",
            fldNm: "",
            colNm: "",
        };
    },
    created() {
        EventBus.$emit('title',"Technical Information");
        this.$http.get("/techinfo/"+this.route.query.pgmNo+"/"+this.$route.qurey.elem+"/"+this.$route.query.value).then(response =>{
            this.pgmNo = response.data[0].PGMNO;
            this.transId = response.data[0].PROCESS;
            this.screenId = response.data[0].SCREEN_ID;
            this.category = response.data[0].CATEGORY;
            this.tblNm = response.data[0].TBL_NM;
            this.fldNm = response.data[0].FLD_NM;
            this.colNm = response.data[0].COL_NM;
        });
    },
    methods:{
        find:function() {
            router.push({
                name: 'FI',
                query: { tableNm: this.tblNm},
            })
        },
        tableInfo:function() {
            router.push({
                name: 'TD',
                query: {tableNm : this.tblNm },
            })
        },
    }
};
</script>