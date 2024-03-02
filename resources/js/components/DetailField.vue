<template>
    <PanelItem :index="index" :field="localField" />
</template>

<script>
import MarkdownIt from "markdown-it";

export default {
    props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],

    data() {
        return {
            localField: {...this.field}
        }
    },

    watch: {
        field: {
            immediate: true,
            deep: true,
            handler(newValue) {
                this.localField = {...newValue};
                this.localField.asHtml = true;
                this.localField.value = this.fieldValue;
            }
        }
    },

    computed: {
        fieldValue() {
            console.log(this.field.displayedAs)
            const md = new MarkdownIt();
            return md.render(this.localField.displayedAs || this.localField.value);
        }
    },
}
</script>
