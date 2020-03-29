<template>
<v-col>
    <v-row>
        <v-input>Table</v-input>
    </v-row>
    <v-row>
        <v-text-field v-modle="tableNm" label = "Table Name" outlined readonly></v-text-field>
    </v-row>
    <v-row>
        <v-text-field v-modle="shortDesc" label = "Short Description" outlined readonly></v-text-field>
    </v-row>
    <v-row>
        <v-btn id="excel" v:on:click="excel()"> Excel download</v-btn>
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
            shortDesc: "",
            colInfo: [
            ],
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
        EventBus.$emit('title',"Field Information");
        this.$http.get("/fieldInfo/des/"+this.$route.query.tableNm).then(response => {
            this.tableNm = response.data[0].TBL_NM;            
            this.shortDesc = response.data[0].SHORT_DESC;
            this.colInfo = response.data[0].COL_INFO;
        });
    },
    methods:{
        excel:function() {

            var fieldWS = XLSX.util.json_to_sheet(this.colInfo)
            var wb = XLSX.util.book_new()
            XLSX.util.book_append_sheet(wb,fieldWS,'data')
            XLSX.writeFile(wb,'book.xlsx')
        },
    }
};
</script>
