<template lang="">
    <div>
        <Aside></Aside>
        <Navbar></Navbar>

    </div>
</template>

<script>
import Aside from "./components/Aside.vue";
import Navbar from "./components/Navbar.vue";

export default {
    components: {
        Navbar,
        Aside,
    },
};
</script>
