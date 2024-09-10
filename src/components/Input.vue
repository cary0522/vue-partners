<script setup>
const props = defineProps(['inputId', 'labelContent', 'inputType', 'placeHolder', 'disable'])
const modelValue = defineModel()

</script>

<template>
    <div class="">
        <label :for=props.inputId class="mx-auto my-2">{{ props.labelContent }}
            <input :type=props.inputType :id=props.inputId :placeholder=props.placeHolder :name=props.inputId
                v-model="modelValue" :disabled="props.disable"/>
        </label>
    </div>
</template>