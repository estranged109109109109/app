<template>
<v-col>
    <v-row>
        <v-input>Table</v-input>
    </v-row>
    <v-row>
        <v-text-field v-model="tableNm" label = "Table Name" outlined counter="100" :rules="rules"></v-text-field>
    </v-row>
    <v-row>
        <v-input>Maximum Row</v-input>
    </v-row>    
    <v-row>
        <v-text-field v-model="maxRow" label = "Maximum Row" outlined :rules="limitRow"></v-text-field>
    </v-row>
    <v-row>
        <v-btn id="searchTable" v:on:click="searchTableInfo()">Search</v-btn>
        <v-btn id="excel" v:on:click="tableInfo()"> Excel download</v-btn>
    </v-row>
</v-col>
</template>
<script>
import { EventBus } from "../../event-bus";
import router from '../../router';
import XLSX from "../../node_module/xlsx/xlsx";
export default {
    data(){
        return {
            tableNm: "",
            maxRow: "1000",
            shortDesc: "",
            rules: [v => v.length <=100 || 'Max 100 characters'],
            limitRow: [v => v <=5001 || 'Max 5000 rows'],
            exceldownInfo:[
            ],
            colInfo: [
            ],
            pagination: {},
            headers: [
                { text: "Field", value: "COL_NM" },
                { text: "K", value: "PK" },
                { text: "Type", value: "DATA_TP_CNTN" },
                { text: "Length", value: "DATA_LN" },
                { text: "Nullable", value: "NULB" },
                { text: "DF", value: "DATA_DF_VAL" },
                { text: "Description", value: "COL_DES" },
            ],
        };
    },
    created() {
        EventBus.$emit('title',"Table Display");
        this.$http.get("/tableinfo/tbl/"+this.$route.query.tableNm).then(response => {
            this.tableNm = response.data[0].TBL_NM;            
            this.shortDesc = response.data[0].SHORT_DESC;
            this.colInfo = response.data[0].COL_INFO;
            this.exceldownInfo = response.data[0].EXCEL_INFO;
        });
    },
    methods:{
        excel:function() {
            var fieldWS = XLSX.util.json_to_sheet(this.exceldownInfo)
            var wb = XLSX.util.book_new()
            XLSX.util.book_append_sheet(wb,fieldWS,'data')
            XLSX.writeFile(wb,'book.xlsx')
        },
        tableInfo:function(){
            this.$http.get("/tableinfo/exl/"+this.tableNm+"/"+this.maxRow).then(response => {
                this.exceldownInfo = response.data[0].EXCEL_INFO;
                var fieldWS = XLSX.util.json_to_sheet(this.exceldownInfo)
                var wb = XLSX.util.book_new()
                XLSX.util.book_append_sheet(wb,fieldWS,'data')
                XLSX.writeFile(wb,'book.xlsx')
        });
    },
    searchTableInfo:function(){
        this.$http.get("tableinfo/tbl/"+this.tableNm).then(response => {
            this.colInfo = response.data[0].COL_INFO;
        });
    },
    }
};
</script>
