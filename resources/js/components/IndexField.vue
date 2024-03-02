<template>
    test
    <span v-html="fieldValue"></span>
</template>


<script>
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export default {
    props: ['resourceName', 'field'],

    computed: {
        fieldValue() {
            let value = this.field.displayedAs || this.field.value;
            return md.render(value);
        },
    }
}
</script>
