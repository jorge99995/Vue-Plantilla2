<template lang="">
    <div>
        <Aside></Aside>
        <Navbar></Navbar>
        <div class="page-wrapper">
            <div class="content container-fluid">
        <router-view></router-view>
    </div>

</div>

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
