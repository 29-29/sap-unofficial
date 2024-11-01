<script setup lang="ts">
defineProps({
  activate: Boolean
})
</script>

<template>
  <q-dialog
    :model-value="activate"
    persistent
  >
    <q-card>
      <q-card-section>Appointment dialog!</q-card-section>
      <q-card-actions
        align="right"
      >
        <q-btn
          flat
          dense
          icon="check"
          @click="$emit('close')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
