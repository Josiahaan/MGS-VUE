<template>
  <table class="table table-fixed table-dark">
    <thead>
      <tr>
        <th class="py-3 border bg-slate-800 text-white">No.</th>
        <th class="py-3 border bg-slate-800 text-white">Nama Barang</th>
        <th class="py-3 border bg-slate-800 text-white">Stock</th>
        <th class="py-3 border bg-slate-800 text-white">Harga</th>
        <th class="py-3 border bg-slate-800 text-white">Nama Supplier</th>
        <th class="py-3 border bg-slate-800 text-white">Alamat Supplier</th>
        <th class="py-3 border bg-slate-800 text-white">No. Telp Supplier</th>
        <th class="py-3 border bg-slate-800 text-white">Aksi</th>
      </tr>
    </thead>
    <ItemRow :item="item"/>
  </table>
</template>

<script>
import ItemRow from "./ItemRow.vue";
export default {
  name: "ItemList",
  components: {
    ItemRow,
  },
  props: ['item'],
};
</script>

<style>
</style>