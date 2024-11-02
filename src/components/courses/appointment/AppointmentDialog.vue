<script setup lang="ts">
  import CourseSection from 'src/components/models';
import { reactive, ref } from 'vue';

  const prop = defineProps<{
    activate: boolean,
    course: CourseSection
  }>()

  defineEmits([
    'close',
    'open-dialog'
  ])


  const appointmentDetails = reactive({
    course: prop.course,
    instructor: prop.course.instructor,
    date: ''
  })
</script>

<template>
  <q-dialog
    :model-value="activate"
    persistent
  >
    <q-card
      class="q-pa-sm"
      style="width: 500px; max-width: 80vw;"
    >
      <q-card-section>
        <div class="text-h6">
          Set Appointment
        </div>
        <q-form>
          <q-field
            stack-label
            label="Course"
            v-model="appointmentDetails.course"
          >
            {{ prop.course.course }}
          </q-field>
          <q-field
            stack-label
            label="Instructor"
            v-model="appointmentDetails.instructor"
          >
            {{ course.instructor }}
          </q-field>

          <!-- APPOINTMENT DATE & TIME -->
          <q-input
          	stack-label
            v-model="appointmentDetails.date"
            label="Appointment Time"
          >
            <!-- <template #prepend>
            </template> -->
            <template #append>
              <q-icon
                name="sym_r_event"
                class="cursor-pointer"
              >
                <q-popup-proxy
                  cover
                >
                  <q-date
                    v-model="appointmentDetails.date"
                    mask="ddd YYYY/MM/DD HH:mm"
                  >
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        icon="sym_r_check"
                        round
                        flat
                      />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
              <q-icon
                name="sym_r_access_time"
                class="cursor-pointer"
              >
                <q-popup-proxy
                  cover
                >
                  <q-time
                    v-model="appointmentDetails.date"
                    mask="ddd YYYY/MM/DD HH:mm"
                    format24h
                  >
                    <div class="row items-center justify-end">
                      <q-btn
                        v-close-popup
                        icon="sym_r_check"
                        round
                        flat
                      />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-form>
      </q-card-section>
      <q-card-actions
        align="right"
      >
        <q-btn
          flat
          round
          icon="sym_r_close"
          @click="$emit('close')"
          color="red"
        />
        <q-btn
          flat
          round
          icon="sym_r_calendar_add_on"
          :disable="!appointmentDetails.date"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
